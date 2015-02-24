System.register(["aurelia-templating", "./ai-element", "./aside-toggle"], function (_export) {
  "use strict";

  var Behavior, AiElement, AsideToggle, _prototypeProperties, _inherits, _classCallCheck, defaults, AiAside;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aiElement) {
      AiElement = _aiElement.AiElement;
    }, function (_asideToggle) {
      AsideToggle = _asideToggle.AsideToggle;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = { prefix: "aside",
        side: "right",
        size: "sm",
        isOpen: false,
        fold: false,
        fixed: true,
        state: "isOpen",
        "class": { isOpen: "aside-is-open",
          isFolded: "aside-is-folded",
          isFixed: "aside-is-fixed",
          left: "aside-left",
          right: "aside-right",
          xs: "aside-xs",
          sm: "aside-sm",
          md: "aside-md",
          lg: "aside-lg",
          xl: "aside-xl"
        }
      };
      AiAside = _export("AiAside", (function (AiElement) {
        function AiAside(element, asideToggle) {
          _classCallCheck(this, AiAside);

          this.asideToggle = asideToggle;
          this.element = element;
          this.currentSide = null;
          this.state = this.fold || this.isOpen || defaults.aside;
        }

        _inherits(AiAside, AiElement);

        _prototypeProperties(AiAside, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-aside").withProperty("router").withProperty("state").withProperty("side", "sideChanged").withProperty("size", "sizeChanged").withProperty("isOpen", "openChanged", "is-open").withProperty("isFolded", "foldChanged", "is-folded").withProperty("isFixed", "fixChanged", "is-fixed");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element, AsideToggle];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              var classList = ["ai-aside"];

              this.side && classList.push(defaults["class"][this.side]);
              this.size && classList.push(defaults["class"][this.size]);
              this.isOpen && classList.push(defaults["class"].isOpen);
              this.isFixed && classList.push(defaults["class"].isFixed);
              this.isFolded && classList.push(defaults["class"].isFolded);
              this.addClass.apply(this, classList);

              this.asideToggle.init(this);

              console.log("from aside", this.asideToggle);
            },
            writable: true,
            configurable: true
          },
          openChanged: {
            value: function openChanged(value) {
              this.toggleClass(value, defaults["class"].isOpen);
            },
            writable: true,
            configurable: true
          },
          foldChanged: {
            value: function foldChanged(value) {
              this.toggleClass(value, defaults["class"].isFolded);
            },
            writable: true,
            configurable: true
          },
          fixChanged: {
            value: function fixChanged(value) {
              this.toggleClass(value, defaults["class"].isFixed);
            },
            writable: true,
            configurable: true
          },
          toggleClass: {
            value: function toggleClass(value, className) {
              this[value ? "addClass" : "removeClass"](className);
            },
            writable: true,
            configurable: true
          },
          sideChanged: {
            value: function sideChanged(newSide) {
              newSide = newSide || defaults.side;
              this.removeClass("aside-" + this.currentSide);
              this.addClass("aside-" + newSide);
              this.currentSide = this.side;
            },
            writable: true,
            configurable: true
          }
        });

        return AiAside;
      })(AiElement));
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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