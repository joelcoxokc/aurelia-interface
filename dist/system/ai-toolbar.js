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
              return Behavior.customElement("ai-toolbar").withProperty("router").withProperty("fixed").withProperty("brand", "brandChanged").withProperty("bg-color", "bgChanged").withProperty("text-color", "textChanged").withProperty("size", "sizeChanged");
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
              console.log("size", value);
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