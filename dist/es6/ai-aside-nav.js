System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, defaults, AiAsideNav;
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
      AiAsideNav = _export("AiAsideNav", (function () {
        function AiAsideNav(element) {
          _classCallCheck(this, AiAsideNav);

          var _this = this;

          this.element = element;

          this.current = defaults;
          _.assign(this, this.current);

          this.resetSide = createToggle("side", "toolbar", this.removeClass, this.resetSide);
          this.resetOpen = createToggle("open", "toolbar", this.removeClass, this.resetOpen);
          this.resetFold = createToggle("fold", "toolbar", this.removeClass, this.resetFold);
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

        _prototypeProperties(AiAsideNav, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-aside-nav").withProperty("router").withProperty("side", "sideChanged").withProperty("open", "openChanged").withProperty("fold", "foldChanged").withProperty("size", "sizeChanged").withProperty("fixed").withProperty("brand", "brandChanged");
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
              var _this = this;


              var classList = ["ai-aside-nav"];
              this.fixed && classList.push(this.pre("aside", "fixed"));
              this.open && classList.push(this.pre("aside", "open"));
              classList.push(this.pre("bg", this.bgColor));
              classList.push(this.pre("text", this.textColor));
              classList.push(this.pre("aside", this.size));
              classList.push(this.pre("aside", this.side));
              this.addClass(classList);
            },
            writable: true,
            configurable: true
          },
          bgChanged: {
            value: function bgChanged(value) {
              if (value === this.current.bgColor) {
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
              if (value === this.current.textColor) {
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
              this.onSize(value);
              this.addClass("toolbar-" + value);
            },
            writable: true,
            configurable: true
          },
          openChanged: {
            value: function openChanged(value) {
              if (value) {
                this.element.classList.add("aside-open");
                console.log(value);
                return;
              }
              this.element.classList.remove("aside-open");
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

        return AiAsideNav;
      })());
    }
  };
});