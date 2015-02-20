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

        return Components;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzZDQUFhLFVBQVU7Ozs7Ozs7O0FBQVYsZ0JBQVU7QUFDUixpQkFERixVQUFVO2dDQUFWLFVBQVU7O0FBRWYsY0FBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7QUFDL0IsY0FBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUE7U0FDaEM7OzZCQUpRLFVBQVU7QUFNbkIsa0JBQVE7bUJBQUEsa0JBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUM7QUFDakMsb0JBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUE7YUFFekI7Ozs7QUFFRCxpQ0FBdUI7bUJBQUMsaUNBQUMsWUFBWSxFQUFFLElBQUksRUFBRTtBQUN6QyxrQkFBSSxNQUFNLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRSxrQkFBSSxXQUFXLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFBOztBQUVwRCxvQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDNUMsb0JBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7QUFFakUsd0JBQVUsQ0FBQyxZQUFVO0FBQ2pCLHNCQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDO2VBQzFDLEVBQUUsR0FBRyxDQUFDLENBQUE7O0FBRVAsa0JBQUksRUFBRSxDQUFBO2FBQ1Q7Ozs7OztlQXZCUSxVQUFVIiwiZmlsZSI6ImNvbXBvbmVudHMuanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9