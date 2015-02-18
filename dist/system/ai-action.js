System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, AiAction;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiAction = _export("AiAction", (function () {
        function AiAction(element) {
          _classCallCheck(this, AiAction);

          this.element = element;
        }

        _prototypeProperties(AiAction, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-action").withProperty("type").withProperty("shape").noView();
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              service;
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              this.element.classList.add("ai-action", "action-" + this.type, "action-" + this.shape);
            },
            writable: true,
            configurable: true
          }
        });

        return AiAction;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWFjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLHlDQUdILFFBQVE7OztBQUhiLGNBQVEsc0JBQVIsUUFBUTs7Ozs7OztBQUdILGNBQVE7QUFrQk4saUJBbEJGLFFBQVEsQ0FrQkwsT0FBTztnQ0FsQlYsUUFBUTs7QUFvQmIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7U0FFekI7OzZCQXRCUSxRQUFRO0FBRVYsa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxRQUFRLENBQ1YsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUMxQixZQUFZLENBQUMsTUFBTSxDQUFDLENBQ3BCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FDckIsTUFBTSxFQUFFLENBQUE7YUFFaEI7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRTtBQUNuQixxQkFBTyxDQUFBO0FBQ0MscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUVuQjs7Ozs7QUFTRCxjQUFJO21CQUFBLGdCQUFFO0FBRUYsa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLGNBQVksSUFBSSxDQUFDLElBQUksY0FBYyxJQUFJLENBQUMsS0FBSyxDQUFHLENBQUE7YUFFekY7Ozs7OztlQTdCUSxRQUFRIiwiZmlsZSI6ImFpLWFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=