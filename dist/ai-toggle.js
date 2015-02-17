System.register(["aurelia-templating", "./ui-element"], function (_export) {
  "use strict";

  var Behavior, UiElement, _prototypeProperties, _inherits, _classCallCheck, AiToggle;
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

      AiToggle = _export("AiToggle", (function (UiElement) {
        function AiToggle(element) {
          _classCallCheck(this, AiToggle);

          this.element = element;
        }

        _inherits(AiToggle, UiElement);

        _prototypeProperties(AiToggle, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-toggle").withProperty("toggle").withProperty("icon");
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
              this.element.addEventListener("click", function (event) {
                $("ai-nav-aside").toggleClass("open");
              });
              this.element.classList.add("aside-toggle", "waves-effect", "waves-light", "no-select");
            },
            writable: true,
            configurable: true
          }
        });

        return AiToggle;
      })(UiElement));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLXRvZ2dsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQ1IsU0FBUyxvREFFSixRQUFROzs7QUFIYixjQUFRLHNCQUFSLFFBQVE7O0FBQ1IsZUFBUyxjQUFULFNBQVM7Ozs7Ozs7OztBQUVKLGNBQVEsa0NBQVMsU0FBUztBQWlCeEIsaUJBakJGLFFBQVEsQ0FpQkwsT0FBTztnQ0FqQlYsUUFBUTs7QUFtQmIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7U0FFekI7O2tCQXJCUSxRQUFRLEVBQVMsU0FBUzs7NkJBQTFCLFFBQVE7QUFDVixrQkFBUTttQkFBQSxvQkFBRTtBQUNiLHFCQUFPLFFBQVEsQ0FDVixhQUFhLENBQUMsV0FBVyxDQUFDLENBQzFCLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FDdEIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBRTVCOzs7O0FBR00sZ0JBQU07bUJBQUEsa0JBQUU7QUFFWCxxQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBRW5COzs7OztBQVVELGNBQUk7bUJBQUEsZ0JBQUU7QUFDRixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBUyxLQUFLLEVBQUM7QUFDbEQsaUJBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7ZUFDeEMsQ0FBQyxDQUFBO0FBQ0Ysa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQzthQUUxRjs7Ozs7O2VBOUJRLFFBQVE7U0FBUyxTQUFTIiwiZmlsZSI6ImFpLXRvZ2dsZS5qcyIsInNvdXJjZVJvb3QiOiIvZGlzdC8ifQ==