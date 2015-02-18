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

          this.element = element;
          this.isOpen = false;
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
          isOpenChanged: {
            value: function isOpenChanged(newValue) {
              var _this = this;
              console.log(newValue);

            },
            writable: true,
            configurable: true
          },
          bind: {
            value: function bind() {
              var _this = this;
              this.element.addEventListener("click", _this.open(), false);
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              var _this = this;
              this.element.removeEventListener("click", _this.toggle(), false);
              document.removeEventListener("keyDown", _this.escapeKey(), false);
            },
            writable: true,
            configurable: true
          },
          toggle: {
            value: function toggle() {
              var _this = this;
              return function (event) {
                event.preventDefault();
                _this.isOpen = !_this.isOpen;

                _this[_this.isOpen ? "close" : "open"]();
              };
            },
            writable: true,
            configurable: true
          },
          open: {
            value: function open() {
              var _this = this;
              this.unbind();
              return function (event) {
                event.preventDefault();
                this.docBind();
                _this.element.classList.add("dropdown-open");
              };
            },
            writable: true,
            configurable: true
          },
          close: {
            value: function close() {
              var _this = this;
              return function (event) {
                event.preventDefault();
                _this.element.classList.add("dropdown-open");
                this.unbind();
                this.bindToggle();
              };
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
          docBind: {
            value: function docBind() {
              document.addEventListener("click", this.close(), false);
              document.addEventListener("keyDown", this.escapeKey(), false);
            },
            writable: true,
            configurable: true
          },
          toggleBind: {
            value: function toggleBind() {
              this.element.addEventListener("click", this.open(), false);
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