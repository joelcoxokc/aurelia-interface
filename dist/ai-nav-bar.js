System.register(["aurelia-templating", "./bar", "./ui-element"], function (_export) {
  "use strict";

  var Behavior, BoundViewFactory, ViewSlot, Bar, UiElement, _prototypeProperties, _inherits, _classCallCheck, AiNavBar;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
      BoundViewFactory = _aureliaTemplating.BoundViewFactory;
      ViewSlot = _aureliaTemplating.ViewSlot;
    }, function (_bar) {
      Bar = _bar.Bar;
    }, function (_uiElement) {
      UiElement = _uiElement.UiElement;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiNavBar = _export("AiNavBar", (function (UiElement) {
        function AiNavBar(element) {
          _classCallCheck(this, AiNavBar);

          this.element = element;

          this.showing = true;
          this.open = false;
          this.fixed = true;
          this.size = "sm";
          this.ripple = true;
        }

        _inherits(AiNavBar, UiElement);

        _prototypeProperties(AiNavBar, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-nav-bar").withProperty("router").withProperty("aside").withProperty("showing").withProperty("value");
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
          open: {
            value: function open() {
              this.showing = !this.showing;
            },
            writable: true,
            configurable: true
          }
        });

        return AiNavBar;
      })(UiElement));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLW5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFDcEMsR0FBRyxFQUNILFNBQVMsb0RBR0osUUFBUTs7O0FBTGIsY0FBUSxzQkFBUixRQUFRO0FBQUUsc0JBQWdCLHNCQUFoQixnQkFBZ0I7QUFBRSxjQUFRLHNCQUFSLFFBQVE7O0FBQ3BDLFNBQUcsUUFBSCxHQUFHOztBQUNILGVBQVMsY0FBVCxTQUFTOzs7Ozs7Ozs7QUFHSixjQUFRLGtDQUFTLFNBQVM7QUFxQnhCLGlCQXJCRixRQUFRLENBcUJMLE9BQU87Z0NBckJWLFFBQVE7O0FBdUJmLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBOztBQUV0QixjQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtBQUNuQixjQUFJLENBQUMsSUFBSSxHQUFNLEtBQUssQ0FBQTtBQUNwQixjQUFJLENBQUMsS0FBSyxHQUFLLElBQUksQ0FBQTtBQUNuQixjQUFJLENBQUMsSUFBSSxHQUFNLElBQUksQ0FBQTtBQUNuQixjQUFJLENBQUMsTUFBTSxHQUFJLElBQUksQ0FBQTtTQUNwQjs7a0JBOUJRLFFBQVEsRUFBUyxTQUFTOzs2QkFBMUIsUUFBUTtBQUdWLGtCQUFRO21CQUFBLG9CQUFFO0FBRWQscUJBQU8sUUFBUSxDQUNaLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FDM0IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUN0QixZQUFZLENBQUMsT0FBTyxDQUFDLENBQ3JCLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FDdkIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBRTFCOzs7O0FBRU0sZ0JBQU07bUJBQUEsa0JBQUc7QUFFZCxxQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBRWpCOzs7OztBQWNELGNBQUk7bUJBQUEsZ0JBQUU7QUFFRixrQkFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7YUFFL0I7Ozs7OztlQXBDUSxRQUFRO1NBQVMsU0FBUyIsImZpbGUiOiJhaS1uYXYtYmFyLmpzIiwic291cmNlUm9vdCI6Ii9kaXN0LyJ9