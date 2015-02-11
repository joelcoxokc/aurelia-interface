System.register(["aurelia-framework", "./aside", "./bar"], function (_export) {
  "use strict";

  var Behavior, Aside, Bar, _prototypeProperties, _classCallCheck, defaults, Nav;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_aside) {
      Aside = _aside.Aside;
    }, function (_bar) {
      Bar = _bar.Bar;
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
          barId: "bar1"
        }

      };
      Nav = _export("Nav", (function () {
        function Nav(aside, bar) {
          _classCallCheck(this, Nav);

          this.$aside = aside;
          this.$bar = bar;
          this.bars = {};
          this.asides = {};
        }

        _prototypeProperties(Nav, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("toggle");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Aside, Bar];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              console.log("me");
            },
            writable: true,
            configurable: true
          },
          addBar: {
            value: function addBar(options) {
              options = _.assign(defaults.bar, options);

              if (this.bars[options.barId]) {
                return console.error("Bar " + options.barId + " already Exists");
              }

              this.bars[options.barId] = new this.$bar(options);
            },
            writable: true,
            configurable: true
          },
          addAside: {
            value: function addAside() {
              options = _.assign(defaults.aside, options);

              if (this.bars[options.asideId]) {
                return console.error("Aside " + options.barId + " already Exists");
              }

              this.bars[options.asideId] = new this.$aside(options);
            },
            writable: true,
            configurable: true
          }
        });

        return Nav;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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