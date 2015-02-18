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
              return Behavior.customElement("nav-aside").withProperty("router").withProperty("aside").withProperty("size", "sizeChanged").withProperty("bar");
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
          toggle: {
            value: function toggle() {
              this.aside.open = !this.aside.open;
            },
            writable: true,
            configurable: true
          },
          bind: {
            value: function bind() {
              this.router = this.router;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1hc2lkZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLHlDQUVILFFBQVE7OztBQUZiLGNBQVEscUJBQVIsUUFBUTs7Ozs7OztBQUVILGNBQVE7QUFvQk4saUJBcEJGLFFBQVEsQ0FvQkwsT0FBTztnQ0FwQlYsUUFBUTs7QUFxQmIsY0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDcEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FHMUI7OzZCQXpCUSxRQUFRO0FBRVYsa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxRQUFRLENBQ1YsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUMxQixZQUFZLENBQUMsUUFBUSxDQUFDLENBQ3RCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FDckIsWUFBWSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FDbkMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBRTNCOzs7O0FBR00sZ0JBQU07bUJBQUMsa0JBQUU7QUFFWixxQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBRW5COzs7OztBQVVELGdCQUFNO21CQUFBLGtCQUFFO0FBQ0osa0JBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUE7YUFDckM7Ozs7QUFFRCxjQUFJO21CQUFBLGdCQUFFO0FBQ0Ysa0JBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTthQUU1Qjs7Ozs7O2VBbkNRLFFBQVEiLCJmaWxlIjoibmF2LWFzaWRlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==