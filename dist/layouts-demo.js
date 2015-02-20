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
              config.toolbar.configure({ bgColor: "bg-indigo",
                textColor: "text-white"
              }, true);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMtZGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQWEsTUFBTTs7Ozs7Ozs7QUFBTixZQUFNO0FBRUosaUJBRkYsTUFBTTtnQ0FBTixNQUFNOztBQUlYLGNBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO0FBQzNCLGNBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFBO1NBRWhDOzs2QkFQUSxNQUFNO0FBVWYsa0JBQVE7bUJBQUEsa0JBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUM7QUFFaEMsb0JBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLFdBQVc7QUFDckIseUJBQVMsRUFBQyxZQUFZO2VBQ3ZCLEVBQ3hCLElBQUksQ0FBQyxDQUFBO2FBRVY7Ozs7QUFHRCxpQ0FBdUI7bUJBQUMsaUNBQUMsWUFBWSxFQUFFLElBQUksRUFBRTtBQUV6QyxrQkFBSSxNQUFNLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRSxrQkFBSSxXQUFXLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFBOztBQUVwRCxvQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDNUMsb0JBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7QUFFakUsd0JBQVUsQ0FBQyxZQUFVO0FBQ2pCLHNCQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDO2VBQzFDLEVBQUUsR0FBRyxDQUFDLENBQUE7O0FBRVAsa0JBQUksRUFBRSxDQUFBO2FBRVQ7Ozs7OztlQWxDUSxNQUFNIiwiZmlsZSI6ImxheW91dHMtZGVtby5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=