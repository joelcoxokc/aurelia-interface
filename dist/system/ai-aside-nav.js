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
//# sourceMappingURL=data:application/json;base64,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TyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDeEMsdUJBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDbEIsdUJBQU87ZUFDVjtBQUNELGtCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7YUFDOUM7Ozs7QUFFRCxrQkFBUTttQkFBQSxrQkFBQyxLQUFLLEVBQUM7QUFDWCxrQkFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3BELGtCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO2FBQ2pFOzs7O0FBRUQscUJBQVc7bUJBQUEscUJBQUMsS0FBSyxFQUFDO0FBQ2Qsa0JBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLFNBQVMsQ0FBQztBQUNwRCxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTthQUN6RTs7Ozs7O2VBNUdRLFVBQVUiLCJmaWxlIjoiYWktYXNpZGUtbmF2LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==