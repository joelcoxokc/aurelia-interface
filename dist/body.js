System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, MzBody;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      MzBody = _export("MzBody", (function () {
        function MzBody(element) {
          _classCallCheck(this, MzBody);

          console.log(element);
          this.element = element;
        }

        _prototypeProperties(MzBody, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ui-body");
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

        return MzBody;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FFSCxNQUFNOzs7QUFGWCxjQUFRLHNCQUFSLFFBQVE7Ozs7Ozs7QUFFSCxZQUFNO0FBV04saUJBWEEsTUFBTSxDQVdMLE9BQU87Z0NBWFIsTUFBTTs7QUFZZixpQkFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUNwQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtTQUN2Qjs7NkJBZFUsTUFBTTtBQUNWLGtCQUFRO21CQUFBLG9CQUFHO0FBQ2hCLHFCQUFPLFFBQVEsQ0FDWixhQUFhLENBQUMsU0FBUyxDQUFDLENBQUE7YUFJNUI7Ozs7QUFDTSxnQkFBTTttQkFBQSxrQkFBRztBQUNkLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbEI7Ozs7OztlQVZVLE1BQU0iLCJmaWxlIjoiYm9keS5qcyIsInNvdXJjZVJvb3QiOiIvZGlzdC8ifQ==