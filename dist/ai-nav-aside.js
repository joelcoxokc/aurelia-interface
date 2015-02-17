System.register(["aurelia-templating", "./ui-element"], function (_export) {
  "use strict";

  var Behavior, UiElement, _prototypeProperties, _inherits, _classCallCheck, defaults, AiNavAside;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_uiElement) {
      UiElement = _uiElement.UiElement;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = {
        asideId: "aside1",
        side: "left",
        open: false,
        fixed: true
      };
      AiNavAside = _export("AiNavAside", (function (UiElement) {
        function AiNavAside(element) {
          _classCallCheck(this, AiNavAside);

          this.element = element;
        }

        _inherits(AiNavAside, UiElement);

        _prototypeProperties(AiNavAside, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-nav-aside").withProperty("open").withProperty("fixed").withProperty("side").withProperty("size").withProperty("aside");
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
              console.log(this);
              var classList = ["ai-aside", "ai-aside-nav", "aside-" + this.side];
              this.fixed && classList.push("aside-fixed");
              this.addClass(classList);
            },
            writable: true,
            configurable: true
          },
          openChanged: {
            value: function openChanged(newValue) {
              if (newValue) {
                this.addClass("aside-open");
              } else {
                this.removeClass("aside-open");
              }
            },
            writable: true,
            configurable: true
          }
        });

        return AiNavAside;
      })(UiElement));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLW5hdi1hc2lkZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQ1IsU0FBUyxvREFFYixRQUFRLEVBT0MsVUFBVTs7O0FBVmYsY0FBUSxzQkFBUixRQUFROztBQUNSLGVBQVMsY0FBVCxTQUFTOzs7Ozs7Ozs7QUFFYixjQUFRLEdBQUc7QUFDYixlQUFPLEVBQUcsUUFBUTtBQUNsQixZQUFJLEVBQU0sTUFBTTtBQUNoQixZQUFJLEVBQU0sS0FBSztBQUNmLGFBQUssRUFBSyxJQUFJO09BQ2Y7QUFFWSxnQkFBVSxvQ0FBUyxTQUFTO0FBcUIxQixpQkFyQkYsVUFBVSxDQXFCUCxPQUFPO2dDQXJCVixVQUFVOztBQXVCZixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtTQUV6Qjs7a0JBekJRLFVBQVUsRUFBUyxTQUFTOzs2QkFBNUIsVUFBVTtBQUdaLGtCQUFRO21CQUFBLG9CQUFFO0FBRWIscUJBQU8sUUFBUSxDQUNSLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FDN0IsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUNwQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQ3JCLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FDcEIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUNwQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7YUFFL0I7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRTtBQUVYLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7YUFFbkI7Ozs7O0FBUUQsY0FBSTttQkFBQSxnQkFBRTtBQUNGLHFCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2pCLGtCQUFJLFNBQVMsR0FBRyxDQUFDLFVBQVUsRUFBRSxjQUFjLGFBQVcsSUFBSSxDQUFDLElBQUksQ0FBRyxDQUFBO0FBQ2xFLGtCQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7QUFDM0Msa0JBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7YUFFM0I7Ozs7QUFHRCxxQkFBVzttQkFBQSxxQkFBQyxRQUFRLEVBQUM7QUFDbkIsa0JBQUcsUUFBUSxFQUFFO0FBQ1Qsb0JBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUE7ZUFBRSxNQUM1QjtBQUNGLG9CQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFBO2VBQUU7YUFFcEM7Ozs7OztlQTFDUSxVQUFVO1NBQVMsU0FBUyIsImZpbGUiOiJhaS1uYXYtYXNpZGUuanMiLCJzb3VyY2VSb290IjoiL2Rpc3QvIn0=