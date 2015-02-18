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

          this.resetSize = createToggle("size", "toolbar", this.removeClass, this.resetSize);
          this.resetText = createToggle("textColor", "text", this.removeClass, this.resetText);
          this.resetBg = createToggle("bgColor", "bg", this.removeClass, this.resetBg);

          function createToggle(name, prefix, toggleMethod, resetMethod) {
            var classed = _.capitalize(name);
            return function (value) {
              _this["on" + classed] = _this.adapter(name, "" + prefix + "-" + value, toggleMethod, resetMethod);
            };
          }
          function adapter(name, args, toggleMethod, callback) {
            var _this = this;
            return function (value) {
              toggleMethod(args);
              callback(value);
              _this.current[name] = value;
            };
          }
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

              Object.observe(this.router, function () {
                _this.size = _this.router.currentInstruction.config.toolbar.size || defaults.size;
                _this.bgColor = _this.router.currentInstruction.config.toolbar.bgColor || defaults.bgColor;
                _this.textColor = _this.router.currentInstruction.config.toolbar.bgColor || defaults.textColor;
              });

              this.fixed && classList.push(this.pre("toolbar", "fixed"));
              this.bgColor && classList.push(this.pre("bg", this.bgColor));
              this.textColor && classList.push(this.pre("text", this.textColor));
              this.size && classList.push(this.pre("toolbar", this.size));
              this.addClass(classList);
            },
            writable: true,
            configurable: true
          },
          bgChanged: {
            value: function bgChanged(value) {
              if (value === this.currentBg) {
                return;
              }
              this.onBg(value);
              this.addClass("bg-" + value);
            },
            writable: true,
            configurable: true
          },
          textChanged: {
            value: function textChanged(value) {
              if (value === this.currentText) {
                return;
              }
              this.onText(value);
              this.addClass("text-" + value);
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
          adapter: {
            value: function adapter(args, elementMethod, callback, storageKey) {
              var _this = this;
              return function (value) {
                elementMethod(args);
                callback(value);
                _this[storageKey] = value;
              };
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