System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, AiAction;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiAction = _export("AiAction", (function () {
        function AiAction(element) {
          _classCallCheck(this, AiAction);

          this.element = element;
        }

        _prototypeProperties(AiAction, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-action").withProperty("type").withProperty("shape").noView();
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              service;
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              this.element.classList.add("ai-action", "action-" + this.type, "action-" + this.shape);
            },
            writable: true,
            configurable: true
          }
        });

        return AiAction;
      })());
    }
  };
});