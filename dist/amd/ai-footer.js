System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, AiFooter;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiFooter = _export("AiFooter", (function () {
        function AiFooter(element) {
          _classCallCheck(this, AiFooter);

          this.element = element;
        }

        _prototypeProperties(AiFooter, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-footer");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              this.element.classList.add("ai-footer");
            },
            writable: true,
            configurable: true
          }
        });

        return AiFooter;
      })());
    }
  };
});