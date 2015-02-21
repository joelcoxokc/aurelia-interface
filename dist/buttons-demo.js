System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, _prototypeProperties, _classCallCheck, ButtonsDemo;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ButtonsDemo = _export("ButtonsDemo", (function () {
        function ButtonsDemo() {
          _classCallCheck(this, ButtonsDemo);

          this.heading = "Buttons Demo";
          this.selectedTabRef = "tab-1";

          this.radioOptions = [{ name: "First" }, { name: "Second" }, { name: "Third" }];
        }

        _prototypeProperties(ButtonsDemo, null, {
          activate: {
            value: function activate(params, queryString, config) {
              config.toolbar.configure({ bgColor: "bg-white", textColor: "text-purple" }, true);
            },
            writable: true,
            configurable: true
          },
          checkboxChanged: {
            value: function checkboxChanged(newVal) {
              alert(newVal ? "Checked" : "Unchecked");
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

        return ButtonsDemo;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbnMtZGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLHlDQUVELFdBQVc7OztBQUZoQixZQUFNLGtCQUFOLE1BQU07Ozs7Ozs7QUFFRCxpQkFBVztBQUVSLGlCQUZILFdBQVc7Z0NBQVgsV0FBVzs7QUFJaEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7QUFDOUIsY0FBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUE7O0FBRTdCLGNBQUksQ0FBQyxZQUFZLEdBQUcsQ0FDaEIsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLEVBQ2YsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLEVBQ2hCLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUNsQixDQUFBO1NBRUo7OzZCQWJRLFdBQVc7QUFnQnBCLGtCQUFRO21CQUFBLGtCQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFDO0FBRWpDLG9CQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FDaEIsRUFBRSxPQUFPLEVBQUMsVUFBVSxFQUFHLFNBQVMsRUFBQyxhQUFhLEVBQUMsRUFDckQsSUFBSSxDQUFDLENBQUE7YUFFVjs7OztBQUdELHlCQUFlO21CQUFDLHlCQUFDLE1BQU0sRUFBRTtBQUVyQixtQkFBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUE7YUFFMUM7Ozs7QUFFQSxpQ0FBdUI7bUJBQUMsaUNBQUMsWUFBWSxFQUFFLElBQUksRUFBRTtBQUUxQyxrQkFBSSxNQUFNLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRSxrQkFBSSxXQUFXLEdBQUcsR0FBRyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFBOztBQUVwRCxvQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDNUMsb0JBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7QUFFakUsd0JBQVUsQ0FBQyxZQUFVO0FBQ2pCLHNCQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDO2VBQzFDLEVBQUUsR0FBRyxDQUFDLENBQUE7O0FBRVAsa0JBQUksRUFBRSxDQUFBO2FBRVQ7Ozs7OztlQTdDUSxXQUFXIiwiZmlsZSI6ImJ1dHRvbnMtZGVtby5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=