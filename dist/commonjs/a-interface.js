System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, AInterface;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AInterface = _export("AInterface", (function () {
        function AInterface() {
          _classCallCheck(this, AInterface);

          this.direction = "row";
        }

        _prototypeProperties(AInterface, {
          metatdata: {
            value: function metatdata() {
              return Behavior.withProperty("direction");

            },
            writable: true,
            configurable: true
          }
        }, {
          _bind: {
            value: function _bind() {
              this.classList = ["a-interface"];
              this.direction && this.classList.push("is-" + this.direction);
              this.addClass.apply(this.classList);
            },
            writable: true,
            configurable: true
          },
          directionChaned: {
            value: function directionChaned(value) {
              this.addClass(value);
            },
            writable: true,
            configurable: true
          },
          addClass: {
            value: function addClass() {
              this.element.classList.add.apply(this.element.classList, arguments);
            },
            writable: true,
            configurable: true
          },
          removeClass: {
            value: function removeClass() {
              this.element.classList.remove.apply(this.element.classList, arguments);
            },
            writable: true,
            configurable: true
          }
        });

        return AInterface;
      })());
    }
  };
});