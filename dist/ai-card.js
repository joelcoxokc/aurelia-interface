System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, BoundViewFactory, ViewSlot, _prototypeProperties, _classCallCheck, AiCardCustomeElement;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
      BoundViewFactory = _aureliaTemplating.BoundViewFactory;
      ViewSlot = _aureliaTemplating.ViewSlot;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiCardCustomeElement = _export("AiCardCustomeElement", (function () {
        function AiCardCustomeElement(element, viewFactory, viewSlot) {
          _classCallCheck(this, AiCardCustomeElement);

          this.element = element;
          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
        }

        _prototypeProperties(AiCardCustomeElement, {
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

        return AiCardCustomeElement;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFFBQVEseUNBSS9CLG9CQUFvQjs7O0FBSnpCLGNBQVEsc0JBQVIsUUFBUTtBQUFFLHNCQUFnQixzQkFBaEIsZ0JBQWdCO0FBQUUsY0FBUSxzQkFBUixRQUFROzs7Ozs7O0FBSS9CLDBCQUFvQjtBQWdCbEIsaUJBaEJGLG9CQUFvQixDQWdCakIsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRO2dDQWhCakMsb0JBQW9COztBQWtCekIsY0FBSSxDQUFDLE9BQU8sR0FBTyxPQUFPLENBQUM7QUFDM0IsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0IsY0FBSSxDQUFDLFFBQVEsR0FBTSxRQUFRLENBQUM7U0FFL0I7OzZCQXRCUSxvQkFBb0I7QUFFdEIsa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxRQUFRLENBQ1YsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUN0QixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7YUFFN0I7Ozs7QUFHTSxnQkFBTTttQkFBQSxrQkFBRTtBQUNYLHFCQUFPLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFBO2FBQy9DOzs7OztBQVdELGNBQUk7bUJBQUEsZ0JBQUU7QUFDRixxQkFBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUN2QixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3pDOzs7O0FBRUQsa0JBQVE7bUJBQUEsb0JBQUU7QUFFTixxQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUNwQjs7Ozs7O2VBaENRLG9CQUFvQiIsImZpbGUiOiJhaS1jYXJkLmpzIiwic291cmNlUm9vdCI6Ii9kaXN0LyJ9