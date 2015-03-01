System.register(["aurelia-templating", "./ai-element"], function (_export) {
  "use strict";

  var Behavior, AiElement, _prototypeProperties, _inherits, _classCallCheck, AiAction;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aiElement) {
      AiElement = _aiElement.AiElement;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiAction = _export("AiAction", (function (AiElement) {
        function AiAction(element) {
          var _this = this;
          _classCallCheck(this, AiAction);

          this.element = element;


          this.handle = function () {
            _this.reveal = !_this.reveal;
          };
        }

        _inherits(AiAction, AiElement);

        _prototypeProperties(AiAction, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-action").withProperty("type").withProperty("shape").withProperty("reveal", "onReveal");
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
              this.addClass("ai-action");
              this.addEvent("mouseenter", this.toggleReveal);
              this.addEvent("mouseout", this.toggleReveal);
            },
            writable: true,
            configurable: true
          },
          onReveal: {
            value: function onReveal(value) {
              console.log("revealed", value);
            },
            writable: true,
            configurable: true
          },
          toggleReveal: {
            value: function toggleReveal(event) {
              event.preventDefault();
              this.reveal = !this.reveal;
            },
            writable: true,
            configurable: true
          }
        });

        return AiAction;
      })(AiElement));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWFjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQ1IsU0FBUyxvREFJSixRQUFROzs7QUFMYixjQUFRLHNCQUFSLFFBQVE7O0FBQ1IsZUFBUyxjQUFULFNBQVM7Ozs7Ozs7OztBQUlKLGNBQVEsa0NBQVMsU0FBUztBQW1CeEIsaUJBbkJGLFFBQVEsQ0FtQkwsT0FBTzs7Z0NBbkJWLFFBQVE7O0FBcUJiLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBOzs7QUFHdEIsY0FBSSxDQUFDLE1BQU0sR0FBRyxZQUFJO0FBQ2Qsa0JBQUssTUFBTSxHQUFHLENBQUMsTUFBSyxNQUFNLENBQUE7V0FDN0IsQ0FBQTtTQUNKOztrQkEzQlEsUUFBUSxFQUFTLFNBQVM7OzZCQUExQixRQUFRO0FBRVYsa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxRQUFRLENBQ1YsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUMxQixZQUFZLENBQUMsTUFBTSxDQUFDLENBQ3BCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FDckIsWUFBWSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQTthQUUxQzs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFFO0FBRVgscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUVuQjs7Ozs7QUFjRCxjQUFJO21CQUFBLGdCQUFFO0FBRUYsa0JBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDMUIsa0JBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUM5QyxrQkFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO2FBRWpEOzs7O0FBRUQsa0JBQVE7bUJBQUEsa0JBQUMsS0FBSyxFQUFDO0FBQ1gscUJBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFBO2FBQ2pDOzs7O0FBRUQsc0JBQVk7bUJBQUEsc0JBQUMsS0FBSyxFQUFDO0FBQ2YsbUJBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUN2QixrQkFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7YUFDN0I7Ozs7OztlQTdDUSxRQUFRO1NBQVMsU0FBUyIsImZpbGUiOiJhaS1hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9