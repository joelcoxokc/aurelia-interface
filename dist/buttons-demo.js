System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, ButtonsDemo;
  return {
    setters: [],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbnMtZGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQWEsV0FBVzs7Ozs7Ozs7QUFBWCxpQkFBVztBQUVWLGlCQUZELFdBQVc7Z0NBQVgsV0FBVzs7QUFHcEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7O0FBRTlCLGNBQUksQ0FBQyxZQUFZLEdBQUcsQ0FDbEIsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLEVBQ2YsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLEVBQ2hCLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUNoQixDQUFBO1NBQ0Y7OzZCQVZVLFdBQVc7QUFZdEIseUJBQWU7bUJBQUMseUJBQUMsTUFBTSxFQUFFO0FBQ3ZCLG1CQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQTthQUN4Qzs7Ozs7O2VBZFUsV0FBVyIsImZpbGUiOiJidXR0b25zLWRlbW8uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==