System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, _prototypeProperties, _classCallCheck, ButtonsDemo;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ButtonsDemo = _export("ButtonsDemo", (function () {
        function ButtonsDemo() {
          _classCallCheck(this, ButtonsDemo);

          this.heading = "Buttons Demo";

          this.radioOptions = [{ name: "First" }, { name: "Second" }, { name: "Third" }];
        }

        _prototypeProperties(ButtonsDemo, null, {
          activate: {
            value: function activate(params, queryString, config) {
              config.toolbar.reset();
            },
            writable: true,
            configurable: true
          },
          checkboxChanged: {
            value: function checkboxChanged(newVal) {
              alert(newVal ? "Checked" : "Unchecked");
            },
            writable: true,
            configurable: true
          }
        });

        return ButtonsDemo;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbnMtZGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLHlDQUVELFdBQVc7OztBQUZoQixZQUFNLGtCQUFOLE1BQU07Ozs7Ozs7QUFFRCxpQkFBVztBQUVSLGlCQUZILFdBQVc7Z0NBQVgsV0FBVzs7QUFJaEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7O0FBRTlCLGNBQUksQ0FBQyxZQUFZLEdBQUcsQ0FDaEIsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLEVBQ2YsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLEVBQ2hCLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUNsQixDQUFBO1NBRUo7OzZCQVpRLFdBQVc7QUFlcEIsa0JBQVE7bUJBQUEsa0JBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUM7QUFFakMsb0JBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUE7YUFFekI7Ozs7QUFHRCx5QkFBZTttQkFBQyx5QkFBQyxNQUFNLEVBQUU7QUFFckIsbUJBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFBO2FBRTFDOzs7Ozs7ZUExQlEsV0FBVyIsImZpbGUiOiJidXR0b25zLWRlbW8uanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9