System.register(["aurelia-templating", "./aside", "./ui-element"], function (_export) {
  "use strict";

  var Behavior, Aside, UiElement, _prototypeProperties, _inherits, _classCallCheck, defaults, UiNavAsideCustomElement;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aside) {
      Aside = _aside.Aside;
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
      UiNavAsideCustomElement = _export("UiNavAsideCustomElement", (function (UiElement) {
        function UiNavAsideCustomElement() {
          _classCallCheck(this, UiNavAsideCustomElement);

          if (UiElement != null) {
            UiElement.apply(this, arguments);
          }
        }

        _inherits(UiNavAsideCustomElement, UiElement);

        _prototypeProperties(UiNavAsideCustomElement, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("open").withProperty("fixed").withProperty("side").withProperty("size");
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              var classList = ["ui-aside", "ui-aside-nav", "aside-" + this.side];
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

        return UiNavAsideCustomElement;
      })(UiElement));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLW5hdi1hc2lkZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQ1IsS0FBSyxFQUNMLFNBQVMsb0RBRWIsUUFBUSxFQU9DLHVCQUF1Qjs7O0FBWDVCLGNBQVEsc0JBQVIsUUFBUTs7QUFDUixXQUFLLFVBQUwsS0FBSzs7QUFDTCxlQUFTLGNBQVQsU0FBUzs7Ozs7Ozs7O0FBRWIsY0FBUSxHQUFHO0FBQ2IsZUFBTyxFQUFHLFFBQVE7QUFDbEIsWUFBSSxFQUFNLE1BQU07QUFDaEIsWUFBSSxFQUFNLEtBQUs7QUFDZixhQUFLLEVBQUssSUFBSTtPQUNmO0FBRVksNkJBQXVCLGlEQUFTLFNBQVM7aUJBQXpDLHVCQUF1QjtnQ0FBdkIsdUJBQXVCOztjQUFTLFNBQVM7QUFBVCxxQkFBUzs7OztrQkFBekMsdUJBQXVCLEVBQVMsU0FBUzs7NkJBQXpDLHVCQUF1QjtBQUd6QixrQkFBUTttQkFBQSxvQkFBRTtBQUViLHFCQUFPLFFBQVEsQ0FDUixZQUFZLENBQUMsTUFBTSxDQUFDLENBQ3BCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FDckIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUNwQixZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7YUFFOUI7Ozs7O0FBR0QsY0FBSTttQkFBQSxnQkFBRTtBQUVGLGtCQUFJLFNBQVMsR0FBRyxDQUFDLFVBQVUsRUFBRSxjQUFjLGFBQVcsSUFBSSxDQUFDLElBQUksQ0FBRyxDQUFBO0FBQ2xFLGtCQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7QUFDM0Msa0JBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7YUFFM0I7Ozs7QUFHRCxxQkFBVzttQkFBQSxxQkFBQyxRQUFRLEVBQUM7QUFDbkIsa0JBQUcsUUFBUSxFQUFFO0FBQ1Qsb0JBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUE7ZUFBRSxNQUM1QjtBQUNGLG9CQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFBO2VBQUU7YUFFcEM7Ozs7OztlQTdCUSx1QkFBdUI7U0FBUyxTQUFTIiwiZmlsZSI6InVpLW5hdi1hc2lkZS5qcyIsInNvdXJjZVJvb3QiOiIvZGlzdC8ifQ==