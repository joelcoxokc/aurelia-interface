System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, TabsDemo;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      TabsDemo = _export("TabsDemo", (function () {
        function TabsDemo() {
          _classCallCheck(this, TabsDemo);

          this.selectedTabRef = "tab-2";
        }

        _prototypeProperties(TabsDemo, null, {
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

        return TabsDemo;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMtZGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQWEsUUFBUTs7Ozs7Ozs7QUFBUixjQUFRO0FBRUwsaUJBRkgsUUFBUTtnQ0FBUixRQUFROztBQUdiLGNBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFBO1NBQ2hDOzs2QkFKUSxRQUFRO0FBTWpCLGtCQUFRO21CQUFBLGtCQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFDO0FBQ2pDLG9CQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFBO2FBRXpCOzs7O0FBRUQsaUNBQXVCO21CQUFDLGlDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUU7QUFDekMsa0JBQUksTUFBTSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUE7QUFDakUsa0JBQUksV0FBVyxHQUFHLEdBQUcsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQTs7QUFFcEQsb0JBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQzVDLG9CQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7O0FBRWpFLHdCQUFVLENBQUMsWUFBVTtBQUNqQixzQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxHQUFHLEdBQUcsQ0FBQztlQUMxQyxFQUFFLEdBQUcsQ0FBQyxDQUFBOztBQUVQLGtCQUFJLEVBQUUsQ0FBQTthQUNUOzs7Ozs7ZUF2QlEsUUFBUSIsImZpbGUiOiJ0YWJzLWRlbW8uanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9