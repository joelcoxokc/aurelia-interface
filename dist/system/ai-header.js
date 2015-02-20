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
              this.addClass("ai-header", "header-" + this.size);

              Object.observe(this.router, function () {
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
              this.removeClass("header-" + this.current.size);
              this.addClass("header-" + newSize);
              this.current.size = this.size;
            },
            writable: true,
            configurable: true
          },
          bgChanged: {
            value: function bgChanged(newBg) {
              this.removeClass(this.current.bg);
              this.addClass(newBg);
              this.current.bg = newBg;
            },
            writable: true,
            configurable: true
          },
          textChanged: {
            value: function textChanged(newText) {
              this.removeClass(this.current.text);
              this.addClass(newText);
              this.current.text = newText;
            },
            writable: true,
            configurable: true
          },
          addClass: {
            value: function addClass() {
              var args = _.flatten(arguments, true);
              console.log("add", args);
              this.element.classList.add.apply(this.element.classList, args);
            },
            writable: true,
            configurable: true
          },
          removeClass: {
            value: function removeClass() {
              var args = _.flatten(arguments, true);
              console.log("remove", args);
              this.element.classList.removeClass.apply(this.element.classList, args);
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