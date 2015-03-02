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