System.register(["aurelia-templating", "./activator-service", "./ai-header-attribute"], function (_export) {
  "use strict";

  var Behavior, ActivatorService, _prototypeProperties, _classCallCheck, defaults, AiHeader;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_activatorService) {
      ActivatorService = _activatorService.ActivatorService;
    }, function (_aiHeaderAttribute) {
      _export("AiHeaderAttachedBehavior", _aiHeaderAttribute.AiHeaderAttachedBehavior);
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = { size: "sm",
        fixed: false,
        bg: "white",
        text: "purple"
      };
      AiHeader = _export("AiHeader", (function () {
        function AiHeader(element, activator) {
          _classCallCheck(this, AiHeader);

          this.activator = activator;
          this.element = element;
          this.current = defaults;
          _.assign(this, this.current);
        }

        _prototypeProperties(AiHeader, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-header").withProperty("router").withProperty("size", "sizeChanged").withProperty("fixed", "fixedChanged").withProperty("bg", "bgChanged").withProperty("text", "textChanged");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element, ActivatorService];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              this.activator.activateProperty("ai-header-size", this, "size");
              this.applyClasses();
            },
            writable: true,
            configurable: true
          },
          applyClasses: {
            value: function applyClasses() {
              var classList = ["ai-header"];
              this.bg && classList.push("bg-" + this.bg);
              this.text && classList.push("text-" + this.text);
              this.size && classList.push("header-" + this.size);
              this.element.classList.add.apply(this.element.classList, classList);
            },
            writable: true,
            configurable: true
          },
          sizeChanged: {
            value: function sizeChanged(newSize) {
              newSize = newSize || defaults.size;
              this.element.classList.remove("header-" + this.current.size);
              this.element.classList.add("header-" + newSize);
              this.current.size = this.size;
            },
            writable: true,
            configurable: true
          },
          bgChanged: {
            value: function bgChanged(newBg) {
              this.element.classList.remove(this.current.bg);
              this.element.classList.add(newBg);
              this.current.bg = newBg;
            },
            writable: true,
            configurable: true
          },
          textChanged: {
            value: function textChanged(newText) {
              this.element.classList.remove(this.current.text);
              this.element.classList.add(newText);
              this.current.text = newText;
            },
            writable: true,
            configurable: true
          }
        });

        return AiHeader;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQ1IsZ0JBQWdCLHlDQUlwQixRQUFRLEVBTUMsUUFBUTs7O0FBWGIsY0FBUSxzQkFBUixRQUFROztBQUNSLHNCQUFnQixxQkFBaEIsZ0JBQWdCOzs2REFFaEIsd0JBQXdCOzs7Ozs7O0FBRTVCLGNBQVEsR0FBSSxFQUFFLElBQUksRUFBRyxJQUFJO0FBQ1gsYUFBSyxFQUFFLEtBQUs7QUFDWixVQUFFLEVBQUksT0FBTztBQUNiLFlBQUksRUFBRSxRQUFRO09BQ2Y7QUFFSixjQUFRO0FBZ0JOLGlCQWhCRixRQUFRLENBZ0JMLE9BQU8sRUFBRSxTQUFTO2dDQWhCckIsUUFBUTs7QUFpQmIsY0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7QUFDMUIsY0FBSSxDQUFDLE9BQU8sR0FBTyxPQUFPLENBQUE7QUFDMUIsY0FBSSxDQUFDLE9BQU8sR0FBTyxRQUFRLENBQUM7QUFDNUIsV0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBRS9COzs2QkF0QlEsUUFBUTtBQUVWLGtCQUFRO21CQUFBLG9CQUFFO0FBQ2IscUJBQU8sUUFBUSxDQUNWLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FDMUIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUN0QixZQUFZLENBQUMsTUFBTSxFQUFRLGFBQWEsQ0FBQyxDQUN6QyxZQUFZLENBQUMsT0FBTyxFQUFPLGNBQWMsQ0FBQyxDQUMxQyxZQUFZLENBQUMsSUFBSSxFQUFVLFdBQVcsQ0FBQyxDQUN2QyxZQUFZLENBQUMsTUFBTSxFQUFRLGFBQWEsQ0FBQyxDQUFBO2FBQ2pEOzs7O0FBRU0sZ0JBQU07bUJBQUEsa0JBQUU7QUFDWCxxQkFBTyxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBO2FBQ3JDOzs7OztBQVVELGNBQUk7bUJBQUEsZ0JBQUU7QUFDRixrQkFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDaEUsa0JBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN2Qjs7OztBQUVELHNCQUFZO21CQUFBLHdCQUFFO0FBQ1Ysa0JBQUksU0FBUyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDOUIsa0JBQUksQ0FBQyxFQUFFLElBQU8sU0FBUyxDQUFDLElBQUksU0FBTyxJQUFJLENBQUMsRUFBRSxDQUFHLENBQUM7QUFDOUMsa0JBQUksQ0FBQyxJQUFJLElBQUssU0FBUyxDQUFDLElBQUksV0FBUyxJQUFJLENBQUMsSUFBSSxDQUFHLENBQUM7QUFDbEQsa0JBQUksQ0FBQyxJQUFJLElBQUssU0FBUyxDQUFDLElBQUksYUFBVyxJQUFJLENBQUMsSUFBSSxDQUFHLENBQUM7QUFDcEQsa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUE7YUFDdEU7Ozs7QUFFRCxxQkFBVzttQkFBQSxxQkFBQyxPQUFPLEVBQUM7QUFDaEIscUJBQU8sR0FBRyxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQztBQUNuQyxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxhQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFHLENBQUE7QUFDNUQsa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsYUFBVyxPQUFPLENBQUcsQ0FBQTtBQUMvQyxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNqQzs7OztBQUVELG1CQUFTO21CQUFBLG1CQUFDLEtBQUssRUFBQztBQUVaLGtCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUM5QyxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ2pDLGtCQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUE7YUFDMUI7Ozs7QUFFRCxxQkFBVzttQkFBQSxxQkFBQyxPQUFPLEVBQUM7QUFDaEIsa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2hELGtCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDbkMsa0JBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQTthQUM5Qjs7Ozs7O2VBdkRRLFFBQVEiLCJmaWxlIjoiYWktaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==