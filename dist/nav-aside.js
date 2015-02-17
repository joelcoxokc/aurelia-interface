System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, NavAside;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NavAside = _export("NavAside", (function () {
        function NavAside(element) {
          _classCallCheck(this, NavAside);

          this.heading = "ai";
          this.element = element;
        }

        _prototypeProperties(NavAside, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("router").withProperty("aside").withProperty("size", "size-changed").withProperty("bar");
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


              this.element.classList.add("ai-aside", "ai-aside-nav", "aside-fixed", "aside-left");

            },
            writable: true,
            configurable: true
          }
        });

        return NavAside;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1hc2lkZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLHlDQUVILFFBQVE7OztBQUZiLGNBQVEscUJBQVIsUUFBUTs7Ozs7OztBQUVILGNBQVE7QUFtQk4saUJBbkJGLFFBQVEsQ0FtQkwsT0FBTztnQ0FuQlYsUUFBUTs7QUFvQmIsY0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDcEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FFMUI7OzZCQXZCUSxRQUFRO0FBRVYsa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxRQUFRLENBQ1YsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUN0QixZQUFZLENBQUMsT0FBTyxDQUFDLENBQ3JCLFlBQVksQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQ3BDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUUzQjs7OztBQUdNLGdCQUFNO21CQUFDLGtCQUFFO0FBRVoscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUVuQjs7Ozs7QUFTRCxjQUFJO21CQUFBLGdCQUFFOzs7QUFHRixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDOzthQUd2Rjs7Ozs7O2VBaENRLFFBQVEiLCJmaWxlIjoibmF2LWFzaWRlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=