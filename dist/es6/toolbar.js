System.register(["aurelia-templating", "./notify", "./toggler"], function (_export) {
  "use strict";

  var Behavior, Notify, Toggler, _prototypeProperties, _classCallCheck, defaults, Toolbar;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_notify) {
      Notify = _notify.Notify;
    }, function (_toggler) {
      Toggler = _toggler.Toggler;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = { size: "sm",
        fixed: true,
        bgColor: "bg-white",
        textColor: "text-purple",
        brand: "brand"
      };
      Toolbar = _export("Toolbar", (function () {
        function Toolbar(notify) {
          _classCallCheck(this, Toolbar);

          this.notify = notify;
          this.defaults = defaults;
          _.assign(this, this.defaults);
          return this;
        }

        _prototypeProperties(Toolbar, {
          inject: {
            value: function inject() {
              return [Notify];
            },
            writable: true,
            configurable: true
          }
        }, {
          init: {
            value: function init(options) {
              this.reset();
              _.assign(this, options);
              return this;
            },
            writable: true,
            configurable: true
          },
          configure: {
            value: function configure(options, reset) {
              reset && this.reset();
              _.assign(this, options);
              return this;
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