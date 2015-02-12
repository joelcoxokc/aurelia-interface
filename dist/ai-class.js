System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, AiClass;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiClass = _export("AiClass", (function () {
        function AiClass(element) {
          _classCallCheck(this, AiClass);

          this.element = element;
        }

        _prototypeProperties(AiClass, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("ai-class").withProperty("value", "valueChanged", "ai-class");
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

        return AiClass;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWNsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEseUNBRUgsT0FBTzs7O0FBRlosY0FBUSxzQkFBUixRQUFROzs7Ozs7O0FBRUgsYUFBTztBQWNOLGlCQWRELE9BQU8sQ0FjTCxPQUFPO2dDQWRULE9BQU87O0FBZWhCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1NBQ3ZCOzs2QkFoQlUsT0FBTztBQUNYLGtCQUFRO21CQUFDLG9CQUFHO0FBQ2pCLHFCQUFPLFFBQVEsQ0FDWixnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FDNUIsWUFBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQ25EO2FBQ0Y7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRztBQUNkLHFCQUFPLENBQ0wsT0FBTyxDQUNSLENBQUM7YUFDSDs7Ozs7QUFNRCxjQUFJO21CQUFDLGdCQUFHO0FBQ04sa0JBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtBQUNwQixrQkFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO2FBQ3JCOzs7O0FBRUQsdUJBQWE7bUJBQUMseUJBQUc7O0FBQ2Ysb0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVMsRUFBSTtBQUMzQyxzQkFBSyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQUssS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtlQUM1RSxDQUFDLENBQUE7YUFDSDs7OztBQUVELHNCQUFZO21CQUFDLHNCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFDaEMsa0JBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtBQUNwQixrQkFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUFFO0FBQ2xDLG9CQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7ZUFDckI7YUFDRjs7OztBQUVELHVCQUFhO21CQUFDLHlCQUFHO0FBQ2Ysa0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtBQUNmLG9CQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsWUFBTTtBQUMvQixvQkFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO2VBQ3JCLENBQUMsQ0FBQTthQUNIOzs7Ozs7ZUF6Q1UsT0FBTyIsImZpbGUiOiJhaS1jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIvZGlzdC8ifQ==