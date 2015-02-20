System.register(["aurelia-templating", "./ai-element"], function (_export) {
  "use strict";

  var Behavior, AiElement, _inherits, _prototypeProperties, _classCallCheck, defaults, AiToolbar, ToolbarContainer;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aiElement) {
      AiElement = _aiElement.AiElement;
    }],
    execute: function () {
      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

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
              return Behavior.customElement("ai-toolbar").withProperty("router").withProperty("fixed").withProperty("brand", "brandChanged").withProperty("bgColor", "bgChanged").withProperty("textColor", "textChanged").withProperty("size", "sizeChanged").withProperty("toolbar");
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
              this.container = new ToolbarContainer(this.element.firstElementChild);

              console.log(this.container);
              console.log(this.size);
              this.fixed && classList.push("toolbar-fixed");
              this.bgColor && classList.push(this.bgColor);
              this.textColor && classList.push(this.textColor);
              this.size && classList.push("toolbar-" + this.size);
              this.container.addClass(this.bgColor, this.textColor);

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
              this.container.removeClass(this.current.bgColor);
              this.container.addClass(this.bgColor);
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
              this.container.removeClass(this.current.textColor);
              this.container.addClass(this.textColor);
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
              this.removeClass("toolbar-" + this.current.size);
              this.addClass("toolbar-" + value);
              this.current.size = value;
            },
            writable: true,
            configurable: true
          },
          addClass: {
            value: function addClass() {
              var args = _.flatten(arguments, true);
              console.log(args);
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
      ToolbarContainer = (function (AiElement) {
        function ToolbarContainer(element) {
          _classCallCheck(this, ToolbarContainer);

          this.element = element;
        }

        _inherits(ToolbarContainer, AiElement);

        return ToolbarContainer;
      })(AiElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUMsU0FBUyxDQUFDLENBQUE7QUFDbEQsa0JBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUN2QyxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBRWxDOzs7O0FBRUQscUJBQVc7bUJBQUEscUJBQUMsS0FBSyxFQUFDO0FBRWQsa0JBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDO0FBQUUsdUJBQU07ZUFBRTtBQUN6QyxrQkFBSSxDQUFDLFdBQVcsY0FBWSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRyxDQUFBO0FBQ2hELGtCQUFJLENBQUMsUUFBUSxjQUFZLEtBQUssQ0FBRyxDQUFBO0FBQ2pDLGtCQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7YUFFN0I7Ozs7QUFFRCxrQkFBUTttQkFBQSxvQkFBRTtBQUNOLGtCQUFJLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUNyQyxxQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNqQixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTthQUNqRTs7OztBQUVELHFCQUFXO21CQUFBLHFCQUFDLEtBQUssRUFBQztBQUNkLGtCQUFJLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxTQUFTLENBQUM7QUFDcEQsa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7YUFDekU7Ozs7OztlQS9GUSxTQUFTOztBQW1HaEIsc0JBQWdCLGNBQVMsU0FBUztBQUV6QixpQkFGVCxnQkFBZ0IsQ0FFTixPQUFPO2dDQUZqQixnQkFBZ0I7O0FBR2QsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDMUI7O2tCQUpDLGdCQUFnQixFQUFTLFNBQVM7O2VBQWxDLGdCQUFnQjtTQUFTLFNBQVMiLCJmaWxlIjoiYWktdG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=