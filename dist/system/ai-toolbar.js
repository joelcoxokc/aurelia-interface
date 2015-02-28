System.register(["aurelia-templating", "./ai-element", "./interface-element", "./toolbar", "./notify", "./aside-toggle", "./toggler"], function (_export) {
  "use strict";

  var Behavior, AiElement, InterfaceElement, Toolbar, Notify, AsideToggle, Toggler, _prototypeProperties, _inherits, _classCallCheck, defaults, AiToolbar, ToolbarContainer;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aiElement) {
      AiElement = _aiElement.AiElement;
    }, function (_interfaceElement) {
      InterfaceElement = _interfaceElement.InterfaceElement;
    }, function (_toolbar) {
      Toolbar = _toolbar.Toolbar;
    }, function (_notify) {
      Notify = _notify.Notify;
    }, function (_asideToggle) {
      AsideToggle = _asideToggle.AsideToggle;
    }, function (_toggler) {
      Toggler = _toggler.Toggler;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = ["size", "fixed", "bgColor", "textColor", "brand"];
      AiToolbar = _export("AiToolbar", (function (AiElement) {
        function AiToolbar(element, notify, toggler) {
          _classCallCheck(this, AiToolbar);

          var _this = this;
          this.toggler = toggler;
          this.events = notify;
          this.element = element;
          this.current = new Toolbar();
          this.person = "joel";

          _.assign(this, this.current);

          this.toggler.register("toolbar-large", this, "size");


          this.addClass("ai-toolbar");
          this.events.subscribe("$stateChanged", function (payload) {});
        }

        _inherits(AiToolbar, AiElement);

        _prototypeProperties(AiToolbar, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-toolbar").withProperty("router").withProperty("fixed").withProperty("brand", "brandChanged").withProperty("bgColor", "bgChanged").withProperty("textColor", "textChanged").withProperty("size", "sizeChanged").withProperty("toolbar", "toolbarChanged").withProperty("multi-menu");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element, Notify, Toggler];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              this.container = new ToolbarContainer(this.element.firstElementChild);
            },
            writable: true,
            configurable: true
          },
          bgChanged: {
            value: function bgChanged(value) {
              return this.container.toggleClassList("bgColor", "", this);
            },
            writable: true,
            configurable: true
          },
          textChanged: {
            value: function textChanged(value) {
              return this.container.toggleClassList("textColor", "", this);
            },
            writable: true,
            configurable: true
          },
          sizeChanged: {
            value: function sizeChanged(value) {
              console.log(value);

              this.removeClass("toolbar-" + (value ? "xl" : "sm"));
              this.addClass("toolbar-" + (value ? "sm" : "xl"));
            },
            writable: true,
            configurable: true
          }
        });

        return AiToolbar;
      })(AiElement));
      ToolbarContainer = (function (AiElement) {
        function ToolbarContainer() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _classCallCheck(this, ToolbarContainer);

          this.element = args[0];
        }

        _inherits(ToolbarContainer, AiElement);

        return ToolbarContainer;
      })(AiElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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LHFCQUFDLEtBQUssRUFBQztBQUNkLHFCQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBOztBQUVsQixrQkFBSSxDQUFDLFdBQVcsZUFBWSxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQSxDQUFHLENBQUE7QUFDbEQsa0JBQUksQ0FBQyxRQUFRLGVBQVksS0FBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUEsQ0FBRyxDQUFBO2FBQ2xEOzs7Ozs7ZUF0RFEsU0FBUztTQUFTLFNBQVM7QUEyRGxDLHNCQUFnQixjQUFTLFNBQVM7QUFFekIsaUJBRlQsZ0JBQWdCOzRDQUVILElBQUk7QUFBSixnQkFBSTs7O2dDQUZqQixnQkFBZ0I7O0FBR2QsY0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDekI7O2tCQUpDLGdCQUFnQixFQUFTLFNBQVM7O2VBQWxDLGdCQUFnQjtTQUFTLFNBQVMiLCJmaWxlIjoiYWktdG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=