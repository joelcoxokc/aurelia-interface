System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, Welcome, UpperValueConverter;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Welcome = _export("Welcome", (function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.heading = "Aurelia Interface ";
          this.firstName = "John";
          this.lastName = "Doe";
        }

        _prototypeProperties(Welcome, null, {
          fullName: {
            get: function () {
              return "" + this.firstName + " " + this.lastName;
            },
            configurable: true
          },
          welcome: {
            value: function welcome() {},
            writable: true,
            configurable: true
          }
        });

        return Welcome;
      })());
      UpperValueConverter = _export("UpperValueConverter", (function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        _prototypeProperties(UpperValueConverter, null, {
          toView: {
            value: function toView(value) {
              return value && value.toUpperCase();
            },
            writable: true,
            configurable: true
          }
        });

        return UpperValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzZDQUFhLE9BQU8sRUFrQlAsbUJBQW1COzs7Ozs7OztBQWxCbkIsYUFBTztBQUNQLGlCQURBLE9BQU87Z0NBQVAsT0FBTzs7QUFFaEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztBQUNwQyxjQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUN4QixjQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUV2Qjs7NkJBTlUsT0FBTztBQVFkLGtCQUFRO2lCQUFBLFlBQUU7QUFDWiwwQkFBVSxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFRLENBQUc7YUFDN0M7OztBQUdELGlCQUFPO21CQUFBLG1CQUFFLEVBRVI7Ozs7OztlQWZVLE9BQU87O0FBa0JQLHlCQUFtQjtpQkFBbkIsbUJBQW1CO2dDQUFuQixtQkFBbUI7Ozs2QkFBbkIsbUJBQW1CO0FBQzlCLGdCQUFNO21CQUFBLGdCQUFDLEtBQUssRUFBQztBQUNYLHFCQUFPLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDckM7Ozs7OztlQUhVLG1CQUFtQiIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==