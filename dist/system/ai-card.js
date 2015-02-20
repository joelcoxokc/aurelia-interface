System.register(["aurelia-templating", "./ai-element"], function (_export) {
  "use strict";

  var Behavior, AiElement, _prototypeProperties, _inherits, _classCallCheck, AiCard;
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

      AiCard = _export("AiCard", (function (AiElement) {
        function AiCard(element) {
          _classCallCheck(this, AiCard);

          this.element = element;
          this.heading = this.element.getElementsByClassName("card-heading");
        }

        _inherits(AiCard, AiElement);

        _prototypeProperties(AiCard, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-card").withProperty("heading").withProperty("type", "typeChanged");
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
              this.heading = this.heading[0];
              this.addClass("ai-card");
            },
            writable: true,
            configurable: true
          },
          typeChanged: {
            value: function typeChanged() {},
            writable: true,
            configurable: true
          }
        });

        return AiCard;
      })(AiElement));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUNSLFNBQVMsb0RBR0osTUFBTTs7O0FBSlgsY0FBUSxzQkFBUixRQUFROztBQUNSLGVBQVMsY0FBVCxTQUFTOzs7Ozs7Ozs7QUFHSixZQUFNLGdDQUFTLFNBQVM7QUFldEIsaUJBZkYsTUFBTSxDQWVILE9BQU87Z0NBZlYsTUFBTTs7QUFnQlgsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7QUFDdEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxDQUFBO1NBQ3JFOztrQkFsQlEsTUFBTSxFQUFTLFNBQVM7OzZCQUF4QixNQUFNO0FBRVIsa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxRQUFRLENBQ1YsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUN4QixZQUFZLENBQUMsU0FBUyxDQUFDLENBQ3ZCLFlBQVksQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUE7YUFFM0M7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRTtBQUNYLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDbkI7Ozs7O0FBT0QsY0FBSTttQkFBQSxnQkFBRTtBQUNGLGtCQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDOUIsa0JBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7YUFDM0I7Ozs7QUFFRCxxQkFBVzttQkFBQSx1QkFBRSxFQUVaOzs7Ozs7ZUEzQlEsTUFBTTtTQUFTLFNBQVMiLCJmaWxlIjoiYWktY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=