System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, AiBtnRadioAttachedBehavior;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiBtnRadioAttachedBehavior = _export("AiBtnRadioAttachedBehavior", (function () {
        function AiBtnRadioAttachedBehavior(element) {
          _classCallCheck(this, AiBtnRadioAttachedBehavior);

          this.element = element;
        }

        _prototypeProperties(AiBtnRadioAttachedBehavior, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("value", null, "ai-btn-radio").and(function (x) {
                return x.bindingIsTwoWay();
              }).syncChildren("options", "optionsChanged", "[ai-btn-radio-option]").noView();
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
              this.optionsChanged();
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              var _this = this;
              this.handler = this.selectItem.bind(this);
              this.options.forEach(function (option) {
                option.removeEventListener("click", _this.handler);
              });
            },
            writable: true,
            configurable: true
          },
          optionsChanged: {
            value: function optionsChanged() {
              var _this = this;
              this.unbind();
              this.options.forEach(function (option) {
                option.addEventListener("click", _this.handler, false);
              });
            },
            writable: true,
            configurable: true
          },
          selectItem: {
            value: function selectItem($event) {
              this.value = $event.target.value;
            },
            writable: true,
            configurable: true
          }
        });

        return AiBtnRadioAttachedBehavior;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWJ0bi1yYWRpby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLHlDQUVILDBCQUEwQjs7O0FBRi9CLGNBQVEsc0JBQVIsUUFBUTs7Ozs7OztBQUVILGdDQUEwQjtBQVl6QixpQkFaRCwwQkFBMEIsQ0FZeEIsT0FBTztnQ0FaVCwwQkFBMEI7O0FBYW5DLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1NBQ3ZCOzs2QkFkVSwwQkFBMEI7QUFDOUIsa0JBQVE7bUJBQUEsb0JBQUU7QUFDZixxQkFBTyxRQUFRLENBQ1osWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxDQUFDLENBQUMsZUFBZSxFQUFFO2VBQUEsQ0FBQyxDQUN6RSxZQUFZLENBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFFLHVCQUF1QixDQUFDLENBQ2xFLE1BQU0sRUFBRSxDQUFBO2FBQ1o7Ozs7QUFFTSxnQkFBTTttQkFBQyxrQkFBRztBQUNmLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDakI7Ozs7O0FBTUQsY0FBSTttQkFBQyxnQkFBRztBQUNOLGtCQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7YUFDdEI7Ozs7QUFFRCxnQkFBTTttQkFBQyxrQkFBRzs7QUFDUixrQkFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN6QyxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDN0Isc0JBQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsTUFBSyxPQUFPLENBQUMsQ0FBQTtlQUNsRCxDQUFDLENBQUE7YUFDSDs7OztBQUVELHdCQUFjO21CQUFDLDBCQUFHOztBQUNoQixrQkFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBQ2Isa0JBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQzdCLHNCQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQUssT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO2VBQ3RELENBQUMsQ0FBQTthQUNIOzs7O0FBRUQsb0JBQVU7bUJBQUMsb0JBQUMsTUFBTSxFQUFFO0FBQ2xCLGtCQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO2FBQ2pDOzs7Ozs7ZUFwQ1UsMEJBQTBCIiwiZmlsZSI6ImFpLWJ0bi1yYWRpby5qcyIsInNvdXJjZVJvb3QiOiIvZGlzdC8ifQ==