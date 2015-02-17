System.register(["aurelia-templating", "./ui-element"], function (_export) {
  "use strict";

  var Behavior, BoundViewFactory, ViewSlot, UiElement, _prototypeProperties, _inherits, _classCallCheck, AiNavBar;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
      BoundViewFactory = _aureliaTemplating.BoundViewFactory;
      ViewSlot = _aureliaTemplating.ViewSlot;
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
          bind: {
            value: function bind() {
              console.log("AiNavBar directive", this);
            },
            writable: true,
            configurable: true
          },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLW5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFDcEMsU0FBUyxvREFHSixRQUFROzs7QUFKYixjQUFRLHNCQUFSLFFBQVE7QUFBRSxzQkFBZ0Isc0JBQWhCLGdCQUFnQjtBQUFFLGNBQVEsc0JBQVIsUUFBUTs7QUFDcEMsZUFBUyxjQUFULFNBQVM7Ozs7Ozs7OztBQUdKLGNBQVEsa0NBQVMsU0FBUztBQXFCeEIsaUJBckJGLFFBQVEsQ0FxQkwsT0FBTztnQ0FyQlYsUUFBUTs7QUF1QmYsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7O0FBRXRCLGNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO0FBQ25CLGNBQUksQ0FBQyxJQUFJLEdBQU0sS0FBSyxDQUFBO0FBQ3BCLGNBQUksQ0FBQyxLQUFLLEdBQUssSUFBSSxDQUFBO0FBQ25CLGNBQUksQ0FBQyxJQUFJLEdBQU0sSUFBSSxDQUFBO0FBQ25CLGNBQUksQ0FBQyxNQUFNLEdBQUksSUFBSSxDQUFBO1NBRXBCOztrQkEvQlEsUUFBUSxFQUFTLFNBQVM7OzZCQUExQixRQUFRO0FBR1Ysa0JBQVE7bUJBQUEsb0JBQUU7QUFFZCxxQkFBTyxRQUFRLENBQ1osYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUMzQixZQUFZLENBQUMsUUFBUSxDQUFDLENBQ3RCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FDckIsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUN2QixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7YUFFMUI7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRztBQUVkLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7YUFFakI7Ozs7O0FBZ0JELGNBQUk7bUJBQUEsZ0JBQUU7QUFFSixxQkFBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQTthQUN4Qzs7OztBQUVELGNBQUk7bUJBQUEsZ0JBQUU7QUFFRixrQkFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7YUFFL0I7Ozs7OztlQTNDUSxRQUFRO1NBQVMsU0FBUyIsImZpbGUiOiJhaS1uYXYtYmFyLmpzIiwic291cmNlUm9vdCI6Ii9kaXN0LyJ9