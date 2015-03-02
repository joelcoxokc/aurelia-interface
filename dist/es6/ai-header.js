System.register(["aurelia-templating", "./activator-service", "./ai-header-attribute"], function (_export) {
  "use strict";

  var Behavior, ActivatorService, _prototypeProperties, _classCallCheck, defaults, AiHeader;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_activatorService) {
      ActivatorService = _activatorService.ActivatorService;
    }, function (_aiHeaderAttribute) {
      _export("AiHeaderAttachedBehavior", _aiHeaderAttribute.AiHeaderAttachedBehavior);
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
        function AiHeader(element, activator) {
          _classCallCheck(this, AiHeader);

          this.activator = activator;
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
              return [Element, ActivatorService];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              this.activator.activateProperty("ai-header-size", this, "size");
              this.applyClasses();
            },
            writable: true,
            configurable: true
          },
          applyClasses: {
            value: function applyClasses() {
              var classList = ["ai-header"];
              this.bg && classList.push("bg-" + this.bg);
              this.text && classList.push("text-" + this.text);
              this.size && classList.push("header-" + this.size);
              this.element.classList.add.apply(this.element.classList, classList);
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
              this.element.classList.remove(this.current.bg);
              this.element.classList.add(newBg);
              this.current.bg = newBg;
            },
            writable: true,
            configurable: true
          },
          textChanged: {
            value: function textChanged(newText) {
              this.element.classList.remove(this.current.text);
              this.element.classList.add(newText);
              this.current.text = newText;
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