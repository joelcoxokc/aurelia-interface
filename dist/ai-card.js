System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, BoundViewFactory, ViewSlot, _prototypeProperties, _classCallCheck, AiCard;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
      BoundViewFactory = _aureliaTemplating.BoundViewFactory;
      ViewSlot = _aureliaTemplating.ViewSlot;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiCard = _export("AiCard", (function () {
        function AiCard(element, viewFactory, viewSlot) {
          _classCallCheck(this, AiCard);

          this.element = element;
          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
        }

        _prototypeProperties(AiCard, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("router").withProperty("value");

            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element, BoundViewFactory, ViewSlot];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              this.element.classList.add("ai-card");
              console.log(this.contentView);
            },
            writable: true,
            configurable: true
          },
          toggleMe: {
            value: function toggleMe() {
              console.log("Me");
            },
            writable: true,
            configurable: true
          }
        });

        return AiCard;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFFBQVEseUNBRS9CLE1BQU07OztBQUZYLGNBQVEsc0JBQVIsUUFBUTtBQUFFLHNCQUFnQixzQkFBaEIsZ0JBQWdCO0FBQUUsY0FBUSxzQkFBUixRQUFROzs7Ozs7O0FBRS9CLFlBQU07QUFpQkosaUJBakJGLE1BQU0sQ0FpQkgsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRO2dDQWpCakMsTUFBTTs7QUFtQlgsY0FBSSxDQUFDLE9BQU8sR0FBTyxPQUFPLENBQUM7QUFDM0IsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0IsY0FBSSxDQUFDLFFBQVEsR0FBTSxRQUFRLENBQUM7U0FFL0I7OzZCQXZCUSxNQUFNO0FBRVIsa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxRQUFRLENBQ1YsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUN0QixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7O2FBRzdCOzs7O0FBR00sZ0JBQU07bUJBQUEsa0JBQUU7QUFDWCxxQkFBTyxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQTthQUMvQzs7Ozs7QUFZRCxjQUFJO21CQUFBLGdCQUFFO0FBQ0Ysa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUNyQyxxQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7YUFDaEM7Ozs7QUFFRCxrQkFBUTttQkFBQSxvQkFBRTtBQUVOLHFCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQ3BCOzs7Ozs7ZUFsQ1EsTUFBTSIsImZpbGUiOiJhaS1jYXJkLmpzIiwic291cmNlUm9vdCI6Ii9kaXN0LyJ9