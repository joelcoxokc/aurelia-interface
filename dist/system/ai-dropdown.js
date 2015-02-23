System.register(["aurelia-templating", "./ai-element"], function (_export) {
  "use strict";

  var Behavior, AiElement, _prototypeProperties, _inherits, _classCallCheck, AiDropdown;
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

      AiDropdown = _export("AiDropdown", (function (AiElement) {
        function AiDropdown(element) {
          _classCallCheck(this, AiDropdown);

          var _this = this;
          this.element = element;
          this.isOpen = false;

          this.addClass("ai-dropdown", "dropdown-" + this.side);

          this.toggle = function () {
            _this.isOpen = !_this.isOpen;
          };
        }

        _inherits(AiDropdown, AiElement);

        _prototypeProperties(AiDropdown, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-dropdown").withProperty("isOpen", "isOpenChanged").withProperty("side", "sideChanged").withProperty("dropdownBtn");
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
              this.container = this.element.querySelector(".dropdown-container");
              this.btnContainer = this.element.querySelector(".dropdown-btn-container");
              this.items = this.container.getElementsByClassName("ai-item");
              this.links = this.container.getElementsByClassName("ai-link");
              this.btn = this.container.querySelector("ai-btn.dropdown-btn");
              this.element.addEventListener("click", this.toggle, false);
              console.log(this.btn);
              console.log(this.btnContainer);
              this.btnContainer.appendChild(this.btn);
            },
            writable: true,
            configurable: true
          },
          attached: {
            value: function attached() {},
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
          findWidth: {
            value: function findWidth(elements) {
              return elements.length * 48 + "px";
            },
            writable: true,
            configurable: true
          },
          isOpenChanged: {
            value: function isOpenChanged(newValue) {
              console.log(this.container);
              this.element.classList[newValue ? "add" : "remove"]("dropdown-open");
              this.container.style.height = newValue ? this.findWidth(this.links) : "0px";
            },
            writable: true,
            configurable: true
          }
        });

        return AiDropdown;
      })(AiElement));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWRyb3Bkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEsRUFDUixTQUFTLG9EQUdKLFVBQVU7OztBQUpmLGNBQVEsc0JBQVIsUUFBUTs7QUFDUixlQUFTLGNBQVQsU0FBUzs7Ozs7Ozs7O0FBR0osZ0JBQVUsb0NBQVMsU0FBUztBQW1CMUIsaUJBbkJGLFVBQVUsQ0FtQlAsT0FBTztnQ0FuQlYsVUFBVTs7QUFxQmYsY0FBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0FBQ3RCLGNBQUksQ0FBQyxNQUFNLEdBQU0sS0FBSyxDQUFBOztBQUV0QixjQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsZ0JBQWMsSUFBSSxDQUFDLElBQUksQ0FBRyxDQUFBOztBQUVyRCxjQUFJLENBQUMsTUFBTSxHQUFHLFlBQVU7QUFFcEIsaUJBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1dBRWhDLENBQUE7U0FFSjs7a0JBakNRLFVBQVUsRUFBUyxTQUFTOzs2QkFBNUIsVUFBVTtBQUVaLGtCQUFRO21CQUFBLG9CQUFFO0FBRWIscUJBQU8sUUFBUSxDQUNWLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FDNUIsWUFBWSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FDdkMsWUFBWSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FDbkMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFBO2FBQ25DOzs7O0FBR00sZ0JBQU07bUJBQUEsa0JBQUU7QUFFWCxxQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBRW5COzs7OztBQW9CRCxjQUFJO21CQUFBLGdCQUFJO0FBRUosa0JBQUksQ0FBQyxTQUFTLEdBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQTtBQUNyRSxrQkFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQ3pFLGtCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUE7QUFDN0Qsa0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUM3RCxrQkFBSSxDQUFDLEdBQUcsR0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0FBQ2hFLGtCQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBSyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzlELHFCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUNyQixxQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDOUIsa0JBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUMxQzs7OztBQUVELGtCQUFRO21CQUFBLG9CQUFFLEVBRVQ7Ozs7QUFFRCxnQkFBTTttQkFBQSxrQkFBRTtBQUVKLGtCQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBRWpFOzs7O0FBRUQsbUJBQVM7bUJBQUEsbUJBQUMsUUFBUSxFQUFDO0FBRWYscUJBQU8sQUFBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBSSxJQUFJLENBQUM7YUFDeEM7Ozs7QUFFRCx1QkFBYTttQkFBQSx1QkFBQyxRQUFRLEVBQUM7QUFDbkIscUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQzNCLGtCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ25FLGtCQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQTthQUM5RTs7Ozs7O2VBcEVRLFVBQVU7U0FBUyxTQUFTIiwiZmlsZSI6ImFpLWRyb3Bkb3duLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==