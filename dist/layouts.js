System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, Layout;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Layout = _export("Layout", (function () {
        function Layout() {
          _classCallCheck(this, Layout);

          this.heading = "aiLayout ";
          this.selectedTabRef = "tab-1";
        }

        _prototypeProperties(Layout, null, {
          activate: {
            value: function activate(params, queryString, config) {
              config.toolbar.reset();
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

        return Layout;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzZDQUFhLE1BQU07Ozs7Ozs7O0FBQU4sWUFBTTtBQUNKLGlCQURGLE1BQU07Z0NBQU4sTUFBTTs7QUFFWCxjQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztBQUMzQixjQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQTtTQUNoQzs7NkJBSlEsTUFBTTtBQU1mLGtCQUFRO21CQUFBLGtCQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFDO0FBQ2pDLG9CQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFBO2FBQ3pCOzs7O0FBRUQsaUNBQXVCO21CQUFDLGlDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUU7QUFDekMsa0JBQUksTUFBTSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUE7QUFDakUsa0JBQUksV0FBVyxHQUFHLEdBQUcsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQTs7QUFFcEQsb0JBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQzVDLG9CQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7O0FBRWpFLHdCQUFVLENBQUMsWUFBVTtBQUNqQixzQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxHQUFHLEdBQUcsQ0FBQztlQUMxQyxFQUFFLEdBQUcsQ0FBQyxDQUFBOztBQUVQLGtCQUFJLEVBQUUsQ0FBQTthQUNUOzs7Ozs7ZUF0QlEsTUFBTSIsImZpbGUiOiJsYXlvdXRzLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==