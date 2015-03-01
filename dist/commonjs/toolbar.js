System.register(["aurelia-templating", "./activator-service", "aurelia-dependency-injection"], function (_export) {
  "use strict";

  var Behavior, ActivatorService, Singleton, _prototypeProperties, _inherits, _classCallCheck, defaults, Toolbar;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_activatorService) {
      ActivatorService = _activatorService.ActivatorService;
    }, function (_aureliaDependencyInjection) {
      Singleton = _aureliaDependencyInjection.Singleton;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = { size: "sm",
        fixed: true,
        bgColor: "bg-white",
        textColor: "text-purple",
        brand: "brand"
      };
      Toolbar = _export("Toolbar", (function (Singleton) {
        function Toolbar() {
          _classCallCheck(this, Toolbar);

          this.defaults = defaults;
          _.assign(this, this.defaults);
          return this;
        }

        _inherits(Toolbar, Singleton);

        _prototypeProperties(Toolbar, {
          inject: {
            value: function inject() {
              return [];
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
      })(Singleton));
    }
  };
});