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
          this.addClass("ai-btn");
        }

        _inherits(AiBtn, AiElement);

        _prototypeProperties(AiBtn, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-btn").withProperty("flex").withProperty("center").withProperty("color").withProperty("shape").withProperty("type").withProperty("icon").withProperty("size").withProperty("waves").withProperty("bg").withProperty("text").withProperty("nextIcon", "nextIconChanged", "next-icon");
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
              if (this.center) this.addClass("center");
              if (this.flex) this.addClass("is-" + this.flex);
              this.btn = this.element.getElementsByClassName("btn")[0];
              var classList = [];
              _.each(properties, function (item) {
                _this[item] && classList.push("btn-" + _this[item]);
              });
              if (this.text) {
                for (var _iterator = this.text.split(" ")[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
                  var color = _step.value;
                  classList.push("text-" + color);
                }
              }
              if (this.bg) {
                for (var _iterator2 = this.bg.split(" ")[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
                  var color = _step2.value;
                  classList.push("bg-" + color);
                }
              }
              console.log(this.btn);
              this.waves && classList.push("waves-effect", "waves-" + this.waves);
              this.btn.classList.add.apply(this.btn.classList, classList);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWJ0bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQ1IsU0FBUyxvREFFYixVQUFVLEVBRUQsS0FBSzs7O0FBTFYsY0FBUSxzQkFBUixRQUFROztBQUNSLGVBQVMsY0FBVCxTQUFTOzs7Ozs7Ozs7QUFFYixnQkFBVSxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO0FBRXRDLFdBQUssK0JBQVMsU0FBUztBQTBCckIsaUJBMUJGLEtBQUssQ0EwQkYsT0FBTztnQ0ExQlYsS0FBSzs7QUEyQlYsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7QUFDdEIsY0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtTQUMxQjs7a0JBN0JRLEtBQUssRUFBUyxTQUFTOzs2QkFBdkIsS0FBSztBQUVQLGtCQUFRO21CQUFBLG9CQUFFO0FBRWIscUJBQU8sUUFBUSxDQUNWLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FDdkIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUNwQixZQUFZLENBQUMsUUFBUSxDQUFDLENBQ3RCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FDckIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUNyQixZQUFZLENBQUMsTUFBTSxDQUFDLENBQ3BCLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FDcEIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUNwQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQ3JCLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FDbEIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUNwQixZQUFZLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxDQUFBO2FBRWhFOzs7O0FBRU0sZ0JBQU07bUJBQUEsa0JBQUU7QUFFWCxxQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBRW5COzs7OztBQU9ELGNBQUk7bUJBQUEsZ0JBQUU7O0FBQ0Ysa0JBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ3ZDLGtCQUFHLElBQUksQ0FBQyxJQUFJLEVBQUksSUFBSSxDQUFDLFFBQVEsU0FBTyxJQUFJLENBQUMsSUFBSSxDQUFHLENBQUE7QUFDaEQsa0JBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUN4RCxrQkFBSSxTQUFTLEdBQUcsRUFBRSxDQUFBO0FBQ2xCLGVBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQUMsSUFBSSxFQUFHO0FBQ3ZCLHNCQUFLLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLFVBQVEsTUFBSyxJQUFJLENBQUMsQ0FBRyxDQUFBO2VBQ3BELENBQUMsQ0FBQTtBQUNGLGtCQUFHLElBQUksQ0FBQyxJQUFJLEVBQUM7QUFDVCxxQ0FBaUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO3NCQUE3QixLQUFLO0FBQ1QsMkJBQVMsQ0FBQyxJQUFJLFdBQVMsS0FBSyxDQUFHLENBQUE7aUJBQ2xDO2VBQ0o7QUFDRCxrQkFBRyxJQUFJLENBQUMsRUFBRSxFQUFDO0FBQ1Asc0NBQWlCLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztzQkFBM0IsS0FBSztBQUNULDJCQUFTLENBQUMsSUFBSSxTQUFPLEtBQUssQ0FBRyxDQUFBO2lCQUNoQztlQUNKO0FBQ0QscUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ3JCLGtCQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxhQUFXLElBQUksQ0FBQyxLQUFLLENBQUcsQ0FBQTtBQUNuRSxrQkFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQTtBQUMzRCxrQkFBSSxDQUFDLElBQUksSUFBSyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBRSxDQUFBO2FBQzFDOzs7O0FBRUQsb0JBQVU7bUJBQUEsc0JBQUU7QUFDUixrQkFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUUvQyxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2FBQzdDOzs7O0FBRUQsaUJBQU87bUJBQUEsaUJBQUMsUUFBUSxFQUFDO0FBRWIsQUFBQyxlQUFDLElBQUksQ0FBQyxXQUFXLElBQU0sSUFBSSxDQUFDLFVBQVUsRUFBRSxBQUFFLENBQUE7QUFDM0Msa0JBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM1Qzs7Ozs7O2VBakVRLEtBQUs7U0FBUyxTQUFTIiwiZmlsZSI6ImFpLWJ0bi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=