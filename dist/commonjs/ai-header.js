System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, defaults, AiHeader;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = { size: "sm",
        fixed: true,
        bgColor: "white",
        textColor: "purple"
      };
      AiHeader = _export("AiHeader", (function () {
        function AiHeader(element) {
          _classCallCheck(this, AiHeader);

          this.element = element;
          this.currentSize = defaults.size;
          this.currentBg = defaults.bgColor;
          this.currentText = defaults.textColor;
        }

        _prototypeProperties(AiHeader, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-header").withProperty("router").withProperty("size", "sizeChanged").withProperty("fixed", "fixedChanged").withProperty("bg-color", "bgChanged").withProperty("text-color", "textChanged");
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
              this.classList = [];
              this.addClass("ai-header");
            },
            writable: true,
            configurable: true
          },
          sizeChanged: {
            value: function sizeChanged(newSize) {
              newSize = newSize || defaults.size;
              this.removeClass("header-" + this.currentSize);
              this.addClass("header-" + newSize);
              this.currentSize = this.size;
            },
            writable: true,
            configurable: true
          },
          bgChanged: {
            value: function bgChanged(newBg) {
              this.removeClass("bg-" + this.currentBg);
              this.addClass("bg-" + this.newBg);
              this.currentBg = this.bgColor;
            },
            writable: true,
            configurable: true
          },
          textChanged: {
            value: function textChanged(value) {
              this.removeClass("text-" + this.currentText);
              this.addClass("text-" + this.newText);
              this.currentText = this.textColor;
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

        return AiHeader;
      })());
    }
  };
});