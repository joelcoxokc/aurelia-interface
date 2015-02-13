System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, LayoutPrimary;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      LayoutPrimary = _export("LayoutPrimary", (function () {
        function LayoutPrimary(element) {
          _classCallCheck(this, LayoutPrimary);

          this.element = element;
        }

        _prototypeProperties(LayoutPrimary, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("layout-primary").withProperty("router");
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
        });

        return LayoutPrimary;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC1wcmltYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEseUNBR0gsYUFBYTs7O0FBSGxCLGNBQVEsc0JBQVIsUUFBUTs7Ozs7OztBQUdILG1CQUFhO0FBa0JYLGlCQWxCRixhQUFhLENBa0JWLE9BQU87Z0NBbEJWLGFBQWE7O0FBb0JsQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtTQUV6Qjs7NkJBdEJRLGFBQWE7QUFFZixrQkFBUTttQkFBQSxvQkFBRTtBQUViLHFCQUFPLFFBQVEsQ0FDVixhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FDL0IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBRTlCOzs7O0FBR00sZ0JBQU07bUJBQUEsa0JBQUU7QUFFWCxxQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBRW5COzs7Ozs7ZUFmUSxhQUFhIiwiZmlsZSI6ImxheW91dC1wcmltYXJ5LmpzIiwic291cmNlUm9vdCI6Ii9kaXN0LyJ9