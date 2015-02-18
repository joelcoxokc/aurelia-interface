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
              this.fixed && classList.push(this.pre("toolbar", "fixed"));
              this.bgColor && classList.push(this.pre("bg", this.bgColor));
              this.textColor && classList.push(this.pre("bg", this.textColor));
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
              if (value === this.currentSize) {
                return;
              }
              this.onSize(value);
              this.addClass("toolbar-" + value);
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