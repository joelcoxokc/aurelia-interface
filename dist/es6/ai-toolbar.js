System.register(["aurelia-templating", "./ai-element", "./interface-element", "./toolbar", "./notify", "./aside-toggle"], function (_export) {
  "use strict";

  var Behavior, AiElement, InterfaceElement, Toolbar, Notify, AsideToggle, _prototypeProperties, _inherits, _classCallCheck, defaults, AiToolbar, ToolbarContainer;
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
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = ["size", "fixed", "bgColor", "textColor", "brand"];
      AiToolbar = _export("AiToolbar", (function (AiElement) {
        function AiToolbar(element, notify, asideToggle) {
          _classCallCheck(this, AiToolbar);

          var _this = this;
          this.asideToggle = asideToggle;
          this.events = notify;
          this.element = element;
          this.current = new Toolbar();
          this.person = "joel";

          _.assign(this, this.current);



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
              return [Element, Notify, AsideToggle];
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
          toolbarChanged: {
            value: function toolbarChanged(tools) {},
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
          brandChanged: {
            value: function brandChanged() {},
            writable: true,
            configurable: true
          },
          sizeChanged: {
            value: function sizeChanged(value) {
              return this.toggleClassList("size", "toolbar-");
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