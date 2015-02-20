System.register(["aurelia-templating", "./ai-element"], function (_export) {
  "use strict";

  var Behavior, AiElement, _prototypeProperties, _inherits, _classCallCheck, defaults, AiHeader;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aiElement) {
      AiElement = _aiElement.AiElement;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = { size: "sm",
        fixed: false,
        bg: "white",
        text: "purple"
      };
      AiHeader = _export("AiHeader", (function (AiElement) {
        function AiHeader(element) {
          _classCallCheck(this, AiHeader);

          this.element = element;
          this.current = defaults;
          _.assign(this, this.current);
        }

        _inherits(AiHeader, AiElement);

        _prototypeProperties(AiHeader, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-header").withProperty("router").withProperty("size", "sizeChanged").withProperty("fixed", "fixedChanged").withProperty("bg", "bgChanged").withProperty("text", "textChanged");
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
              this.classList = [];
              this.addClass("ai-header", "header-" + this.size);

              Object.observe(this.router, function () {
                _this.size = _this.router.currentInstruction.config.toolbar.size || _this.current.size;
                _this.bg = _this.router.currentInstruction.config.toolbar.bgColor || _this.current.bg;
                _this.text = _this.router.currentInstruction.config.toolbar.textColor || _this.current.text;
              });
            },
            writable: true,
            configurable: true
          },
          sizeChanged: {
            value: function sizeChanged(newSize) {
              newSize = newSize || defaults.size;
              this.removeClass("header-" + this.current.size);
              this.addClass("header-" + newSize);
              this.current.size = this.size;
            },
            writable: true,
            configurable: true
          },
          bgChanged: {
            value: function bgChanged(newBg) {
              this.removeClass(this.current.bg);
              this.addClass(newBg);
              this.current.bg = newBg;
            },
            writable: true,
            configurable: true
          },
          textChanged: {
            value: function textChanged(newText) {
              this.removeClass(this.current.text);
              this.addClass(newText);
              this.current.text = newText;
            },
            writable: true,
            configurable: true
          }
        });

        return AiHeader;
      })(AiElement));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQ1IsU0FBUyxvREFFYixRQUFRLEVBTUMsUUFBUTs7O0FBVGIsY0FBUSxzQkFBUixRQUFROztBQUNSLGVBQVMsY0FBVCxTQUFTOzs7Ozs7Ozs7QUFFYixjQUFRLEdBQUksRUFBRSxJQUFJLEVBQUcsSUFBSTtBQUNYLGFBQUssRUFBRSxLQUFLO0FBQ1osVUFBRSxFQUFJLE9BQU87QUFDYixZQUFJLEVBQUUsUUFBUTtPQUNmO0FBRUosY0FBUSxrQ0FBUyxTQUFTO0FBZ0J4QixpQkFoQkYsUUFBUSxDQWdCTCxPQUFPO2dDQWhCVixRQUFROztBQWtCYixjQUFJLENBQUMsT0FBTyxHQUFPLE9BQU8sQ0FBQTtBQUMxQixjQUFJLENBQUMsT0FBTyxHQUFPLFFBQVEsQ0FBQztBQUM1QixXQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7U0FFL0I7O2tCQXRCUSxRQUFRLEVBQVMsU0FBUzs7NkJBQTFCLFFBQVE7QUFFVixrQkFBUTttQkFBQSxvQkFBRTtBQUNiLHFCQUFPLFFBQVEsQ0FDVixhQUFhLENBQUMsV0FBVyxDQUFDLENBQzFCLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FDdEIsWUFBWSxDQUFDLE1BQU0sRUFBUSxhQUFhLENBQUMsQ0FDekMsWUFBWSxDQUFDLE9BQU8sRUFBTyxjQUFjLENBQUMsQ0FDMUMsWUFBWSxDQUFDLElBQUksRUFBVSxXQUFXLENBQUMsQ0FDdkMsWUFBWSxDQUFDLE1BQU0sRUFBUSxhQUFhLENBQUMsQ0FBQTthQUNqRDs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFFO0FBQ1gscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUNuQjs7Ozs7QUFVRCxjQUFJO21CQUFBLGdCQUFFO0FBRUYsa0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQztBQUNqQixrQkFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDcEIsa0JBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLFlBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBOztBQUUvQyxvQkFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFlBQVU7QUFDbEMscUJBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksSUFBUyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQTtBQUMzRixxQkFBSyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFRLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFBO0FBQ3pGLHFCQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUE7ZUFDOUYsQ0FBQyxDQUFBO2FBQ0w7Ozs7QUFFRCxxQkFBVzttQkFBQSxxQkFBQyxPQUFPLEVBQUM7QUFDaEIscUJBQU8sR0FBRyxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQztBQUNuQyxrQkFBSSxDQUFDLFdBQVcsYUFBVyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRyxDQUFBO0FBQy9DLGtCQUFJLENBQUMsUUFBUSxhQUFXLE9BQU8sQ0FBRyxDQUFBO0FBQ2xDLGtCQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBRWpDOzs7O0FBRUQsbUJBQVM7bUJBQUEsbUJBQUMsS0FBSyxFQUFDO0FBRVosa0JBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUNqQyxrQkFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUNwQixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFBO2FBRTFCOzs7O0FBRUQscUJBQVc7bUJBQUEscUJBQUMsT0FBTyxFQUFDO0FBQ2hCLGtCQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDbkMsa0JBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDdEIsa0JBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQTthQUM5Qjs7Ozs7O2VBekRRLFFBQVE7U0FBUyxTQUFTIiwiZmlsZSI6ImFpLWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=