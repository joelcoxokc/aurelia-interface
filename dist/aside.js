System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, defaults, Aside;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = {
        asideId: "aside1",
        side: "left",
        open: false,
        fixed: true
      };
      Aside = _export("Aside", (function () {
        function Aside(options) {
          _classCallCheck(this, Aside);

          this.defaults = defaults;

          this.asideId = options.asideId || this.defaults.asideId;
          this.fixed = options.fixed || this.defaults.fixed;
          this.side = options.side || this.defaults.side;
          this.open = options.open || this.defaults.open;
          this.size = options.size || this.defaults.size;
        }

        _prototypeProperties(Aside, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("open").withProperty("side").withProperty("size").withProperty("fixed").attachedBehavior("toggle");
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate(options) {
              console.log("Aside Activated", this);
            },
            writable: true,
            configurable: true
          },
          toggle: {
            value: function toggle() {
              this.open = !this.open;
            },
            writable: true,
            configurable: true
          }
        });

        return Aside;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEseUNBRVosUUFBUSxFQU9DLEtBQUs7OztBQVRWLGNBQVEscUJBQVIsUUFBUTs7Ozs7OztBQUVaLGNBQVEsR0FBRztBQUNiLGVBQU8sRUFBRyxRQUFRO0FBQ2xCLFlBQUksRUFBTSxNQUFNO0FBQ2hCLFlBQUksRUFBTSxLQUFLO0FBQ2YsYUFBSyxFQUFLLElBQUk7T0FDZjtBQUVZLFdBQUs7QUFjSCxpQkFkRixLQUFLLENBY0YsT0FBTztnQ0FkVixLQUFLOztBQWVWLGNBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDOztBQUV6QixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUE7QUFDdkQsY0FBSSxDQUFDLEtBQUssR0FBSyxPQUFPLENBQUMsS0FBSyxJQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFBO0FBQ3JELGNBQUksQ0FBQyxJQUFJLEdBQU0sT0FBTyxDQUFDLElBQUksSUFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQTtBQUNwRCxjQUFJLENBQUMsSUFBSSxHQUFNLE9BQU8sQ0FBQyxJQUFJLElBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUE7QUFDcEQsY0FBSSxDQUFDLElBQUksR0FBTSxPQUFPLENBQUMsSUFBSSxJQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFBO1NBRXZEOzs2QkF2QlEsS0FBSztBQUVQLGtCQUFRO21CQUFBLG9CQUFFO0FBRWIscUJBQU8sUUFBUSxDQUNWLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FDcEIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUNwQixZQUFZLENBQUMsTUFBTSxDQUFDLENBQ3BCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FDckIsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUE7YUFFbEM7Ozs7O0FBY0Qsa0JBQVE7bUJBQUEsa0JBQUMsT0FBTyxFQUFDO0FBRWIscUJBQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFFeEM7Ozs7QUFHRCxnQkFBTTttQkFBQSxrQkFBRTtBQUNKLGtCQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUUxQjs7Ozs7O2VBbkNRLEtBQUsiLCJmaWxlIjoiYXNpZGUuanMiLCJzb3VyY2VSb290IjoiL2Rpc3QvIn0=