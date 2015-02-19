System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, defaults, AiToolbar;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = { size: "sm",
        fixed: true,
        bgColor: "white",
        textColor: "purple",
        brand: "brand"
      };
      AiToolbar = _export("AiToolbar", (function () {
        function AiToolbar(element) {
          _classCallCheck(this, AiToolbar);

          var _this = this;
          this.element = element;
          this.current = defaults;

          _.assign(this, this.current);

          this.pre = function (prefix) {
            var args = Array.prototype.slice.call(arguments).slice(1);
            return _.map(args, function (arg, index) {
              return "" + prefix + "-" + arg;
            });
          };
        }

        _prototypeProperties(AiToolbar, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-toolbar").withProperty("router").withProperty("fixed").withProperty("brand", "brandChanged").withProperty("bgColor", "bgChanged").withProperty("textColor", "textChanged").withProperty("size", "sizeChanged");
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
              var classList = ["ai-toolbar"];
              var _this = this;
              this.container = this.element.firstElementChild;

              this.container.classList.add("bg-" + this.bgColor, "text-" + this.textColor);

              this.fixed && classList.push(this.pre("toolbar", "fixed"));
              this.bgColor && classList.push(this.pre("bg", this.bgColor));
              this.textColor && classList.push(this.pre("text", this.textColor));
              this.size && classList.push(this.pre("toolbar", this.size));
              this.addClass(classList);
              Object.observe(this.router, function () {
                _this.size = _this.router.currentInstruction.config.toolbar.size || defaults.size;
                _this.bgColor = _this.router.currentInstruction.config.toolbar.bgColor || defaults.bgColor;
                _this.textColor = _this.router.currentInstruction.config.toolbar.textColor || defaults.textColor;
              });
            },
            writable: true,
            configurable: true
          },
          bgChanged: {
            value: function bgChanged(value) {
              if (value === this.current.bgColor) {
                return;
              }
              this.container.classList.remove("bg-" + this.current.bgColor);
              this.container.classList.add("bg-" + this.bgColor);
              this.current.bgColor = value;
            },
            writable: true,
            configurable: true
          },
          textChanged: {
            value: function textChanged(value) {
              if (value === this.current.textColor) {
                return;
              }
              this.container.classList.remove("text-" + this.current.textColor);
              this.container.classList.add("text-" + this.textColor);
              this.current.textColor = value;
            },
            writable: true,
            configurable: true
          },
          sizeChanged: {
            value: function sizeChanged(value) {
              if (value === this.current.size) {
                return;
              }
              this.element.classList.remove("toolbar-" + this.current.size);
              this.element.classList.add("toolbar-" + value);
              this.current.size = value;
            },
            writable: true,
            configurable: true
          },
          addClass: {
            value: function addClass(array) {
              var args = Array.isArray(array) ? array : arguments;
              this.element.classList.add.apply(this.element.classList, args);
            },
            writable: true,
            configurable: true
          },
          removeClass: {
            value: function removeClass(array) {
              var args = Array.isArray(array) ? array : arguments;
              this.element.classList.removeClass.apply(this.element.classList, args);
            },
            writable: true,
            configurable: true
          }
        });

        return AiToolbar;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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