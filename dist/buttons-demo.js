System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, ButtonsDemo;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ButtonsDemo = _export("ButtonsDemo", (function () {
        function ButtonsDemo(http) {
          _classCallCheck(this, ButtonsDemo);

          this.heading = "Buttons Demo";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbnMtZGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQWEsV0FBVzs7Ozs7Ozs7QUFBWCxpQkFBVztBQUNWLGlCQURELFdBQVcsQ0FDVCxJQUFJO2dDQUROLFdBQVc7O0FBRXBCLGNBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO1NBQy9COzs2QkFIVSxXQUFXO0FBS3RCLHlCQUFlO21CQUFDLHlCQUFDLE1BQU0sRUFBRTtBQUN2QixtQkFBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUE7YUFDeEM7Ozs7OztlQVBVLFdBQVciLCJmaWxlIjoiYnV0dG9ucy1kZW1vLmpzIiwic291cmNlUm9vdCI6Ii9kaXN0LyJ9