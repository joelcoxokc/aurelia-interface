/* */ 
"format register";
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _aureliaTemplating = require("aurelia-templating");

var Behavior = _aureliaTemplating.Behavior;
var BoundViewFactory = _aureliaTemplating.BoundViewFactory;
var ViewSlot = _aureliaTemplating.ViewSlot;
var If = exports.If = (function () {
  function If(viewFactory, viewSlot) {
    this.viewFactory = viewFactory;
    this.viewSlot = viewSlot;
    this.showing = false;
  }

  _prototypeProperties(If, {
    metadata: {
      value: function metadata() {
        return Behavior.templateController("if").withProperty("value", "valueChanged", "if");
      },
      writable: true,
      configurable: true
    },
    inject: {
      value: function inject() {
        return [BoundViewFactory, ViewSlot];
      },
      writable: true,
      configurable: true
    }
  }, {
    valueChanged: {
      value: function valueChanged(newValue) {
        if (!newValue) {
          if (this.view) {
            this.viewSlot.remove(this.view);
            this.view.unbind();
          }

          this.showing = false;
          return;
        }

        if (!this.view) {
          this.view = this.viewFactory.create();
        }

        if (!this.showing) {
          this.showing = true;

          if (!this.view.bound) {
            this.view.bind();
          }

          this.viewSlot.add(this.view);
        }
      },
      writable: true,
      configurable: true
    }
  });

  return If;
})();
exports.__esModule = true;