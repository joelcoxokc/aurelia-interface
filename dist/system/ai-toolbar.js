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
              this.element.classList.remove("bg-" + this.current.bgColor);
              this.element.classList.add("bg-" + value);
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
              this.element.classList.remove("text-" + this.current.textColor);
              this.element.classList.add("text-" + value);
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