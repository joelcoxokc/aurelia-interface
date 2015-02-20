System.register(["aurelia-templating", "./ai-element", "./toolbar"], function (_export) {
  "use strict";

  var Behavior, InterfaceElement, Toolbar, _prototypeProperties, _inherits, _classCallCheck, AiToolbar, ToolbarContainer;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aiElement) {
      InterfaceElement = _aiElement.InterfaceElement;
    }, function (_toolbar) {
      Toolbar = _toolbar.Toolbar;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiToolbar = _export("AiToolbar", (function (InterfaceElement) {
        function AiToolbar(element) {
          _classCallCheck(this, AiToolbar);

          var _this = this;
          this.current = new Toolbar();
          this.element = element;

          _.assign(this, this.current);

          this.toolbar && _(this).assign(this.toolbar);

          this.addClass("ai-toolbar");
        }

        _inherits(AiToolbar, InterfaceElement);

        _prototypeProperties(AiToolbar, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-toolbar").withProperty("router").withProperty("fixed").withProperty("brand", "brandChanged").withProperty("bgColor", "bgChanged").withProperty("textColor", "textChanged").withProperty("size", "sizeChanged").withProperty("toolbar");
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
              this.container = new ToolbarContainer(this.element.firstElementChild);

              this.toolbar.subscribe("");
            },
            writable: true,
            configurable: true
          },
          bgChanged: {
            value: function bgChanged(value) {
              return this.container.toggleClassList("bgColor", "bg-", this, null, null, "hello");
            },
            writable: true,
            configurable: true
          },
          textChanged: {
            value: function textChanged(value) {
              return this.container.toggleClassList("textColor", "text-", this);
            },
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
      })(InterfaceElement));
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