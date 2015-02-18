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
              this.element.classList.add("bg-" + this.newBg);
              this.current.bg = newBg;
            },
            writable: true,
            configurable: true
          },
          textChanged: {
            value: function textChanged(value) {
              this.element.classList.remove("text-" + this.current.text);
              this.element.classList.add("text-" + this.newText);
              this.current.text = value;
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