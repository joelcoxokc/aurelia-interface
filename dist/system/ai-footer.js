System.register(["aurelia-templating", "./ai-footer-attribute"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, AiFooter;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aiFooterAttribute) {
      _export("AiFooterAttachedBehavior", _aiFooterAttribute.AiFooterAttachedBehavior);
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiFooter = _export("AiFooter", (function () {
        function AiFooter(element) {
          _classCallCheck(this, AiFooter);

          this.element = element;
        }

        _prototypeProperties(AiFooter, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-footer");
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
              this.element.classList.add("ai-footer");
            },
            writable: true,
            configurable: true
          }
        });

        return AiFooter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLHlDQUlILFFBQVE7OztBQUpiLGNBQVEsc0JBQVIsUUFBUTs7NkRBRVIsd0JBQXdCOzs7Ozs7O0FBRW5CLGNBQVE7QUFZTixpQkFaRixRQUFRLENBWUwsT0FBTztnQ0FaVixRQUFROztBQWNiLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1NBRXpCOzs2QkFoQlEsUUFBUTtBQUVWLGtCQUFRO21CQUFBLG9CQUFFO0FBQ2IscUJBQU8sUUFBUSxDQUNWLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQTthQUVsQzs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFFO0FBQ1gscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUNuQjs7Ozs7QUFRRCxjQUFJO21CQUFBLGdCQUFHO0FBQ0gsa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTthQUMxQzs7Ozs7O2VBcEJRLFFBQVEiLCJmaWxlIjoiYWktZm9vdGVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==