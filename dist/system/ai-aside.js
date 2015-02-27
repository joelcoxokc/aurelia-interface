System.register(["aurelia-templating", "./ai-element", "./aside-toggle", "./toggler"], function (_export) {
  "use strict";

  var Behavior, AiElement, AsideToggle, Toggler, _prototypeProperties, _inherits, _classCallCheck, defaults, AiAside;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aiElement) {
      AiElement = _aiElement.AiElement;
    }, function (_asideToggle) {
      AsideToggle = _asideToggle.AsideToggle;
    }, function (_toggler) {
      Toggler = _toggler.Toggler;
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
        function AiAside(element, asideToggle, toggler) {
          _classCallCheck(this, AiAside);

          this.toggler = toggler;
          this.asideToggle = asideToggle;
          this.element = element;
          this.currentSide = null;
          this.state = this.fold || this.isOpen || defaults.aside;
        }

        _inherits(AiAside, AiElement);

        _prototypeProperties(AiAside, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-aside").withProperty("router").withProperty("router").withProperty("state").withProperty("side", "sideChanged").withProperty("size", "sizeChanged").withProperty("isOpen", "openChanged", "is-open").withProperty("isFolded", "foldChanged", "is-folded").withProperty("isFixed", "fixChanged", "is-fixed");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element, AsideToggle, Toggler];
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
              this.toggler.register("aside-" + this.side + "-open", this, "isOpen", null, this.onOpen);
              this.toggler.register("aside-" + this.side + "-fold", this, "isFolded", null, this.onOpen);
            },
            writable: true,
            configurable: true
          },
          onOpen: {
            value: function onOpen(newValue, oldValue) {
              console.log(newValue, oldValue);
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
//# sourceMappingURL=data:application/json;base64,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QUFDM0Qsa0JBQUksQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLElBQUksQ0FBRSxRQUFRLFNBQU0sQ0FBQyxRQUFRLENBQUUsQUFBQyxDQUFBO0FBQzNELGtCQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUE7O0FBRXBDLGtCQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUMzQixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLFlBQVUsSUFBSSxDQUFDLElBQUksWUFBUyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDbkYsa0JBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxZQUFVLElBQUksQ0FBQyxJQUFJLFlBQVMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBTXhGOzs7O0FBRUQsZ0JBQU07bUJBQUEsZ0JBQUMsUUFBUSxFQUFFLFFBQVEsRUFBQztBQUN0QixxQkFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUE7YUFDbEM7Ozs7QUFFRCxxQkFBVzttQkFBQSxxQkFBQyxLQUFLLEVBQUM7QUFFZCxrQkFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxTQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7YUFFakQ7Ozs7QUFHRCxxQkFBVzttQkFBQSxxQkFBQyxLQUFLLEVBQUM7QUFFZCxrQkFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxTQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7YUFDbkQ7Ozs7QUFHRCxvQkFBVTttQkFBQSxvQkFBQyxLQUFLLEVBQUM7QUFFYixrQkFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxTQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7YUFFbEQ7Ozs7QUFFRCxxQkFBVzttQkFBQSxxQkFBQyxLQUFLLEVBQUUsU0FBUyxFQUFDO0FBQ3pCLGtCQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQTthQUN0RDs7OztBQUVELHFCQUFXO21CQUFBLHFCQUFDLE9BQU8sRUFBQztBQUNoQixxQkFBTyxHQUFHLE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQ25DLGtCQUFJLENBQUMsV0FBVyxZQUFVLElBQUksQ0FBQyxXQUFXLENBQUcsQ0FBQTtBQUM3QyxrQkFBSSxDQUFDLFFBQVEsWUFBVSxPQUFPLENBQUcsQ0FBQTtBQUNqQyxrQkFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2hDOzs7Ozs7ZUFqRlEsT0FBTztTQUFTLFNBQVMiLCJmaWxlIjoiYWktYXNpZGUuanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9