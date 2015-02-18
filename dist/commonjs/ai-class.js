System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, AiClassAttachedBehavior;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiClassAttachedBehavior = _export("AiClassAttachedBehavior", (function () {
        function AiClassAttachedBehavior(element) {
          _classCallCheck(this, AiClassAttachedBehavior);

          this.element = element;
        }

        _prototypeProperties(AiClassAttachedBehavior, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("value", "valueChanged", "ai-class");
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
              this.setupObserver();
              this.updateClasses();
            },
            writable: true,
            configurable: true
          },
          updateClasses: {
            value: function updateClasses() {
              var _this = this;
              Object.keys(this.value).forEach(function (className) {
                _this.element.classList[_this.value[className] ? "add" : "remove"](className);
              });
            },
            writable: true,
            configurable: true
          },
          valueChanged: {
            value: function valueChanged(newValue, oldValue) {
              this.updateClasses();
              if (!Object.is(newValue, oldValue)) {
                this.setupObserver();
              }
            },
            writable: true,
            configurable: true
          },
          setupObserver: {
            value: function setupObserver() {
              var self = this;
              Object.observe(this.value, function () {
                self.updateClasses();
              });
            },
            writable: true,
            configurable: true
          }
        });

        return AiClassAttachedBehavior;
      })());
    }
  };
});