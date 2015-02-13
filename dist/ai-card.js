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
              return Behavior.customElement("ai-card").withProperty("heading");
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
              console.log("attached");
              this.element.classList.add("ai-card");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFFBQVEseUNBRS9CLE1BQU07OztBQUZYLGNBQVEsc0JBQVIsUUFBUTtBQUFFLHNCQUFnQixzQkFBaEIsZ0JBQWdCO0FBQUUsY0FBUSxzQkFBUixRQUFROzs7Ozs7O0FBRS9CLFlBQU07QUFnQkosaUJBaEJGLE1BQU0sQ0FnQkgsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRO2dDQWhCakMsTUFBTTs7QUFrQlgsY0FBSSxDQUFDLE9BQU8sR0FBTyxPQUFPLENBQUM7QUFDM0IsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0IsY0FBSSxDQUFDLFFBQVEsR0FBTSxRQUFRLENBQUM7U0FFL0I7OzZCQXRCUSxNQUFNO0FBRVIsa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxRQUFRLENBQ1YsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUN4QixZQUFZLENBQUMsU0FBUyxDQUFDLENBQUE7YUFFL0I7Ozs7QUFHTSxnQkFBTTttQkFBQSxrQkFBRTtBQUNYLHFCQUFPLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFBO2FBQy9DOzs7OztBQVdELGNBQUk7bUJBQUEsZ0JBQUU7QUFDRixxQkFBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUN2QixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3pDOzs7O0FBRUQsa0JBQVE7bUJBQUEsb0JBQUU7QUFFTixxQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUNwQjs7Ozs7O2VBaENRLE1BQU0iLCJmaWxlIjoiYWktY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvZGlzdC8ifQ==