System.register(["aurelia-templating", "./ui-element"], function (_export) {
  "use strict";

  var Behavior, UiElement, _prototypeProperties, _inherits, _classCallCheck, UiToggleCustomElement;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_uiElement) {
      UiElement = _uiElement.UiElement;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      UiToggleCustomElement = _export("UiToggleCustomElement", (function (UiElement) {
        function UiToggleCustomElement(element) {
          _classCallCheck(this, UiToggleCustomElement);

          this.element = element;
        }

        _inherits(UiToggleCustomElement, UiElement);

        _prototypeProperties(UiToggleCustomElement, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("toggle").withProperty("icon");
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
              this.element.classList.add("aside-toggle", "waves-effect", "waves-light", "no-select");
            },
            writable: true,
            configurable: true
          }
        });

        return UiToggleCustomElement;
      })(UiElement));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLXRvZ2dsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQ1IsU0FBUyxvREFFSixxQkFBcUI7OztBQUgxQixjQUFRLHNCQUFSLFFBQVE7O0FBQ1IsZUFBUyxjQUFULFNBQVM7Ozs7Ozs7OztBQUVKLDJCQUFxQiwrQ0FBUyxTQUFTO0FBZXJDLGlCQWZGLHFCQUFxQixDQWVsQixPQUFPO2dDQWZWLHFCQUFxQjs7QUFpQjFCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1NBRXpCOztrQkFuQlEscUJBQXFCLEVBQVMsU0FBUzs7NkJBQXZDLHFCQUFxQjtBQUN2QixrQkFBUTttQkFBQSxvQkFBRTtBQUNiLHFCQUFPLFFBQVEsQ0FDVixZQUFZLENBQUMsUUFBUSxDQUFDLENBQ3RCLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUU1Qjs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFFO0FBRVgscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUVuQjs7Ozs7QUFVRCxjQUFJO21CQUFBLGdCQUFFO0FBRUYsa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQzthQUUxRjs7Ozs7O2VBMUJRLHFCQUFxQjtTQUFTLFNBQVMiLCJmaWxlIjoidWktdG9nZ2xlLmpzIiwic291cmNlUm9vdCI6Ii9kaXN0LyJ9