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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUNSLE1BQU0seUNBRVYsUUFBUSxFQVFDLE9BQU87OztBQVhaLGNBQVEsc0JBQVIsUUFBUTs7QUFDUixZQUFNLFdBQU4sTUFBTTs7Ozs7OztBQUVWLGNBQVEsR0FBSSxFQUFFLElBQUksRUFBRyxJQUFJO0FBQ1gsYUFBSyxFQUFNLElBQUk7QUFDZixlQUFPLEVBQUksVUFBVTtBQUNyQixpQkFBUyxFQUFFLGFBQWE7QUFDeEIsYUFBSyxFQUFNLE9BQU87T0FDbkI7QUFHSixhQUFPO0FBTUwsaUJBTkYsT0FBTyxDQU1KLE1BQU07Z0NBTlQsT0FBTzs7QUFPWixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtBQUNwQixjQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6QixXQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDN0IsaUJBQU8sSUFBSSxDQUFBO1NBQ2Q7OzZCQVhRLE9BQU87QUFFVCxnQkFBTTttQkFBQSxrQkFBRTtBQUNYLHFCQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7YUFDbEI7Ozs7O0FBU0QsY0FBSTttQkFBQSxjQUFDLE9BQU8sRUFBQztBQUNULGtCQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7QUFDWixlQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQTtBQUN2QixxQkFBTyxJQUFJLENBQUE7YUFDZDs7OztBQUVELG1CQUFTO21CQUFBLG1CQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUM7QUFFckIsbUJBQUssSUFBSyxJQUFJLENBQUMsS0FBSyxFQUFFLEFBQUUsQ0FBQTtBQUN4QixlQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQTtBQUN2QixxQkFBTyxJQUFJLENBQUE7YUFDZDs7OztBQUVELGVBQUs7bUJBQUEsZUFBQyxPQUFPLEVBQUM7QUFDVixrQkFBSSxXQUFXLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUE7QUFDMUMsa0JBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDM0IsZUFBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFBO2FBQ3ZDOzs7Ozs7ZUE5QlEsT0FBTyIsImZpbGUiOiJ0b29sYmFyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==