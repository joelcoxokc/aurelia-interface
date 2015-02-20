System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, Components;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Components = _export("Components", (function () {
        function Components() {
          _classCallCheck(this, Components);

          this.heading = "aiComponents ";
          this.selectedTabRef = "tab-2";
        }

        _prototypeProperties(Components, null, {
          activate: {
            value: function activate(params, queryString, config) {
              config.toolbar.configure({ bgColor: "bg-teal accent-4", textColor: "text-white" }, true);
            },
            writable: true,
            configurable: true
          },
          updateTabSliderPosition: {
            value: function updateTabSliderPosition(tabsInstance, next) {
              var slider = tabsInstance.element.querySelector(".ai-tab-slider");
              var sliderWidth = 100 / tabsInstance.tabLinks.length;

              slider.style.width = sliderWidth + 10 + "%";
              slider.style.left = tabsInstance.activeTabLink.offsetLeft + "px";

              setTimeout(function () {
                slider.style.width = sliderWidth + "%";
              }, 200);

              next();
            },
            writable: true,
            configurable: true
          }
        });

        return Components;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMtZGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQWEsVUFBVTs7Ozs7Ozs7QUFBVixnQkFBVTtBQUVSLGlCQUZGLFVBQVU7Z0NBQVYsVUFBVTs7QUFJZixjQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztBQUMvQixjQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQTtTQUVoQzs7NkJBUFEsVUFBVTtBQVVuQixrQkFBUTttQkFBQSxrQkFBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBQztBQUVqQyxvQkFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQ3BCLEVBQUUsT0FBTyxFQUFDLGtCQUFrQixFQUFFLFNBQVMsRUFBQyxZQUFZLEVBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTthQUVuRTs7OztBQUdELGlDQUF1QjttQkFBQyxpQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFO0FBRXpDLGtCQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2pFLGtCQUFJLFdBQVcsR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUE7O0FBRXBELG9CQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUM1QyxvQkFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDOztBQUVqRSx3QkFBVSxDQUFDLFlBQVU7QUFDakIsc0JBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7ZUFDMUMsRUFBRSxHQUFHLENBQUMsQ0FBQTs7QUFFUCxrQkFBSSxFQUFFLENBQUE7YUFFVDs7Ozs7O2VBaENRLFVBQVUiLCJmaWxlIjoiY29tcG9uZW50cy1kZW1vLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==