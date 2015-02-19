System.register(["aurelia-templating", "./ai-element"], function (_export) {
  "use strict";

  var Behavior, AiElement, _prototypeProperties, _inherits, _classCallCheck, AiActionReveal;
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

      AiActionReveal = _export("AiActionReveal", (function (AiElement) {
        function AiActionReveal(element) {
          var _this = this;
          _classCallCheck(this, AiActionReveal);

          this.element = element;


          this.handle = function () {
            _this.reveal = !_this.reveal;
          };
        }

        _inherits(AiActionReveal, AiElement);

        _prototypeProperties(AiActionReveal, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-action").withProperty("reveal", "onReveal");
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
              this.addClass("ai-action-reveal");
              this.addEvent("mouseenter", this.toggleReveal);
              this.addEvent("mouseout", this.toggleReveal);
            },
            writable: true,
            configurable: true
          },
          onReveal: {
            value: function onReveal(value) {
              console.log("revealed", value);
            },
            writable: true,
            configurable: true
          },
          toggleReveal: {
            value: function toggleReveal(event) {
              event.preventDefault();
              this.reveal = !this.reveal;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWFjdGlvbi1yZXZlYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUNSLFNBQVMsb0RBR0osY0FBYzs7O0FBSm5CLGNBQVEsc0JBQVIsUUFBUTs7QUFDUixlQUFTLGNBQVQsU0FBUzs7Ozs7Ozs7O0FBR0osb0JBQWMsd0NBQVMsU0FBUztBQWlCOUIsaUJBakJGLGNBQWMsQ0FpQlgsT0FBTzs7Z0NBakJWLGNBQWM7O0FBbUJuQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTs7O0FBR3RCLGNBQUksQ0FBQyxNQUFNLEdBQUcsWUFBSTtBQUNkLGtCQUFLLE1BQU0sR0FBRyxDQUFDLE1BQUssTUFBTSxDQUFBO1dBQzdCLENBQUE7U0FDSjs7a0JBekJRLGNBQWMsRUFBUyxTQUFTOzs2QkFBaEMsY0FBYztBQUVoQixrQkFBUTttQkFBQSxvQkFBRTtBQUViLHFCQUFPLFFBQVEsQ0FDVixhQUFhLENBQUMsV0FBVyxDQUFDLENBQzFCLFlBQVksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUE7YUFFMUM7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRTtBQUVYLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7YUFFbkI7Ozs7O0FBY0QsY0FBSTttQkFBQSxnQkFBRTtBQUNGLGtCQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUE7QUFDakMsa0JBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUM5QyxrQkFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO2FBQ2pEOzs7O0FBRUQsa0JBQVE7bUJBQUEsa0JBQUMsS0FBSyxFQUFDO0FBQ1gscUJBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFBO2FBQ2pDOzs7O0FBRUQsc0JBQVk7bUJBQUEsc0JBQUMsS0FBSyxFQUFDO0FBQ2YsbUJBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUN2QixrQkFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7YUFDN0I7Ozs7OztlQXpDUSxjQUFjO1NBQVMsU0FBUyIsImZpbGUiOiJhaS1hY3Rpb24tcmV2ZWFsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==