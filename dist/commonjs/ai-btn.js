System.register(["aurelia-templating", "./ai-element"], function (_export) {
  "use strict";

  var Behavior, AiElement, _prototypeProperties, _inherits, _classCallCheck, properties, AiBtn;
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

      properties = ["color", "shape", "type", "size"];
      AiBtn = _export("AiBtn", (function (AiElement) {
        function AiBtn(element) {
          _classCallCheck(this, AiBtn);

          this.element = element;
        }

        _inherits(AiBtn, AiElement);

        _prototypeProperties(AiBtn, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-btn").withProperty("color").withProperty("shape").withProperty("type").withProperty("icon").withProperty("size").withProperty("waves").withProperty("nextIcon", "nextIconChanged", "next-icon");
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
              var classList = ["ai-btn"];
              _.each(properties, function (item) {
                _this[item] && classList.push("btn-" + _this[item]);
              });
              this.waves && classList.push("waves-effect", "waves-" + this.waves);
              this.addClass.apply(this, classList);
              this.icon && this.useIcon(this.icon);
            },
            writable: true,
            configurable: true
          },
          attachIcon: {
            value: function attachIcon() {
              this.iconElement = document.createElement("i");

              this.element.appendChild(this.iconElement);
            },
            writable: true,
            configurable: true
          },
          useIcon: {
            value: function useIcon(iconName) {
              !this.iconElement && this.attachIcon();
              this.iconElement.classList.add(iconName);
            },
            writable: true,
            configurable: true
          }
        });

        return AiBtn;
      })(AiElement));
    }
  };
});