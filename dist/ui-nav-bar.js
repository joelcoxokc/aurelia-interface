System.register(["aurelia-templating", "./bar", "./message", "./ui-element"], function (_export) {
  "use strict";

  var Behavior, BoundViewFactory, ViewSlot, Bar, MsgPublisher, MsgSubscriber, UiElement, _prototypeProperties, _inherits, _classCallCheck, UiNavBarTemplateController;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
      BoundViewFactory = _aureliaTemplating.BoundViewFactory;
      ViewSlot = _aureliaTemplating.ViewSlot;
    }, function (_bar) {
      Bar = _bar.Bar;
    }, function (_message) {
      MsgPublisher = _message.MsgPublisher;
      MsgSubscriber = _message.MsgSubscriber;
    }, function (_uiElement) {
      UiElement = _uiElement.UiElement;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      UiNavBarTemplateController = _export("UiNavBarTemplateController", (function (UiElement) {
        function UiNavBarTemplateController(viewFactory, viewSlot) {
          _classCallCheck(this, UiNavBarTemplateController);

          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
          this.showing = true;

          this.barId = "bar1";
          this.open = false;
          this.fixed = true;
          this.size = "sm";
          this.ripple = true;
        }

        _inherits(UiNavBarTemplateController, UiElement);

        _prototypeProperties(UiNavBarTemplateController, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ui-nav-bar").withProperty("router").withProperty("aside").withProperty("showing").withProperty("value");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [BoundViewFactory, ViewSlot];
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
          },
          valueChanged: {
            value: function valueChanged() {
              if (newValue) {
                if (this.view) {
                  this.viewSlot.remove(this.view);
                  this.view.unbind();
                }

                this.showing = false;
                return;
              }

              if (!this.view) {


                this.view = this.viewFactory.create();
              }

              if (this.showing) {
                this.showing = true;

                if (!this.view.bound) {
                  this.view.bind();
                }

                this.viewSlot.add(this.view);
              }
            },
            writable: true,
            configurable: true
          }
        });

        return UiNavBarTemplateController;
      })(UiElement));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLW5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFDcEMsR0FBRyxFQUNILFlBQVksRUFDWixhQUFhLEVBQ2IsU0FBUyxvREFFSiwwQkFBMEI7OztBQU4vQixjQUFRLHNCQUFSLFFBQVE7QUFBRSxzQkFBZ0Isc0JBQWhCLGdCQUFnQjtBQUFFLGNBQVEsc0JBQVIsUUFBUTs7QUFDcEMsU0FBRyxRQUFILEdBQUc7O0FBQ0gsa0JBQVksWUFBWixZQUFZO0FBQ1osbUJBQWEsWUFBYixhQUFhOztBQUNiLGVBQVMsY0FBVCxTQUFTOzs7Ozs7Ozs7QUFFSixnQ0FBMEIsb0RBQVMsU0FBUztBQXdCMUMsaUJBeEJGLDBCQUEwQixDQXdCdkIsV0FBVyxFQUFFLFFBQVE7Z0NBeEJ4QiwwQkFBMEI7O0FBeUJqQyxjQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtBQUM5QixjQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtBQUN4QixjQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTs7QUFFbkIsY0FBSSxDQUFDLEtBQUssR0FBSyxNQUFNLENBQUE7QUFDckIsY0FBSSxDQUFDLElBQUksR0FBTSxLQUFLLENBQUE7QUFDcEIsY0FBSSxDQUFDLEtBQUssR0FBSyxJQUFJLENBQUE7QUFDbkIsY0FBSSxDQUFDLElBQUksR0FBTSxJQUFJLENBQUE7QUFDbkIsY0FBSSxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUM7U0FDckI7O2tCQWxDUSwwQkFBMEIsRUFBUyxTQUFTOzs2QkFBNUMsMEJBQTBCO0FBRzVCLGtCQUFRO21CQUFBLG9CQUFFO0FBRWQscUJBQU8sUUFBUSxDQUNaLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FDM0IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUN0QixZQUFZLENBQUMsT0FBTyxDQUFDLENBQ3JCLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FDdkIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBSTFCOzs7O0FBR00sZ0JBQU07bUJBQUEsa0JBQUc7QUFFZCxxQkFBTyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFBO2FBRXBDOzs7OztBQWVELGNBQUk7bUJBQUEsZ0JBQUU7QUFFRixrQkFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFFaEM7Ozs7QUFHRCxzQkFBWTttQkFBQSx3QkFBRTtBQUVWLGtCQUFJLFFBQVEsRUFBRTtBQUVWLG9CQUFHLElBQUksQ0FBQyxJQUFJLEVBQUM7QUFDVCxzQkFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hDLHNCQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUN0Qjs7QUFFRCxvQkFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDckIsdUJBQU87ZUFDVjs7QUFFRCxrQkFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUM7OztBQUdWLG9CQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7ZUFDekM7O0FBRUQsa0JBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUVkLG9CQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7QUFFcEIsb0JBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQztBQUVoQixzQkFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFFcEI7O0FBRUQsb0JBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztlQUNoQzthQUNKOzs7Ozs7ZUExRVEsMEJBQTBCO1NBQVMsU0FBUyIsImZpbGUiOiJ1aS1uYXYtYmFyLmpzIiwic291cmNlUm9vdCI6Ii9kaXN0LyJ9