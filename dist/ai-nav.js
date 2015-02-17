System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, defaults, NavBar, NavAside;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = {
        aside: {
          side: "left",
          open: false,
          fixed: true,
          asideId: "aside1"
        },
        bar: {
          fixed: true,
          open: false,
          size: "sm",
          barId: "bar1" }

      };
      NavBar = _export("NavBar", (function () {
        function NavBar(options) {
          _classCallCheck(this, NavBar);

          options = options || {};
          this.defaults = defaults.bar;
          this.fixed = options.fixed || this.defaults.fixed;
          this.open = options.open || this.defaults.open;
          this.size = options.size || this.defaults.size;
          this.barId = options.barId || this.defaults.barId;
        }

        _prototypeProperties(NavBar, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("toggle");
            },
            writable: true,
            configurable: true
          }
        });

        return NavBar;
      })());
      NavAside = _export("NavAside", (function () {
        function NavAside(options) {
          _classCallCheck(this, NavAside);

          options = options || {};
          this.defaults = defaults.aside;
          this.fixed = options.fixed || this.defaults.fixed;
          this.open = options.open || this.defaults.open;
          this.side = options.side || this.defaults.side;
          this.asideId = options.asideId || this.defaults.asideId;
        }

        _prototypeProperties(NavAside, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("toggle");
            },
            writable: true,
            configurable: true
          }
        }, {
          toggle: {
            value: function toggle(value) {
              console.log("toggled", value);
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
//# sourceMappingURL=data:application/json;base64,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