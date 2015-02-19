System.register(["aurelia-templating", "./ai-element"], function (_export) {
  "use strict";

  var Behavior, AiElement, _prototypeProperties, _inherits, _classCallCheck, defaults, AiActionReveal;
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

      defaults = {
        side: top,
        reveal: false
      };
      AiActionReveal = _export("AiActionReveal", (function (AiElement) {
        function AiActionReveal(element) {
          var _this = this;
          _classCallCheck(this, AiActionReveal);

          this.element = element;
          this.current = defaults;

          _.assign(this, this.current);

          this.handle = function () {
            _this.reveal = !_this.reveal;
          };
        }

        _inherits(AiActionReveal, AiElement);

        _prototypeProperties(AiActionReveal, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-action-reveal").withProperty("reveal", "onReveal").withProperty("side", "sideChanged");
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
          getViewStrategy: {
            value: function getViewStrategy(strategy) {
              console.log(strategy);
            },
            writable: true,
            configurable: true
          },
          bind: {
            value: function bind() {
              this.addClass("ai-action-reveal", "reveal-" + this.side);
              this.addEvent("mouseenter", this.toggleReveal);
              this.addEvent("mouseout", this.toggleReveal);
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              this.removeEvent("mouseenter", this.toggleReveal);
              this.removeEvent("mouseout", this.toggleReveal);
            },
            writable: true,
            configurable: true
          },
          sideChanged: {
            value: function sideChanged(newSide) {
              this.removeClass("reveal-" + this.current.side);
              this.addClass("reveal-" + newSide);
            },
            writable: true,
            configurable: true
          },
          onReveal: {
            value: function onReveal(value) {
              this[value ? "addClass" : "removeClass"]("reveal");
            },
            writable: true,
            configurable: true
          },
          toggleReveal: {
            value: function toggleReveal(event) {
              event.preventDefault();
              this.reveal = !this.reveal;
            },
            writable: true,
            configurable: true
          }
        });

        return AiActionReveal;
      })(AiElement));
    }
  };
});