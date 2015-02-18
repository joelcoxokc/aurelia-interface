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
              this.bindToggle();
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              this.unbindToggle();
              this.unbindDoc();
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
          },
          escapeKey: {
            value: function escapeKey(event) {
              var _this = this;


              return function (event) {
                event.preventDefault();

                if (event.which === 27) {
                  _this.close();
                }
              };
            },
            writable: true,
            configurable: true
          },
          bindToggle: {
            value: function bindToggle() {
              this.element.addEventListener("click", this.toggle, false);
            },
            writable: true,
            configurable: true
          },
          unbindToggle: {
            value: function unbindToggle() {
              this.element.removeEventListener("click", this.toggle, false);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWRyb3Bkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEseUNBR0gsVUFBVTs7O0FBSGYsY0FBUSxzQkFBUixRQUFROzs7Ozs7O0FBR0gsZ0JBQVU7QUFpQlIsaUJBakJGLFVBQVUsQ0FpQlAsT0FBTztnQ0FqQlYsVUFBVTs7QUFrQmYsY0FBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0FBQ3RCLGNBQUksQ0FBQyxNQUFNLEdBQU0sS0FBSyxDQUFBOztBQUV0QixjQUFJLENBQUMsTUFBTSxHQUFHLFlBQVU7QUFDcEIsaUJBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1dBQ2hDLENBQUE7U0FDSjs7NkJBekJRLFVBQVU7QUFFWixrQkFBUTttQkFBQSxvQkFBRTtBQUViLHFCQUFPLFFBQVEsQ0FDVixhQUFhLENBQUMsYUFBYSxDQUFDLENBQzVCLFlBQVksQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQ3ZDLFlBQVksQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUE7YUFFM0M7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRTtBQUVYLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7YUFFbkI7Ozs7O0FBYUQsY0FBSTttQkFBQSxnQkFBRTtBQUNGLGtCQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7YUFDcEI7Ozs7QUFFRCxnQkFBTTttQkFBQSxrQkFBRTtBQUNKLGtCQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7QUFDbkIsa0JBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTthQUNuQjs7OztBQUdELHVCQUFhO21CQUFBLHVCQUFDLFFBQVEsRUFBQztBQUNuQixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUN0RTs7OztBQUNELG1CQUFTO21CQUFBLG1CQUFDLEtBQUssRUFBQzs7OztBQUVaLHFCQUFPLFVBQUMsS0FBSyxFQUFHO0FBRVoscUJBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQTs7QUFFdEIsb0JBQUcsS0FBSyxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUM7QUFDbEIsd0JBQUssS0FBSyxFQUFFLENBQUM7aUJBQ2hCO2VBQ0osQ0FBQTthQUVKOzs7O0FBUUQsb0JBQVU7bUJBQUEsc0JBQUU7QUFDUixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUM5RDs7OztBQUNELHNCQUFZO21CQUFBLHdCQUFFO0FBQ1Ysa0JBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDakU7Ozs7OztlQWpFUSxVQUFVIiwiZmlsZSI6ImFpLWRyb3Bkb3duLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==