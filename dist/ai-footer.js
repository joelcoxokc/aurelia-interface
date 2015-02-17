System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, AiFooter;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
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
              return Behavior.customElement("ai-footer").withProperty("direction");
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
          attahced: {
            value: function attahced() {
              this.element.classList.add("ai-footer");
            },
            writable: true,
            configurable: true
          },
          directionChanged: {
            value: function directionChanged(value) {
              this.element.classList.add("is-" + value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLHlDQUdILFFBQVE7OztBQUhiLGNBQVEsc0JBQVIsUUFBUTs7Ozs7OztBQUdILGNBQVE7QUFrQk4saUJBbEJGLFFBQVEsQ0FrQkwsT0FBTztnQ0FsQlYsUUFBUTs7QUFvQmIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7U0FFekI7OzZCQXRCUSxRQUFRO0FBRVYsa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxRQUFRLENBQ1YsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUMxQixZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7YUFFakM7Ozs7QUFHTSxnQkFBTTttQkFBQSxrQkFBRTtBQUVYLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7YUFFbkI7Ozs7O0FBU0Qsa0JBQVE7bUJBQUEsb0JBQUU7QUFFUixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBRXpDOzs7O0FBR0QsMEJBQWdCO21CQUFBLDBCQUFDLEtBQUssRUFBQztBQUVuQixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBQyxLQUFLLENBQUMsQ0FBQTthQUUxQzs7Ozs7O2VBbkNRLFFBQVEiLCJmaWxlIjoiYWktZm9vdGVyLmpzIiwic291cmNlUm9vdCI6Ii9kaXN0LyJ9