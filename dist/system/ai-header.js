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
        fixed: false,
        bg: "white",
        text: "purple"
      };
      AiHeader = _export("AiHeader", (function () {
        function AiHeader(element) {
          _classCallCheck(this, AiHeader);

          this.element = element;
          this.current = defaults;
          _.assign(this, this.current);
        }

        _prototypeProperties(AiHeader, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-header").withProperty("router").withProperty("size", "sizeChanged").withProperty("fixed", "fixedChanged").withProperty("bg", "bgChanged").withProperty("text", "textChanged");
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
              var _this = this;
              this.classList = [];
              this.element.classList.add("ai-header", "header-" + this.size);

              Object.observe(this.router, function () {
                console.log("headomg", _this.router.currentInstruction.config.toolbar.bgColor);
                _this.size = _this.router.currentInstruction.config.toolbar.size || _this.current.size;
                _this.bg = _this.router.currentInstruction.config.toolbar.bgColor || _this.current.bg;
                _this.text = _this.router.currentInstruction.config.toolbar.textColor || _this.current.text;
              });
            },
            writable: true,
            configurable: true
          },
          sizeChanged: {
            value: function sizeChanged(newSize) {
              newSize = newSize || defaults.size;
              this.element.classList.remove("header-" + this.current.size);
              this.element.classList.add("header-" + newSize);
              this.current.size = this.size;
            },
            writable: true,
            configurable: true
          },
          bgChanged: {
            value: function bgChanged(newBg) {
              this.element.classList.remove("bg-" + this.current.bg);
              this.element.classList.add("bg-" + newBg);
              this.current.bg = newBg;
            },
            writable: true,
            configurable: true
          },
          textChanged: {
            value: function textChanged(newText) {
              this.element.classList.remove("text-" + this.current.text);
              this.element.classList.add("text-" + newText);
              this.current.text = newText;
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