System.register(["aurelia-templating", "./ai-element", "./ai-action-attribute"], function (_export) {
  "use strict";

  var Behavior, AiElement, _prototypeProperties, _inherits, _classCallCheck, AiAction;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aiElement) {
      AiElement = _aiElement.AiElement;
    }, function (_aiActionAttribute) {
      _export("AiActionAttachedBehavior", _aiActionAttribute.AiActionAttachedBehavior);
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AiAction = _export("AiAction", (function (AiElement) {
        function AiAction(element) {
          var _this = this;
          _classCallCheck(this, AiAction);

          this.element = element;


          this.handle = function () {
            _this.reveal = !_this.reveal;
          };
        }

        _inherits(AiAction, AiElement);

        _prototypeProperties(AiAction, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-action").withProperty("type").withProperty("shape").withProperty("reveal", "onReveal");
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
              this.addClass("ai-action");
              this.addEvent("mouseenter", this.toggleReveal);
              this.addEvent("mouseout", this.toggleReveal);
            },
            writable: true,
            configurable: true
          },
          onReveal: {
            value: function onReveal(value) {
              console.log("revealed", value);
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

        return AiAction;
      })(AiElement));
    }
  };
});