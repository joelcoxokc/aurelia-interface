System.register(["aurelia-templating", "./aside", "./ui-element"], function (_export) {
  "use strict";

  var Behavior, Aside, UiElement, _prototypeProperties, _inherits, _classCallCheck, defaults, AiNavAside;
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
      AiNavAside = _export("AiNavAside", (function (UiElement) {
        function AiNavAside(element) {
          _classCallCheck(this, AiNavAside);

          this.element = element;
        }

        _inherits(AiNavAside, UiElement);

        _prototypeProperties(AiNavAside, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-nav-aside").withProperty("open").withProperty("fixed").withProperty("side").withProperty("size");
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

        return AiNavAside;
      })(UiElement));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLW5hdi1hc2lkZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQ1IsS0FBSyxFQUNMLFNBQVMsb0RBRWIsUUFBUSxFQU9DLFVBQVU7OztBQVhmLGNBQVEsc0JBQVIsUUFBUTs7QUFDUixXQUFLLFVBQUwsS0FBSzs7QUFDTCxlQUFTLGNBQVQsU0FBUzs7Ozs7Ozs7O0FBRWIsY0FBUSxHQUFHO0FBQ2IsZUFBTyxFQUFHLFFBQVE7QUFDbEIsWUFBSSxFQUFNLE1BQU07QUFDaEIsWUFBSSxFQUFNLEtBQUs7QUFDZixhQUFLLEVBQUssSUFBSTtPQUNmO0FBRVksZ0JBQVUsb0NBQVMsU0FBUztBQW9CMUIsaUJBcEJGLFVBQVUsQ0FvQlAsT0FBTztnQ0FwQlYsVUFBVTs7QUFzQmYsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7U0FFekI7O2tCQXhCUSxVQUFVLEVBQVMsU0FBUzs7NkJBQTVCLFVBQVU7QUFHWixrQkFBUTttQkFBQSxvQkFBRTtBQUViLHFCQUFPLFFBQVEsQ0FDUixhQUFhLENBQUMsY0FBYyxDQUFDLENBQzdCLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FDcEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUNyQixZQUFZLENBQUMsTUFBTSxDQUFDLENBQ3BCLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUU5Qjs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFFO0FBRVgscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUVuQjs7Ozs7QUFRRCxjQUFJO21CQUFBLGdCQUFFO0FBRUYsa0JBQUksU0FBUyxHQUFHLENBQUMsVUFBVSxFQUFFLGNBQWMsYUFBVyxJQUFJLENBQUMsSUFBSSxDQUFHLENBQUE7QUFDbEUsa0JBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUMzQyxrQkFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQTthQUUzQjs7OztBQUdELHFCQUFXO21CQUFBLHFCQUFDLFFBQVEsRUFBQztBQUNuQixrQkFBRyxRQUFRLEVBQUU7QUFDVCxvQkFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtlQUFFLE1BQzVCO0FBQ0Ysb0JBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUE7ZUFBRTthQUVwQzs7Ozs7O2VBekNRLFVBQVU7U0FBUyxTQUFTIiwiZmlsZSI6ImFpLW5hdi1hc2lkZS5qcyIsInNvdXJjZVJvb3QiOiIvZGlzdC8ifQ==