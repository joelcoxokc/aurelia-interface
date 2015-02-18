System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, AiDropdown;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiDropdown = _export("AiDropdown", (function () {
        function AiDropdown(element) {
          _classCallCheck(this, AiDropdown);

          var _this = this;
          this.element = element;
          this.isOpen = false;

          this.toggle = function () {
            _this.isOpen = !_this.isOpen;
          };
        }

        _prototypeProperties(AiDropdown, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-dropdown").withProperty("isOpen", "isOpenChanged").withProperty("side", "sideChanged");
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
              this.element.addEventListener("click", this.toggle, false);
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              this.element.removeEventListener("click", this.toggle, false);
            },
            writable: true,
            configurable: true
          },
          isOpenChanged: {
            value: function isOpenChanged(newValue) {
              this.element.classList[newValue ? "add" : "remove"]("dropdown-open");
            },
            writable: true,
            configurable: true
          }
        });

        return AiDropdown;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWRyb3Bkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEseUNBR0gsVUFBVTs7O0FBSGYsY0FBUSxzQkFBUixRQUFROzs7Ozs7O0FBR0gsZ0JBQVU7QUFtQlIsaUJBbkJGLFVBQVUsQ0FtQlAsT0FBTztnQ0FuQlYsVUFBVTs7QUFxQmYsY0FBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0FBQ3RCLGNBQUksQ0FBQyxNQUFNLEdBQU0sS0FBSyxDQUFBOztBQUV0QixjQUFJLENBQUMsTUFBTSxHQUFHLFlBQVU7QUFFcEIsaUJBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1dBRWhDLENBQUE7U0FFSjs7NkJBL0JRLFVBQVU7QUFFWixrQkFBUTttQkFBQSxvQkFBRTtBQUViLHFCQUFPLFFBQVEsQ0FDVixhQUFhLENBQUMsYUFBYSxDQUFDLENBQzVCLFlBQVksQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQ3ZDLFlBQVksQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUE7YUFFM0M7Ozs7QUFHTSxnQkFBTTttQkFBQSxrQkFBRTtBQUVYLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7YUFFbkI7Ozs7O0FBa0JELGNBQUk7bUJBQUEsZ0JBQUk7QUFFSixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUssSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUVqRTs7OztBQUdELGdCQUFNO21CQUFBLGtCQUFFO0FBRUosa0JBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFFakU7Ozs7QUFHRCx1QkFBYTttQkFBQSx1QkFBQyxRQUFRLEVBQUM7QUFFbkIsa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7YUFFdEU7Ozs7OztlQXBEUSxVQUFVIiwiZmlsZSI6ImFpLWRyb3Bkb3duLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==