System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, defaults, AiAside;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = { side: "right",
        size: "sm",
        open: false,
        fold: false,
        fixed: true
      };
      AiAside = _export("AiAside", (function () {
        function AiAside(element) {
          _classCallCheck(this, AiAside);

          this.element = element;
          this.currentSide = null;
        }

        _prototypeProperties(AiAside, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-aside").withProperty("router").withProperty("side", "sideChanged").withProperty("size", "sizeChanged").withProperty("open", "openChanged").withProperty("fold", "foldChanged").withProperty("fixed", "fixedChanged");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              this.classList = [];
              this.addClass("ai-aside");
            },
            writable: true,
            configurable: true
          },
          sideChanged: {
            value: function sideChanged(newSide) {
              newSide = newSide || defaults.side;
              this.removeClass("aside-" + this.currentSide);
              this.addClass("aside-" + newSide);
              this.currentSide = this.side;
            },
            writable: true,
            configurable: true
          },
          addClass: {
            value: function addClass() {
              this.element.classList.add.apply(this.element.classList, arguments);
            },
            writable: true,
            configurable: true
          },
          removeClass: {
            value: function removeClass() {
              this.element.classList.remove.apply(this.element.classList, arguments);
            },
            writable: true,
            configurable: true
          }
        });

        return AiAside;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWFzaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEseUNBRVosUUFBUSxFQU9DLE9BQU87OztBQVRaLGNBQVEsc0JBQVIsUUFBUTs7Ozs7OztBQUVaLGNBQVEsR0FBSSxFQUFFLElBQUksRUFBRyxPQUFPO0FBQ2QsWUFBSSxFQUFHLElBQUk7QUFDWCxZQUFJLEVBQUcsS0FBSztBQUNaLFlBQUksRUFBRyxLQUFLO0FBQ1osYUFBSyxFQUFFLElBQUk7T0FDWjtBQUVKLGFBQU87QUFpQkwsaUJBakJGLE9BQU8sQ0FpQkosT0FBTztnQ0FqQlYsT0FBTzs7QUFtQlosY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7QUFDdEIsY0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7U0FFMUI7OzZCQXRCUSxPQUFPO0FBRVQsa0JBQVE7bUJBQUEsb0JBQUU7QUFDYixxQkFBTyxRQUFRLENBQ1YsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUN6QixZQUFZLENBQUMsUUFBUSxDQUFDLENBQ3RCLFlBQVksQ0FBQyxNQUFNLEVBQUcsYUFBYSxDQUFDLENBQ3BDLFlBQVksQ0FBQyxNQUFNLEVBQUcsYUFBYSxDQUFDLENBQ3BDLFlBQVksQ0FBQyxNQUFNLEVBQUcsYUFBYSxDQUFDLENBQ3BDLFlBQVksQ0FBQyxNQUFNLEVBQUcsYUFBYSxDQUFDLENBQ3BDLFlBQVksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUE7YUFDN0M7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRTtBQUNYLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDbkI7Ozs7O0FBU0QsY0FBSTttQkFBQSxnQkFBRTtBQUNGLGtCQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNwQixrQkFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTthQUM1Qjs7OztBQUVELHFCQUFXO21CQUFBLHFCQUFDLE9BQU8sRUFBQztBQUNoQixxQkFBTyxHQUFHLE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQ25DLGtCQUFJLENBQUMsV0FBVyxZQUFVLElBQUksQ0FBQyxXQUFXLENBQUcsQ0FBQTtBQUM3QyxrQkFBSSxDQUFDLFFBQVEsWUFBVSxPQUFPLENBQUcsQ0FBQTtBQUNqQyxrQkFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBRWhDOzs7O0FBRUQsa0JBQVE7bUJBQUEsb0JBQUU7QUFFTixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQzthQUV2RTs7OztBQUdELHFCQUFXO21CQUFBLHVCQUFFO0FBRVQsa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFFMUU7Ozs7OztlQWhEUSxPQUFPIiwiZmlsZSI6ImFpLWFzaWRlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==