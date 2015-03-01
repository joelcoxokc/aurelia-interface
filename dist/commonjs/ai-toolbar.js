System.register(["aurelia-templating", "./ai-element", "./toolbar", "./activator-service"], function (_export) {
  "use strict";

  var Behavior, AiElement, Toolbar, ActivatorService, _prototypeProperties, _inherits, _classCallCheck, defaults, AiToolbar, ToolbarContainer, ToolbarState;
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
      AiToolbar = _export("AiToolbar", (function (AiElement) {
        function AiToolbar(element, activator) {
          _classCallCheck(this, AiToolbar);

          var _this = this;
          this.activator = activator;
          this.element = element;
          this.current = new Toolbar();
          this.person = "joel";

          _.assign(this, this.current);

          this.activator.activateProperty("ai-toolbar-size", this, "size");
          this.activator.activateProperty("ai-toolbar-bgColor", this, "bgColor");
          this.activator.activateProperty("ai-toolbar-textColor", this, "textColor");
          this.activator.activateProperty("ai-toolbar-brand", this, "brand");
          this.addClass("ai-toolbar");
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
              return [Element, ActivatorService];
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
      ToolbarState = _export("ToolbarState", (function () {
        function ToolbarState(activator) {
          _classCallCheck(this, ToolbarState);

          this.activator = activator;
        }

        _prototypeProperties(ToolbarState, {
          inject: {
            value: function inject() {
              return [ActivatorService];
            },
            writable: true,
            configurable: true
          }
        }, {
          run: {
            value: function run(routingContext, next) {
              console.log(activator);
              if (routingContext.nextInstructions.some(function (tb) {
                return tb.config.toolbar;
              })) {
                for (var key in tb) {
                  this.vm[key] = tb[key];
                }

                return next();
              } else {
                return next();
              }
            },
            writable: true,
            configurable: true
          }
        });

        return ToolbarState;
      })());
    }
  };
});