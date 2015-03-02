System.register(["aurelia-templating", "./ai-element", "aurelia-router"], function (_export) {
  "use strict";

  var Behavior, AiElement, Router, _prototypeProperties, _inherits, _classCallCheck, properties, AiBtn;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aiElement) {
      AiElement = _aiElement.AiElement;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      properties = ["color", "shape", "type", "size"];
      AiBtn = _export("AiBtn", (function (AiElement) {
        function AiBtn(element, router) {
          _classCallCheck(this, AiBtn);

          this.element = element;
          this.addClass("ai-btn");
          this.splitter = /\s*,\s*/;

          this.goTo = function (url) {
            router.navigate(url);
          };
        }

        _inherits(AiBtn, AiElement);

        _prototypeProperties(AiBtn, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-btn").withProperty("flex").withProperty("center").withProperty("color").withProperty("shape").withProperty("type").withProperty("icon").withProperty("size").withProperty("waves").withProperty("bg").withProperty("text").withProperty("link").withProperty("nextIcon", "nextIconChanged", "next-icon");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element, Router];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              this.btn = this.element.getElementsByClassName("btn")[0];
              this.applyClassList();
              this.link && this.createLink();
              this.icon && this.useIcon(this.icon);
            },
            writable: true,
            configurable: true
          },
          applyClassList: {
            value: function applyClassList() {
              var _this = this;
              var classList = [];
              if (this.center) this.addClass("center");
              if (this.flex) this.addClass("is-" + this.flex);
              _.each(properties, function (item) {
                _this[item] && classList.push("btn-" + _this[item]);
              });
              this.bg && classList.push(this.bg.split(this.splitter));

              this.text && classList.push(this.text.split(this.splitter));
              this.waves && classList.push("waves-effect", "waves-" + this.waves);

              this.btn.classList.add.apply(this.btn.classList, classList);
            },
            writable: true,
            configurable: true
          },
          createLink: {
            value: function createLink() {
              var _this = this;
              this.btn.addEventListener("click", function (evt) {
                evt.preventDefault();
                _this.goTo(_this.link);
              });
            },
            writable: true,
            configurable: true
          },
          attachIcon: {
            value: function attachIcon() {
              this.iconElement = document.createElement("i");

              this.btn.appendChild(this.iconElement);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLWJ0bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQ1IsU0FBUyxFQUNULE1BQU0sb0RBRVYsVUFBVSxFQUVELEtBQUs7OztBQU5WLGNBQVEsc0JBQVIsUUFBUTs7QUFDUixlQUFTLGNBQVQsU0FBUzs7QUFDVCxZQUFNLGtCQUFOLE1BQU07Ozs7Ozs7OztBQUVWLGdCQUFVLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7QUFFdEMsV0FBSywrQkFBUyxTQUFTO0FBMkJyQixpQkEzQkYsS0FBSyxDQTJCRixPQUFPLEVBQUUsTUFBTTtnQ0EzQmxCLEtBQUs7O0FBNEJWLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0FBQ3RCLGNBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEIsY0FBSSxDQUFDLFFBQVEsR0FBSSxTQUFTLENBQUM7O0FBRTNCLGNBQUksQ0FBQyxJQUFJLEdBQUcsVUFBUyxHQUFHLEVBQUM7QUFDckIsa0JBQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7V0FDeEIsQ0FBQTtTQUNKOztrQkFuQ1EsS0FBSyxFQUFTLFNBQVM7OzZCQUF2QixLQUFLO0FBRVAsa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxRQUFRLENBQ1YsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUN2QixZQUFZLENBQUMsTUFBTSxDQUFDLENBQ3BCLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FDdEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUNyQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQ3JCLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FDcEIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUNwQixZQUFZLENBQUMsTUFBTSxDQUFDLENBQ3BCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FDckIsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUNsQixZQUFZLENBQUMsTUFBTSxDQUFDLENBQ3BCLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FDcEIsWUFBWSxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLENBQUMsQ0FBQTthQUVoRTs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFFO0FBRVgscUJBQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7YUFFM0I7Ozs7O0FBWUQsY0FBSTttQkFBQSxnQkFBRTtBQUNGLGtCQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDeEQsa0JBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUN0QixrQkFBSSxDQUFDLElBQUksSUFBSyxJQUFJLENBQUMsVUFBVSxFQUFFLEFBQUUsQ0FBQztBQUNsQyxrQkFBSSxDQUFDLElBQUksSUFBSyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBRSxDQUFDO2FBQzNDOzs7O0FBRUQsd0JBQWM7bUJBQUEsMEJBQUU7O0FBQ1osa0JBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQTtBQUNsQixrQkFBRyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDdkMsa0JBQUcsSUFBSSxDQUFDLElBQUksRUFBSSxJQUFJLENBQUMsUUFBUSxTQUFPLElBQUksQ0FBQyxJQUFJLENBQUcsQ0FBQTtBQUNoRCxlQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLElBQUksRUFBRztBQUN2QixzQkFBSyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxVQUFRLE1BQUssSUFBSSxDQUFDLENBQUcsQ0FBQTtlQUNwRCxDQUFDLENBQUE7QUFDRixrQkFBSSxDQUFDLEVBQUUsSUFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBOztBQUV6RCxrQkFBSSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0FBQzNELGtCQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxhQUFXLElBQUksQ0FBQyxLQUFLLENBQUcsQ0FBQTs7QUFFbkUsa0JBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUE7YUFDOUQ7Ozs7QUFFRCxvQkFBVTttQkFBQSxzQkFBRTs7QUFDUixrQkFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxHQUFHLEVBQUc7QUFDdEMsbUJBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNyQixzQkFBSyxJQUFJLENBQUMsTUFBSyxJQUFJLENBQUMsQ0FBQTtlQUN2QixDQUFDLENBQUE7YUFDTDs7OztBQUVELG9CQUFVO21CQUFBLHNCQUFFO0FBQ1Isa0JBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFL0Msa0JBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTthQUN6Qzs7OztBQUVELGlCQUFPO21CQUFBLGlCQUFDLFFBQVEsRUFBQztBQUViLEFBQUMsZUFBQyxJQUFJLENBQUMsV0FBVyxJQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQUFBRSxDQUFBO0FBQzNDLGtCQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDNUM7Ozs7OztlQTVFUSxLQUFLO1NBQVMsU0FBUyIsImZpbGUiOiJhaS1idG4uanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9