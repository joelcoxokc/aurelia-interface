System.register(["aurelia-templating", "./ai-element"], function (_export) {
  "use strict";

  var Behavior, AiElement, _prototypeProperties, _inherits, _classCallCheck, AiAction;
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

      AiAction = _export("AiAction", (function (AiElement) {
        function AiAction() {
          var _this = this;
          _classCallCheck(this, AiAction);

          this.handle = function () {
            _this.reveal = !_this.reveal;
          };
        }

        _inherits(AiAction, AiElement);

        _prototypeProperties(AiAction, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-action").withProperty("type").withProperty("shape").withProperty("reveal", "isRevealed");
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              console.log(this);
              this.addClass("btn", "btn-large", "btn-raised", "waves-effect", "waves-light", "ai-action", "action-" + this.type, "action-" + this.shape);
              this.element.addEventListener("mouseenter", this.handle, false);
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