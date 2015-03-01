System.register(["aurelia-templating", "./ai-element", "./toolbar", "./activator-service"], function (_export) {
  "use strict";

  var Behavior, AiElement, Toolbar, ActivatorService, _prototypeProperties, _inherits, _classCallCheck, defaults, AiToolbar, ToolbarContainer;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aiElement) {
      AiElement = _aiElement.AiElement;
    }, function (_toolbar) {
      Toolbar = _toolbar.Toolbar;
    }, function (_activatorService) {
      ActivatorService = _activatorService.ActivatorService;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = ["size", "fixed", "bgColor", "textColor", "brand"];
      AiToolbar = _export("AiToolbar", (function (Toolbar) {
        function AiToolbar(element, activator) {
          _classCallCheck(this, AiToolbar);

          var _this = this;
          this.current = {};
          this.element = element;
          this.activator = activator;
          this.splitter = this.splitter = /\s*,\s*/;

          _.assign(this.current, this.defaults);

          for (var prop in defaults) {
            this.activator.activateProperty("ai-toolbar-" + prop, this, prop);
          }

          this.element.classList.add("ai-toolbar");
        }

        _inherits(AiToolbar, Toolbar);

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
              return [Element, ActivatorService];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              this.parent = this.element.parentElement;
            },
            writable: true,
            configurable: true
          },
          bgChanged: {
            value: function bgChanged(value) {
              value = value.split(this.splitter);
              console.log(value);
              this.element.classList.remove.apply(this.element.classList, this.current.bgColor);
              this.element.classList.add.apply(this.element.classList, value);
              this.current.bgColor = value;
            },
            writable: true,
            configurable: true
          },
          textChanged: {
            value: function textChanged(value) {
              value = value.split(this.splitter);
              this.element.classList.remove.apply(this.element.classList, this.current.textColor);
              this.element.classList.add.apply(this.element.classList, value);
              this.current.textColor = value;
            },
            writable: true,
            configurable: true
          },
          sizeChanged: {
            value: function sizeChanged(value) {
              this.parent.classList.remove("header-" + this.current.size);
              this.parent.classList.add("header-" + value);
              this.element.classList.remove("toolbar-" + this.current.size);
              this.element.classList.add("toolbar-" + value);
              this.current.size = value;
            },
            writable: true,
            configurable: true
          }
        });

        return AiToolbar;
      })(Toolbar));
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