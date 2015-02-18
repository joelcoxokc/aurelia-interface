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
              this.handler = this[typeof this.value === "function" ? "_toggle" : "toggle"].bind(this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWJ0bi10b2dnbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FFSCwyQkFBMkI7OztBQUZoQyxjQUFRLHNCQUFSLFFBQVE7Ozs7Ozs7QUFFSCxpQ0FBMkI7QUFXMUIsaUJBWEQsMkJBQTJCLENBV3pCLE9BQU87Z0NBWFQsMkJBQTJCOztBQVlwQyxjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtTQUN2Qjs7NkJBYlUsMkJBQTJCO0FBQy9CLGtCQUFRO21CQUFBLG9CQUFFO0FBQ2YscUJBQU8sUUFBUSxDQUNaLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7dUJBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRTtlQUFBLENBQUMsQ0FDMUUsTUFBTSxFQUFFLENBQUE7YUFDWjs7OztBQUVNLGdCQUFNO21CQUFDLGtCQUFHO0FBQ2YscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUNqQjs7Ozs7QUFNRCxjQUFJO21CQUFDLGdCQUFHO0FBQ04sa0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxVQUFVLEdBQUcsU0FBUyxHQUFHLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN2RixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTthQUM1RDs7OztBQUVELGdCQUFNO21CQUFDLGtCQUFHO0FBQ1Isa0JBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUN4RDs7OztBQUVELGdCQUFNO21CQUFDLGtCQUFHO0FBQ1Isa0JBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFBO2FBQ3pCOzs7O0FBRUQsaUJBQU87bUJBQUMsbUJBQUc7QUFDVCxrQkFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7QUFDMUIsa0JBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBQ3hCOzs7Ozs7ZUEvQlUsMkJBQTJCIiwiZmlsZSI6ImFpLWJ0bi10b2dnbGUuanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9