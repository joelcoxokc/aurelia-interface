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
              config.toolbar.configure({ bgColor: "bg-grey darken-4", textColor: "text-white" }, true);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbnMtZGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLHlDQUVELFdBQVc7OztBQUZoQixZQUFNLGtCQUFOLE1BQU07Ozs7Ozs7QUFFRCxpQkFBVztBQUVSLGlCQUZILFdBQVc7Z0NBQVgsV0FBVzs7QUFJaEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7QUFDOUIsY0FBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUE7O0FBRTdCLGNBQUksQ0FBQyxZQUFZLEdBQUcsQ0FDaEIsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLEVBQ2YsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLEVBQ2hCLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUNsQixDQUFBO1NBRUo7OzZCQWJRLFdBQVc7QUFnQnBCLGtCQUFRO21CQUFBLGtCQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFDO0FBRWpDLG9CQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FDaEIsRUFBRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsU0FBUyxFQUFDLFlBQVksRUFBQyxFQUMzRCxJQUFJLENBQUMsQ0FBQTthQUVWOzs7O0FBR0QseUJBQWU7bUJBQUMseUJBQUMsTUFBTSxFQUFFO0FBRXJCLG1CQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQTthQUUxQzs7OztBQUVBLGlDQUF1QjttQkFBQyxpQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFO0FBRTFDLGtCQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2pFLGtCQUFJLFdBQVcsR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUE7O0FBRXBELG9CQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUM1QyxvQkFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDOztBQUVqRSx3QkFBVSxDQUFDLFlBQVU7QUFDakIsc0JBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7ZUFDMUMsRUFBRSxHQUFHLENBQUMsQ0FBQTs7QUFFUCxrQkFBSSxFQUFFLENBQUE7YUFFVDs7Ozs7O2VBN0NRLFdBQVciLCJmaWxlIjoiYnV0dG9ucy1kZW1vLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==