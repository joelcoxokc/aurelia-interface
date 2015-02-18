System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, AiCard;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiCard = _export("AiCard", (function () {
        function AiCard(element) {
          _classCallCheck(this, AiCard);

          this.element = element;
        }

        _prototypeProperties(AiCard, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-card").withProperty("type");
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
              this.element.classList.add("ai-card");
            },
            writable: true,
            configurable: true
          }
        });

        return AiCard;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FHSCxNQUFNOzs7QUFIWCxjQUFRLHNCQUFSLFFBQVE7Ozs7Ozs7QUFHSCxZQUFNO0FBY0osaUJBZEYsTUFBTSxDQWNILE9BQU87Z0NBZFYsTUFBTTs7QUFlWCxjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtTQUN6Qjs7NkJBaEJRLE1BQU07QUFFUixrQkFBUTttQkFBQSxvQkFBRTtBQUViLHFCQUFPLFFBQVEsQ0FDVixhQUFhLENBQUMsU0FBUyxDQUFDLENBQ3hCLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUU1Qjs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFFO0FBQ1gscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUNuQjs7Ozs7QUFNRCxjQUFJO21CQUFBLGdCQUFFO0FBQ0Ysa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTthQUN4Qzs7Ozs7O2VBcEJRLE1BQU0iLCJmaWxlIjoiYWktY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=