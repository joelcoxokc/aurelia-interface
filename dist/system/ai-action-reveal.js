System.register(["aurelia-templating", "./ai-element"], function (_export) {
  "use strict";

  var Behavior, AiElement, _prototypeProperties, _inherits, _classCallCheck, defaults, AiActionReveal;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aiElement) {
      AiElement = _aiElement.AiElement;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = {
        side: top,
        value: false
      };
      AiActionReveal = _export("AiActionReveal", (function (AiElement) {
        function AiActionReveal(element) {
          var _this = this;
          _classCallCheck(this, AiActionReveal);

          this.element = element;
          this.current = defaults;
          _.assign(this, this.current);

          this.handle = function () {
            _this.value = !_this.value;
          };
        }

        _inherits(AiActionReveal, AiElement);

        _prototypeProperties(AiActionReveal, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-action-reveal").withProperty("value", "valueChanged").withProperty("side", "sideChanged");
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
              this.addClass("ai-action-reveal", "reveal-" + this.side);
              this.addEvent("mouseenter", this.toggleReveal);
              this.addEvent("mouseout", this.toggleReveal);
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              this.removeEvent("mouseenter", this.toggleReveal);
              this.removeEvent("mouseout", this.toggleReveal);
            },
            writable: true,
            configurable: true
          },
          sideChanged: {
            value: function sideChanged(newSide) {
              this.removeClass("reveal-" + this.current.side);
              this.addClass("reveal-" + newSide);
            },
            writable: true,
            configurable: true
          },
          toggleReveal: {
            value: function toggleReveal(event) {
              event.preventDefault();
              this.value = !this.value;
            },
            writable: true,
            configurable: true
          }
        });

        return AiActionReveal;
      })(AiElement));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWFjdGlvbi1yZXZlYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUNSLFNBQVMsb0RBRWIsUUFBUSxFQUtDLGNBQWM7OztBQVJuQixjQUFRLHNCQUFSLFFBQVE7O0FBQ1IsZUFBUyxjQUFULFNBQVM7Ozs7Ozs7OztBQUViLGNBQVEsR0FBRztBQUNYLFlBQUksRUFBRSxHQUFHO0FBQ1QsYUFBSyxFQUFFLEtBQUs7T0FDZjtBQUVZLG9CQUFjLHdDQUFTLFNBQVM7QUFrQjlCLGlCQWxCRixjQUFjLENBa0JYLE9BQU87O2dDQWxCVixjQUFjOztBQW9CbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7QUFDdEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUE7QUFDdkIsV0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBOztBQUU1QixjQUFJLENBQUMsTUFBTSxHQUFHLFlBQUk7QUFDZCxrQkFBSyxLQUFLLEdBQUcsQ0FBQyxNQUFLLEtBQUssQ0FBQTtXQUMzQixDQUFBO1NBQ0o7O2tCQTNCUSxjQUFjLEVBQVMsU0FBUzs7NkJBQWhDLGNBQWM7QUFFaEIsa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxRQUFRLENBQ1YsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQ2pDLFlBQVksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQ3JDLFlBQVksQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUE7YUFFM0M7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRTtBQUVYLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7YUFFbkI7Ozs7O0FBZUQsY0FBSTttQkFBQSxnQkFBRTtBQUVGLGtCQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixjQUFZLElBQUksQ0FBQyxJQUFJLENBQUcsQ0FBQTtBQUN4RCxrQkFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBQzlDLGtCQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7YUFDakQ7Ozs7QUFHRCxnQkFBTTttQkFBQSxrQkFBRTtBQUVKLGtCQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDakQsa0JBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTthQUVwRDs7OztBQUdELHFCQUFXO21CQUFBLHFCQUFDLE9BQU8sRUFBQztBQUVoQixrQkFBSSxDQUFDLFdBQVcsYUFBVyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRyxDQUFBO0FBQy9DLGtCQUFJLENBQUMsUUFBUSxhQUFXLE9BQU8sQ0FBRyxDQUFBO2FBRXJDOzs7O0FBRUQsc0JBQVk7bUJBQUEsc0JBQUMsS0FBSyxFQUFDO0FBQ2YsbUJBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUN2QixrQkFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUE7YUFDM0I7Ozs7OztlQXhEUSxjQUFjO1NBQVMsU0FBUyIsImZpbGUiOiJhaS1hY3Rpb24tcmV2ZWFsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==