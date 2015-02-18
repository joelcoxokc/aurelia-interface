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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWNsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEseUNBRUgsdUJBQXVCOzs7QUFGNUIsY0FBUSxzQkFBUixRQUFROzs7Ozs7O0FBRUgsNkJBQXVCO0FBV3RCLGlCQVhELHVCQUF1QixDQVdyQixPQUFPO2dDQVhULHVCQUF1Qjs7QUFZaEMsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7U0FDdkI7OzZCQWJVLHVCQUF1QjtBQUMzQixrQkFBUTttQkFBQyxvQkFBRztBQUNqQixxQkFBTyxRQUFRLENBQ1osWUFBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQ25EO2FBQ0Y7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRztBQUNkLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbEI7Ozs7O0FBTUQsY0FBSTttQkFBQyxnQkFBRztBQUNOLGtCQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7QUFDcEIsa0JBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTthQUNyQjs7OztBQUVELHVCQUFhO21CQUFDLHlCQUFHOztBQUNmLG9CQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxTQUFTLEVBQUk7QUFDM0Msc0JBQUssT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFLLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUE7ZUFDNUUsQ0FBQyxDQUFBO2FBQ0g7Ozs7QUFFRCxzQkFBWTttQkFBQyxzQkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQ2hDLGtCQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7QUFDcEIsa0JBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsRUFBRTtBQUNsQyxvQkFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO2VBQ3JCO2FBQ0Y7Ozs7QUFFRCx1QkFBYTttQkFBQyx5QkFBRztBQUNmLGtCQUFJLElBQUksR0FBRyxJQUFJLENBQUE7QUFDZixvQkFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFlBQU07QUFDL0Isb0JBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtlQUNyQixDQUFDLENBQUE7YUFDSDs7Ozs7O2VBdENVLHVCQUF1QiIsImZpbGUiOiJhaS1jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=