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
//# sourceMappingURL=data:application/json;base64,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