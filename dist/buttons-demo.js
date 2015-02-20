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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbnMtZGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLHlDQUVELFdBQVc7OztBQUZoQixZQUFNLGtCQUFOLE1BQU07Ozs7Ozs7QUFFRCxpQkFBVztBQUlSLGlCQUpILFdBQVc7Z0NBQVgsV0FBVzs7Ozs7QUFPaEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7O0FBRTlCLGNBQUksQ0FBQyxZQUFZLEdBQUcsQ0FDaEIsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLEVBQ2YsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLEVBQ2hCLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUNsQixDQUFBO1NBQ0o7OzZCQWRRLFdBQVc7QUFnQnBCLGtCQUFRO21CQUFBLGtCQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFDO0FBQ2pDLG9CQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFBO2FBRXpCOzs7O0FBRUQseUJBQWU7bUJBQUMseUJBQUMsTUFBTSxFQUFFO0FBQ3JCLG1CQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQTthQUMxQzs7Ozs7O2VBdkJRLFdBQVciLCJmaWxlIjoiYnV0dG9ucy1kZW1vLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==