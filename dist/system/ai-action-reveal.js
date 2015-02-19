System.register(["aurelia-templating", "./ai-element"], function (_export) {
  "use strict";

  var Behavior, AiElement, _prototypeProperties, _inherits, _classCallCheck, defaults, AiActionReveal;
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

      defaults = {
        side: top,
        reveal: false
      };
      AiActionReveal = _export("AiActionReveal", (function (AiElement) {
        function AiActionReveal(element) {
          var _this = this;
          _classCallCheck(this, AiActionReveal);

          this.element = element;
          this.current = defaults;

          _.assign(this, this.current);

          this.handle = function () {
            _this.reveal = !_this.reveal;
          };
        }

        _inherits(AiActionReveal, AiElement);

        _prototypeProperties(AiActionReveal, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-action-reveal").withProperty("reveal", "onReveal").withProperty("side", "sideChanged");
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
              this.addClass("ai-action-reveal", "reveal-" + this.side);
              this.addEvent("mouseenter", this.toggleReveal);
              this.addEvent("mouseout", this.toggleReveal);
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              this.removeEvent("mouseenter", this.toggleReveal);
              this.removeEvent("mouseout", this.toggleReveal);
            },
            writable: true,
            configurable: true
          },
          sideChanged: {
            value: function sideChanged(newSide) {
              this.removeClass("reveal-" + this.current.side);
              this.addClass("reveal-" + newSide);
            },
            writable: true,
            configurable: true
          },
          onReveal: {
            value: function onReveal(value) {
              this[value ? "addClass" : "removeClass"]("reveal");
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

        return AiActionReveal;
      })(AiElement));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWFjdGlvbi1yZXZlYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUNSLFNBQVMsb0RBRWIsUUFBUSxFQUtDLGNBQWM7OztBQVJuQixjQUFRLHNCQUFSLFFBQVE7O0FBQ1IsZUFBUyxjQUFULFNBQVM7Ozs7Ozs7OztBQUViLGNBQVEsR0FBRztBQUNYLFlBQUksRUFBRSxHQUFHO0FBQ1QsY0FBTSxFQUFFLEtBQUs7T0FDaEI7QUFFWSxvQkFBYyx3Q0FBUyxTQUFTO0FBa0I5QixpQkFsQkYsY0FBYyxDQWtCWCxPQUFPOztnQ0FsQlYsY0FBYzs7QUFvQm5CLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0FBQ3RCLGNBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFBOztBQUV2QixXQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7O0FBRTVCLGNBQUksQ0FBQyxNQUFNLEdBQUcsWUFBSTtBQUNkLGtCQUFLLE1BQU0sR0FBRyxDQUFDLE1BQUssTUFBTSxDQUFBO1dBQzdCLENBQUE7U0FDSjs7a0JBNUJRLGNBQWMsRUFBUyxTQUFTOzs2QkFBaEMsY0FBYztBQUVoQixrQkFBUTttQkFBQSxvQkFBRTtBQUViLHFCQUFPLFFBQVEsQ0FDVixhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FDakMsWUFBWSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FDbEMsWUFBWSxDQUFDLE1BQU0sRUFBSSxhQUFhLENBQUMsQ0FBQTthQUU3Qzs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFFO0FBRVgscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUVuQjs7Ozs7QUFnQkQsY0FBSTttQkFBQSxnQkFBRTtBQUVGLGtCQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixjQUFZLElBQUksQ0FBQyxJQUFJLENBQUcsQ0FBQTtBQUN4RCxrQkFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBQzlDLGtCQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7YUFDakQ7Ozs7QUFHRCxnQkFBTTttQkFBQSxrQkFBRTtBQUVKLGtCQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDakQsa0JBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTthQUVwRDs7OztBQUdELHFCQUFXO21CQUFBLHFCQUFDLE9BQU8sRUFBQztBQUVoQixrQkFBSSxDQUFDLFdBQVcsYUFBVyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRyxDQUFBO0FBQy9DLGtCQUFJLENBQUMsUUFBUSxhQUFXLE9BQU8sQ0FBRyxDQUFBO2FBRXJDOzs7O0FBR0Qsa0JBQVE7bUJBQUEsa0JBQUMsS0FBSyxFQUFDO0FBRVgsa0JBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxHQUFHLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBRXJEOzs7O0FBR0Qsc0JBQVk7bUJBQUEsc0JBQUMsS0FBSyxFQUFDO0FBQ2YsbUJBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUN2QixrQkFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7YUFDN0I7Ozs7OztlQWpFUSxjQUFjO1NBQVMsU0FBUyIsImZpbGUiOiJhaS1hY3Rpb24tcmV2ZWFsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==