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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMtZGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQWEsUUFBUTs7Ozs7Ozs7QUFBUixjQUFRO0FBRVAsaUJBRkQsUUFBUTtnQ0FBUixRQUFROztBQUdqQixjQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQTtTQUM5Qjs7NkJBSlUsUUFBUTtBQU1uQixpQ0FBdUI7bUJBQUMsaUNBQUMsWUFBWSxFQUFFLElBQUksRUFBRTtBQUMzQyxrQkFBSSxNQUFNLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRSxrQkFBSSxXQUFXLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFBOztBQUVwRCxvQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDNUMsb0JBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7QUFFakUsd0JBQVUsQ0FBQyxZQUFVO0FBQ25CLHNCQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDO2VBQ3hDLEVBQUUsR0FBRyxDQUFDLENBQUE7O0FBRVAsa0JBQUksRUFBRSxDQUFBO2FBQ1A7Ozs7OztlQWxCVSxRQUFRIiwiZmlsZSI6InRhYnMtZGVtby5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=