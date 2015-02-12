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

          console.log();
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
//# sourceMappingURL=data:application/json;base64,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