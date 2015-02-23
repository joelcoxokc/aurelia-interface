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
              this.items = this.container.getElementsByClassName("ai-item");
              this.links = this.container.getElementsByClassName("ai-link");
              this.element.addEventListener("click", this.toggle, false);
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