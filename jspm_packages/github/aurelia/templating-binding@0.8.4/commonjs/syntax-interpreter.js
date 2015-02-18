/* */ 
"format register";
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Parser = require("aurelia-binding").Parser;
var ObserverLocator = require("aurelia-binding").ObserverLocator;
var EventManager = require("aurelia-binding").EventManager;
var ListenerExpression = require("aurelia-binding").ListenerExpression;
var BindingExpression = require("aurelia-binding").BindingExpression;
var NameExpression = require("aurelia-binding").NameExpression;
var CallExpression = require("aurelia-binding").CallExpression;
var ONE_WAY = require("aurelia-binding").ONE_WAY;
var TWO_WAY = require("aurelia-binding").TWO_WAY;
var ONE_TIME = require("aurelia-binding").ONE_TIME;
var SyntaxInterpreter = (function () {
  function SyntaxInterpreter(parser, observerLocator, eventManager) {
    this.parser = parser;
    this.observerLocator = observerLocator;
    this.eventManager = eventManager;
  }

  _prototypeProperties(SyntaxInterpreter, {
    inject: {
      value: function inject() {
        return [Parser, ObserverLocator, EventManager];
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  }, {
    interpret: {
      value: function interpret(resources, element, info, existingInstruction) {
        if (info.command in this) {
          return this[info.command](resources, element, info, existingInstruction);
        }

        return this.handleUnknownCommand(resources, element, info, existingInstruction);
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    handleUnknownCommand: {
      value: function handleUnknownCommand(resources, element, info, existingInstruction) {
        var attrName = info.attrName,
            command = info.command;

        var instruction = this.options(resources, element, info, existingInstruction);

        instruction.alteredAttr = true;
        instruction.attrName = "global-behavior";
        instruction.attributes.aureliaAttrName = attrName;
        instruction.attributes.aureliaCommand = command;

        return instruction;
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    determineDefaultBindingMode: {
      value: function determineDefaultBindingMode(element, attrName) {
        var tagName = element.tagName.toLowerCase();

        if (tagName === "input") {
          return attrName === "value" || attrName === "checked" ? TWO_WAY : ONE_WAY;
        } else if (tagName == "textarea" || tagName == "select") {
          return attrName == "value" ? TWO_WAY : ONE_WAY;
        }

        return ONE_WAY;
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    bind: {
      value: function bind(resources, element, info, existingInstruction) {
        var instruction = existingInstruction || { attrName: info.attrName, attributes: {} };

        instruction.attributes[info.attrName] = new BindingExpression(this.observerLocator, this.attributeMap[info.attrName] || info.attrName, this.parser.parse(info.attrValue), info.defaultBindingMode || this.determineDefaultBindingMode(element, info.attrName), resources.valueConverterLookupFunction);

        return instruction;
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    trigger: {
      value: function trigger(resources, element, info) {
        return new ListenerExpression(this.eventManager, info.attrName, this.parser.parse(info.attrValue), false, true);
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    delegate: {
      value: function delegate(resources, element, info) {
        return new ListenerExpression(this.eventManager, info.attrName, this.parser.parse(info.attrValue), true, true);
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    call: {
      value: function call(resources, element, info, existingInstruction) {
        var instruction = existingInstruction || { attrName: info.attrName, attributes: {} };

        instruction.attributes[info.attrName] = new CallExpression(this.observerLocator, info.attrName, this.parser.parse(info.attrValue), resources.valueConverterLookupFunction);

        return instruction;
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    options: {
      value: function options(resources, element, info, existingInstruction) {
        var instruction = existingInstruction || { attrName: info.attrName, attributes: {} },
            attrValue = info.attrValue,
            language = this.language,
            name = null,
            target = "",
            current,
            i,
            ii;

        for (i = 0, ii = attrValue.length; i < ii; ++i) {
          current = attrValue[i];

          if (current === ";") {
            info = language.inspectAttribute(resources, name, target.trim());
            language.createAttributeInstruction(resources, element, info, instruction);

            if (!instruction.attributes[info.attrName]) {
              instruction.attributes[info.attrName] = info.attrValue;
            }

            target = "";
            name = null;
          } else if (current === ":" && name === null) {
            name = target.trim();
            target = "";
          } else {
            target += current;
          }
        }

        if (name !== null) {
          info = language.inspectAttribute(resources, name, target.trim());
          language.createAttributeInstruction(resources, element, info, instruction);

          if (!instruction.attributes[info.attrName]) {
            instruction.attributes[info.attrName] = info.attrValue;
          }
        }

        return instruction;
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return SyntaxInterpreter;
})();

exports.SyntaxInterpreter = SyntaxInterpreter;


SyntaxInterpreter.prototype["for"] = function (resources, element, info, existingInstruction) {
  var parts = info.attrValue.split(" of ");

  if (parts.length !== 2) {
    throw new Error("Incorrect syntax for \"for\". The form is: \"$local of $items\".");
  }

  var instruction = existingInstruction || { attrName: info.attrName, attributes: {} };

  instruction.attributes.local = parts[0];
  instruction.attributes[info.attrName] = new BindingExpression(this.observerLocator, info.attrName, this.parser.parse(parts[1]), ONE_WAY, resources.valueConverterLookupFunction);

  return instruction;
};

SyntaxInterpreter.prototype["two-way"] = function (resources, element, info, existingInstruction) {
  var instruction = existingInstruction || { attrName: info.attrName, attributes: {} };

  instruction.attributes[info.attrName] = new BindingExpression(this.observerLocator, info.attrName, this.parser.parse(info.attrValue), TWO_WAY, resources.valueConverterLookupFunction);

  return instruction;
};

SyntaxInterpreter.prototype["one-way"] = function (resources, element, info, existingInstruction) {
  var instruction = existingInstruction || { attrName: info.attrName, attributes: {} };

  instruction.attributes[info.attrName] = new BindingExpression(this.observerLocator, this.attributeMap[info.attrName] || info.attrName, this.parser.parse(info.attrValue), ONE_WAY, resources.valueConverterLookupFunction);

  return instruction;
};

SyntaxInterpreter.prototype["one-time"] = function (resources, element, info, existingInstruction) {
  var instruction = existingInstruction || { attrName: info.attrName, attributes: {} };

  instruction.attributes[info.attrName] = new BindingExpression(this.observerLocator, this.attributeMap[info.attrName] || info.attrName, this.parser.parse(info.attrValue), ONE_TIME, resources.valueConverterLookupFunction);

  return instruction;
};

SyntaxInterpreter.prototype["view-model"] = function (resources, element, info) {
  return new NameExpression(info.attrValue, "view-model");
};