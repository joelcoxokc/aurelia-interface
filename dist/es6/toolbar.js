System.register(["aurelia-templating", "./notify"], function (_export) {
  "use strict";

  var Behavior, Notify, _prototypeProperties, _classCallCheck, defaults, Toolbar;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_notify) {
      Notify = _notify.Notify;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = { size: "sm",
        fixed: true,
        bgColor: "white",
        textColor: "purple",
        brand: "brand"
      };
      Toolbar = _export("Toolbar", (function () {
        function Toolbar(options) {
          _classCallCheck(this, Toolbar);

          this.defaults = defaults;
          _.assign(this, this.defaults);
          _.assign(this, options);


        }

        _prototypeProperties(Toolbar, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("fixed").withProperty("size", "sizeChanged").withProperty("brand", "brandChanged").withProperty("bgColor", "bgChanged").withProperty("textColor", "textChanged");
            },
            writable: true,
            configurable: true
          }
        }, {
          configure: {
            value: function configure(options) {
              _.assign(this, options);
            },
            writable: true,
            configurable: true
          },
          reset: {
            value: function reset(options) {
              var newDefaults = options || this.defaults;
              this.configure(newDefaults);
              _.assign(this.defaults, newDefaults);
            },
            writable: true,
            configurable: true
          }
        });

        return Toolbar;
      })());
    }
  };
});