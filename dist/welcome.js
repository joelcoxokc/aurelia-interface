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

          this.heading = "Aurelia ui ";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzZDQUFhLE9BQU8sRUFnQlAsbUJBQW1COzs7Ozs7OztBQWhCbkIsYUFBTztBQUNQLGlCQURBLE9BQU87Z0NBQVAsT0FBTzs7QUFFaEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7QUFDN0IsY0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDeEIsY0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7OzZCQUxVLE9BQU87QUFPZCxrQkFBUTtpQkFBQSxZQUFFO0FBQ1osMEJBQVUsSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBUSxDQUFHO2FBQzdDOzs7QUFFRCxpQkFBTzttQkFBQSxtQkFBRSxFQUVSOzs7Ozs7ZUFiVSxPQUFPOztBQWdCUCx5QkFBbUI7aUJBQW5CLG1CQUFtQjtnQ0FBbkIsbUJBQW1COzs7NkJBQW5CLG1CQUFtQjtBQUM5QixnQkFBTTttQkFBQSxnQkFBQyxLQUFLLEVBQUM7QUFDWCxxQkFBTyxLQUFLLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3JDOzs7Ozs7ZUFIVSxtQkFBbUIiLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIvZGlzdC8ifQ==