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
//# sourceMappingURL=data:application/json;base64,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