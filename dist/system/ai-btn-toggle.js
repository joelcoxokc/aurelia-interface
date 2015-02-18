System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, AiBtnToggleAttachedBehavior;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiBtnToggleAttachedBehavior = _export("AiBtnToggleAttachedBehavior", (function () {
        function AiBtnToggleAttachedBehavior(element) {
          _classCallCheck(this, AiBtnToggleAttachedBehavior);

          this.element = element;
        }

        _prototypeProperties(AiBtnToggleAttachedBehavior, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("value", null, "ai-btn-toggle").and(function (x) {
                return x.bindingIsTwoWay();
              }).noView();
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              this.element.addEventListener("click", this.handler, false);
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              this.element.removeEventListener("click", this.handler);
            },
            writable: true,
            configurable: true
          },
          toggle: {
            value: function toggle() {
              this.value = !this.value;
            },
            writable: true,
            configurable: true
          },
          _toggle: {
            value: function _toggle() {
              this._value = !this._value;
              this.value(this._value);
            },
            writable: true,
            configurable: true
          }
        });

        return AiBtnToggleAttachedBehavior;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWJ0bi10b2dnbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FFSCwyQkFBMkI7OztBQUZoQyxjQUFRLHNCQUFSLFFBQVE7Ozs7Ozs7QUFFSCxpQ0FBMkI7QUFXMUIsaUJBWEQsMkJBQTJCLENBV3pCLE9BQU87Z0NBWFQsMkJBQTJCOztBQVlwQyxjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtTQUN2Qjs7NkJBYlUsMkJBQTJCO0FBQy9CLGtCQUFRO21CQUFBLG9CQUFFO0FBQ2YscUJBQU8sUUFBUSxDQUNaLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7dUJBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRTtlQUFBLENBQUMsQ0FDMUUsTUFBTSxFQUFFLENBQUE7YUFDWjs7OztBQUVNLGdCQUFNO21CQUFDLGtCQUFHO0FBQ2YscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUNqQjs7Ozs7QUFNRCxjQUFJO21CQUFDLGdCQUFHO0FBR04sa0JBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7YUFDNUQ7Ozs7QUFFRCxnQkFBTTttQkFBQyxrQkFBRztBQUNSLGtCQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDeEQ7Ozs7QUFFRCxnQkFBTTttQkFBQyxrQkFBRztBQUNSLGtCQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQTthQUN6Qjs7OztBQUVELGlCQUFPO21CQUFDLG1CQUFHO0FBQ1Qsa0JBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO0FBQzFCLGtCQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUN4Qjs7Ozs7O2VBaENVLDJCQUEyQiIsImZpbGUiOiJhaS1idG4tdG9nZ2xlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==