/* */ 
"format register";
import {
  Parser, 
  ObserverLocator, 
  EventManager,
  ListenerExpression,
  BindingExpression,
  NameExpression,
  CallExpression,
  ONE_WAY,
  TWO_WAY,
  ONE_TIME
} from 'aurelia-binding';

export class SyntaxInterpreter {
  static inject() { return [Parser,ObserverLocator,EventManager]; }
  constructor(parser, observerLocator, eventManager){
    this.parser = parser;
    this.observerLocator = observerLocator;
    this.eventManager = eventManager;
  }

  interpret(resources, element, info, existingInstruction){
    if(info.command in this){
      return this[info.command](resources, element, info, existingInstruction);
    }

    return this.handleUnknownCommand(resources, element, info, existingInstruction);
  }

  handleUnknownCommand(resources, element, info, existingInstruction){
    var attrName = info.attrName,
        command = info.command;

    var instruction = this.options(resources, element, info, existingInstruction);
    
    instruction.alteredAttr = true;
    instruction.attrName = 'global-behavior';
    instruction.attributes.aureliaAttrName = attrName;
    instruction.attributes.aureliaCommand = command;

    return instruction;
  }

  determineDefaultBindingMode(element, attrName){
    var tagName = element.tagName.toLowerCase();

    if(tagName === 'input'){
      return attrName === 'value' || attrName === 'checked' ? TWO_WAY : ONE_WAY;
    }else if(tagName == 'textarea' || tagName == 'select'){
      return attrName == 'value' ? TWO_WAY : ONE_WAY;
    }

    return ONE_WAY;
  }

  bind(resources, element, info, existingInstruction){
    var instruction = existingInstruction || {attrName:info.attrName, attributes:{}};

    instruction.attributes[info.attrName] = new BindingExpression(
        this.observerLocator,
        this.attributeMap[info.attrName] || info.attrName,
        this.parser.parse(info.attrValue),
        info.defaultBindingMode || this.determineDefaultBindingMode(element, info.attrName),
        resources.valueConverterLookupFunction    
      );

    return instruction;
  }

  trigger(resources, element, info){
    return new ListenerExpression(
      this.eventManager,
      info.attrName,
      this.parser.parse(info.attrValue),
      false,
      true
    );
  }

  delegate(resources, element, info){
    return new ListenerExpression(
      this.eventManager,
      info.attrName,
      this.parser.parse(info.attrValue),
      true,
      true
    );
  }

  call(resources, element, info, existingInstruction){
    var instruction = existingInstruction || {attrName:info.attrName, attributes:{}};

    instruction.attributes[info.attrName] = new CallExpression(
        this.observerLocator,
        info.attrName,
        this.parser.parse(info.attrValue),
        resources.valueConverterLookupFunction    
      );

    return instruction;
  };

  options(resources, element, info, existingInstruction){
    var instruction = existingInstruction || {attrName:info.attrName, attributes:{}},
        attrValue = info.attrValue,
        language = this.language,
        name = null, target = '', current, i , ii;

    for(i = 0, ii = attrValue.length; i < ii; ++i){
      current = attrValue[i];

      if(current === ';'){
        info = language.inspectAttribute(resources, name, target.trim());
        language.createAttributeInstruction(resources, element, info, instruction);
        
        if(!instruction.attributes[info.attrName]){
          instruction.attributes[info.attrName] = info.attrValue;
        }

        target = '';
        name = null;
      } else if(current === ':' && name === null){
        name = target.trim();
        target = '';
      } else {
        target += current;
      }
    }

    if(name !== null){
      info = language.inspectAttribute(resources, name, target.trim());
      language.createAttributeInstruction(resources, element, info, instruction);

      if(!instruction.attributes[info.attrName]){
        instruction.attributes[info.attrName] = info.attrValue;
      }
    }

    return instruction;
  }
}

SyntaxInterpreter.prototype['for'] = function(resources, element, info, existingInstruction){
  var parts = info.attrValue.split(' of ');

  if(parts.length !== 2){
    throw new Error('Incorrect syntax for "for". The form is: "$local of $items".');
  }

  var instruction = existingInstruction || {attrName:info.attrName, attributes:{}};

  instruction.attributes.local = parts[0];
  instruction.attributes[info.attrName] = new BindingExpression(
      this.observerLocator,
      info.attrName,
      this.parser.parse(parts[1]),
      ONE_WAY,
      resources.valueConverterLookupFunction
    );

  return instruction;
};

SyntaxInterpreter.prototype['two-way'] = function(resources, element, info, existingInstruction){
  var instruction = existingInstruction || {attrName:info.attrName, attributes:{}};

  instruction.attributes[info.attrName] = new BindingExpression(
      this.observerLocator,
      info.attrName,
      this.parser.parse(info.attrValue),
      TWO_WAY,
      resources.valueConverterLookupFunction    
    );

  return instruction;
};

SyntaxInterpreter.prototype['one-way'] = function(resources, element, info, existingInstruction){
  var instruction = existingInstruction || {attrName:info.attrName, attributes:{}};

  instruction.attributes[info.attrName] = new BindingExpression(
      this.observerLocator,
      this.attributeMap[info.attrName] || info.attrName,
      this.parser.parse(info.attrValue),
      ONE_WAY,
      resources.valueConverterLookupFunction    
    );

  return instruction;
};

SyntaxInterpreter.prototype['one-time'] = function(resources, element, info, existingInstruction){
  var instruction = existingInstruction || {attrName:info.attrName, attributes:{}};

  instruction.attributes[info.attrName] = new BindingExpression(
      this.observerLocator,
      this.attributeMap[info.attrName] || info.attrName,
      this.parser.parse(info.attrValue),
      ONE_TIME,
      resources.valueConverterLookupFunction    
    );

  return instruction;
};

SyntaxInterpreter.prototype["view-model"] = function (resources, element, info) {
  return new NameExpression(info.attrValue, 'view-model');
};