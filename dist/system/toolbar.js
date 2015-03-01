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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUNSLGdCQUFnQixFQUNoQixTQUFTLG9EQUViLFFBQVEsRUFRQyxPQUFPOzs7QUFaWixjQUFRLHNCQUFSLFFBQVE7O0FBQ1Isc0JBQWdCLHFCQUFoQixnQkFBZ0I7O0FBQ2hCLGVBQVMsK0JBQVQsU0FBUzs7Ozs7Ozs7O0FBRWIsY0FBUSxHQUFJLEVBQUUsSUFBSSxFQUFHLElBQUk7QUFDWCxhQUFLLEVBQU0sSUFBSTtBQUNmLGVBQU8sRUFBSSxVQUFVO0FBQ3JCLGlCQUFTLEVBQUUsYUFBYTtBQUN4QixhQUFLLEVBQU0sT0FBTztPQUNuQjtBQUdKLGFBQU8saUNBQVMsU0FBUztBQU12QixpQkFORixPQUFPO2dDQUFQLE9BQU87O0FBT1osY0FBSSxDQUFDLFFBQVEsR0FBSSxRQUFRLENBQUM7QUFDMUIsV0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQzdCLGlCQUFPLElBQUksQ0FBQTtTQUNkOztrQkFWUSxPQUFPLEVBQVMsU0FBUzs7NkJBQXpCLE9BQU87QUFFVCxnQkFBTTttQkFBQSxrQkFBRTtBQUNYLHFCQUFPLEVBQUUsQ0FBQTthQUNaOzs7OztBQVFELGNBQUk7bUJBQUEsY0FBQyxPQUFPLEVBQUM7QUFDVCxrQkFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO0FBQ1osZUFBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUE7QUFDdkIscUJBQU8sSUFBSSxDQUFBO2FBQ2Q7Ozs7QUFFRCxtQkFBUzttQkFBQSxtQkFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDO0FBQ3JCLG1CQUFLLElBQUssSUFBSSxDQUFDLEtBQUssRUFBRSxBQUFFLENBQUE7QUFDeEIsZUFBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUE7QUFDdkIscUJBQU8sSUFBSSxDQUFBO2FBQ2Q7Ozs7QUFFRCxlQUFLO21CQUFBLGVBQUMsT0FBTyxFQUFDO0FBQ1Ysa0JBQUksV0FBVyxHQUFHLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFBO0FBQzFDLGtCQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQzNCLGVBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQTthQUN2Qzs7Ozs7O2VBNUJRLE9BQU87U0FBUyxTQUFTIiwiZmlsZSI6InRvb2xiYXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9