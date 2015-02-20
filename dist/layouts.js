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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzZDQUFhLE1BQU07Ozs7Ozs7O0FBQU4sWUFBTTtBQUNOLGlCQURBLE1BQU07Z0NBQU4sTUFBTTs7QUFFZixjQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztBQUMzQixjQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQTtTQUM5Qjs7NkJBSlUsTUFBTTtBQUtqQixpQ0FBdUI7bUJBQUMsaUNBQUMsWUFBWSxFQUFFLElBQUksRUFBRTtBQUMzQyxrQkFBSSxNQUFNLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRSxrQkFBSSxXQUFXLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFBOztBQUVwRCxvQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDNUMsb0JBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7QUFFakUsd0JBQVUsQ0FBQyxZQUFVO0FBQ25CLHNCQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDO2VBQ3hDLEVBQUUsR0FBRyxDQUFDLENBQUE7O0FBRVAsa0JBQUksRUFBRSxDQUFBO2FBQ1A7Ozs7OztlQWpCVSxNQUFNIiwiZmlsZSI6ImxheW91dHMuanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9