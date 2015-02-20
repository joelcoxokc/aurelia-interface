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
        }

        _prototypeProperties(Components, null, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzZDQUFhLFVBQVU7Ozs7Ozs7O0FBQVYsZ0JBQVU7QUFDVixpQkFEQSxVQUFVO2dDQUFWLFVBQVU7O0FBRW5CLGNBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO1NBRWhDOzs2QkFKVSxVQUFVO0FBS3JCLGlDQUF1QjttQkFBQyxpQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFO0FBQzNDLGtCQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2pFLGtCQUFJLFdBQVcsR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUE7O0FBRXBELG9CQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUM1QyxvQkFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDOztBQUVqRSx3QkFBVSxDQUFDLFlBQVU7QUFDbkIsc0JBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7ZUFDeEMsRUFBRSxHQUFHLENBQUMsQ0FBQTs7QUFFUCxrQkFBSSxFQUFFLENBQUE7YUFDUDs7Ozs7O2VBakJVLFVBQVUiLCJmaWxlIjoiY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=