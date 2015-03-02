System.register(["aurelia-templating", "./ai-main-attribute"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, directions, oposites, defaults, AiMain;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aiMainAttribute) {
      _export("AiMainAttachedBehavior", _aiMainAttribute.AiMainAttachedBehavior);
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      directions = {
        row: "is-row",
        column: "is-column"
      };
      oposites = {
        column: directions.row,
        row: directions.column
      };
      defaults = {
        direction: "row"
      };
      AiMain = _export("AiMain", (function () {
        function AiMain(element) {
          _classCallCheck(this, AiMain);

          this.element = element;
        }

        _prototypeProperties(AiMain, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-main").withProperty("container", "containerChanged");
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
              this.element.classList.add("ai-main");
            },
            writable: true,
            configurable: true
          },
          containerChanged: {
            value: function containerChanged(hasContainer) {
              this.classList[hasContainer ? "add" : "remove"]("main-container");
            },
            writable: true,
            configurable: true
          }
        });

        return AiMain;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLW1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FJWixVQUFVLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFhbkIsTUFBTTs7O0FBakJYLGNBQVEsc0JBQVIsUUFBUTs7eURBRVIsc0JBQXNCOzs7Ozs7O0FBSTlCLGdCQUFVLEdBQUU7QUFDUixXQUFHLEVBQUssUUFBUTtBQUNoQixjQUFNLEVBQUUsV0FBVztPQUN0QixDQUFBO0FBQ0QsY0FBUSxHQUFHO0FBQ1AsY0FBTSxFQUFFLFVBQVUsQ0FBQyxHQUFHO0FBQ3RCLFdBQUcsRUFBSyxVQUFVLENBQUMsTUFBTTtPQUM1QixDQUFBO0FBQ0QsY0FBUSxHQUFJO0FBQ1IsaUJBQVMsRUFBRSxLQUFLO09BQ25CLENBQUE7QUFDWSxZQUFNO0FBWUosaUJBWkYsTUFBTSxDQVlILE9BQU87Z0NBWlYsTUFBTTs7QUFjWCxjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUUxQjs7NkJBaEJRLE1BQU07QUFFUixrQkFBUTttQkFBQSxvQkFBRTtBQUNiLHFCQUFPLFFBQVEsQ0FDVixhQUFhLENBQUMsU0FBUyxDQUFDLENBQ3hCLFlBQVksQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUMsQ0FBQTthQUNyRDs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFFO0FBQ1gscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUNuQjs7Ozs7QUFRRCxjQUFJO21CQUFBLGdCQUFFO0FBRUYsa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTthQUV4Qzs7OztBQUVELDBCQUFnQjttQkFBQSwwQkFBQyxZQUFZLEVBQUM7QUFFMUIsa0JBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLEtBQUssR0FBRSxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO2FBRW5FOzs7Ozs7ZUE1QlEsTUFBTSIsImZpbGUiOiJhaS1tYWluLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==