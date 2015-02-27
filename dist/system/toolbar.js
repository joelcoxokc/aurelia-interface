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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUNSLE1BQU0sRUFDTixPQUFPLHlDQUNYLFFBQVEsRUFRQyxPQUFPOzs7QUFYWixjQUFRLHNCQUFSLFFBQVE7O0FBQ1IsWUFBTSxXQUFOLE1BQU07O0FBQ04sYUFBTyxZQUFQLE9BQU87Ozs7Ozs7QUFDWCxjQUFRLEdBQUksRUFBRSxJQUFJLEVBQUcsSUFBSTtBQUNYLGFBQUssRUFBTSxJQUFJO0FBQ2YsZUFBTyxFQUFJLFVBQVU7QUFDckIsaUJBQVMsRUFBRSxhQUFhO0FBQ3hCLGFBQUssRUFBTSxPQUFPO09BQ25CO0FBR0osYUFBTztBQU1MLGlCQU5GLE9BQU8sQ0FNSixNQUFNO2dDQU5ULE9BQU87O0FBT1osY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7QUFDcEIsY0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDekIsV0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQzdCLGlCQUFPLElBQUksQ0FBQTtTQUNkOzs2QkFYUSxPQUFPO0FBRVQsZ0JBQU07bUJBQUEsa0JBQUU7QUFDWCxxQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBQ2xCOzs7OztBQVNELGNBQUk7bUJBQUEsY0FBQyxPQUFPLEVBQUM7QUFDVCxrQkFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO0FBQ1osZUFBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUE7QUFDdkIscUJBQU8sSUFBSSxDQUFBO2FBQ2Q7Ozs7QUFFRCxtQkFBUzttQkFBQSxtQkFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDO0FBRXJCLG1CQUFLLElBQUssSUFBSSxDQUFDLEtBQUssRUFBRSxBQUFFLENBQUE7QUFDeEIsZUFBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUE7QUFDdkIscUJBQU8sSUFBSSxDQUFBO2FBQ2Q7Ozs7QUFFRCxlQUFLO21CQUFBLGVBQUMsT0FBTyxFQUFDO0FBQ1Ysa0JBQUksV0FBVyxHQUFHLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFBO0FBQzFDLGtCQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQzNCLGVBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQTthQUN2Qzs7Ozs7O2VBOUJRLE9BQU8iLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=