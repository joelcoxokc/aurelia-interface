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