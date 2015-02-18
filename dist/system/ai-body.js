System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, directions, oposites, defaults, AiBody;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
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
      AiBody = _export("AiBody", (function () {
        function AiBody(element) {
          _classCallCheck(this, AiBody);

          this.element = element;
        }

        _prototypeProperties(AiBody, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-body").withProperty("direction", "directionChanged");
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
              this.element.classList.add("ai-body");
            },
            writable: true,
            configurable: true
          },
          directionChanged: {
            value: function directionChanged(newDirection) {
              newDirection = newDirection || defaults.direction;
              this.classList.remove(directions[newDirection]);
              this.classList.add(oposites[newDirection]);
            },
            writable: true,
            configurable: true
          }
        });

        return AiBody;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWJvZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FFWixVQUFVLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFhbkIsTUFBTTs7O0FBZlgsY0FBUSxzQkFBUixRQUFROzs7Ozs7O0FBSWhCLGdCQUFVLEdBQUU7QUFDUixXQUFHLEVBQUssUUFBUTtBQUNoQixjQUFNLEVBQUUsV0FBVztPQUN0QixDQUFBO0FBQ0QsY0FBUSxHQUFHO0FBQ1AsY0FBTSxFQUFFLFVBQVUsQ0FBQyxHQUFHO0FBQ3RCLFdBQUcsRUFBSyxVQUFVLENBQUMsTUFBTTtPQUM1QixDQUFBO0FBQ0QsY0FBUSxHQUFJO0FBQ1IsaUJBQVMsRUFBRSxLQUFLO09BQ25CLENBQUE7QUFDWSxZQUFNO0FBWUosaUJBWkYsTUFBTSxDQVlILE9BQU87Z0NBWlYsTUFBTTs7QUFhWCxjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUUxQjs7NkJBZlEsTUFBTTtBQUVSLGtCQUFRO21CQUFBLG9CQUFFO0FBQ2IscUJBQU8sUUFBUSxDQUNWLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FDeEIsWUFBWSxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFBO2FBQ3JEOzs7O0FBRU0sZ0JBQU07bUJBQUEsa0JBQUU7QUFDWCxxQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBQ25COzs7OztBQU9ELGNBQUk7bUJBQUEsZ0JBQUU7QUFFRixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO2FBRXhDOzs7O0FBRUQsMEJBQWdCO21CQUFBLDBCQUFDLFlBQVksRUFBQztBQUMxQiwwQkFBWSxHQUFHLFlBQVksSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDO0FBQ2xELGtCQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtBQUMvQyxrQkFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7YUFDN0M7Ozs7OztlQTNCUSxNQUFNIiwiZmlsZSI6ImFpLWJvZHkuanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9