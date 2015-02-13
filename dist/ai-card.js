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
              return Behavior.withProperty("router").withProperty("value").noView();
              skipProcessingContent();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFFBQVEseUNBSS9CLG9CQUFvQjs7O0FBSnpCLGNBQVEsc0JBQVIsUUFBUTtBQUFFLHNCQUFnQixzQkFBaEIsZ0JBQWdCO0FBQUUsY0FBUSxzQkFBUixRQUFROzs7Ozs7O0FBSS9CLDBCQUFvQjtBQW1CbEIsaUJBbkJGLG9CQUFvQixDQW1CakIsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRO2dDQW5CakMsb0JBQW9COztBQXFCekIsY0FBSSxDQUFDLE9BQU8sR0FBTyxPQUFPLENBQUM7QUFDM0IsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0IsY0FBSSxDQUFDLFFBQVEsR0FBTSxRQUFRLENBQUM7U0FFL0I7OzZCQXpCUSxvQkFBb0I7QUFFdEIsa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxRQUFRLENBQ1YsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUN0QixZQUFZLENBQUMsT0FBTyxDQUFDLENBRXJCLE1BQU0sRUFBRSxDQUFBO0FBQ1QsbUNBQXFCLEVBQUUsQ0FBQTthQUU5Qjs7OztBQUdNLGdCQUFNO21CQUFBLGtCQUFFO0FBQ1gscUJBQU8sQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUE7YUFDL0M7Ozs7O0FBV0QsY0FBSTttQkFBQSxnQkFBRTtBQUNGLHFCQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQ3ZCLGtCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDekM7Ozs7QUFFRCxrQkFBUTttQkFBQSxvQkFBRTtBQUVOLHFCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQ3BCOzs7Ozs7ZUFuQ1Esb0JBQW9CIiwiZmlsZSI6ImFpLWNhcmQuanMiLCJzb3VyY2VSb290IjoiL2Rpc3QvIn0=