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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWJ0bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQ1IsU0FBUyxvREFFYixVQUFVLEVBRUQsS0FBSzs7O0FBTFYsY0FBUSxzQkFBUixRQUFROztBQUNSLGVBQVMsY0FBVCxTQUFTOzs7Ozs7Ozs7QUFFYixnQkFBVSxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO0FBRXRDLFdBQUssK0JBQVMsU0FBUztBQXNCckIsaUJBdEJGLEtBQUssQ0FzQkYsT0FBTztnQ0F0QlYsS0FBSzs7QUF1QlYsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7U0FFekI7O2tCQXpCUSxLQUFLLEVBQVMsU0FBUzs7NkJBQXZCLEtBQUs7QUFFUCxrQkFBUTttQkFBQSxvQkFBRTtBQUViLHFCQUFPLFFBQVEsQ0FDVixhQUFhLENBQUMsUUFBUSxDQUFDLENBQ3ZCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FDckIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUNyQixZQUFZLENBQUMsTUFBTSxDQUFDLENBQ3BCLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FDcEIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUNwQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQ3JCLFlBQVksQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLENBQUE7YUFFaEU7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRTtBQUVYLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7YUFFbkI7Ozs7O0FBT0QsY0FBSTttQkFBQSxnQkFBRTs7QUFDRixrQkFBSSxTQUFTLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUMxQixlQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLElBQUksRUFBRztBQUN2QixzQkFBSyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxVQUFRLE1BQUssSUFBSSxDQUFDLENBQUcsQ0FBQTtlQUNwRCxDQUFDLENBQUE7QUFDRixrQkFBSSxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsYUFBVyxJQUFJLENBQUMsS0FBSyxDQUFHLENBQUE7QUFDbkUsa0JBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQTtBQUNwQyxrQkFBSSxDQUFDLElBQUksSUFBSyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBRSxDQUFBO2FBQzFDOzs7O0FBRUQsb0JBQVU7bUJBQUEsc0JBQUU7QUFDUixrQkFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUUvQyxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2FBQzdDOzs7O0FBRUQsaUJBQU87bUJBQUEsaUJBQUMsUUFBUSxFQUFDO0FBRWIsQUFBQyxlQUFDLElBQUksQ0FBQyxXQUFXLElBQU0sSUFBSSxDQUFDLFVBQVUsRUFBRSxBQUFFLENBQUE7QUFDM0Msa0JBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM1Qzs7Ozs7O2VBL0NRLEtBQUs7U0FBUyxTQUFTIiwiZmlsZSI6ImFpLWJ0bi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=