System.register(["aurelia-templating", "./ai-element"], function (_export) {
  "use strict";

  var Behavior, AiElement, _prototypeProperties, _inherits, _classCallCheck, defaults, AiAside;
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
        function AiAside(element) {
          _classCallCheck(this, AiAside);

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
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              var classList = ["ai-aside"];

              this.side && classList.push(defaults["class"][this.side]);
              this.size && classList.push(defaults["class"][this.side]);
              this.isOpen && classList.push(defaults["class"].isOpen);
              this.isFixed && classList.push(defaults["class"].isFixed);
              this.isFolded && classList.push(defaults["class"].isFolded);
              this.addClass.apply(this, classList);
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
              this[value ? "addClass" : removeClass](className);
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
//# sourceMappingURL=data:application/json;base64,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QUFXLENBQUMsS0FBSyxFQUFFLFFBQVEsU0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBRWpEOzs7O0FBR0QscUJBQVc7bUJBQUEscUJBQUMsS0FBSyxFQUFDO0FBRWQsa0JBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFFBQVEsU0FBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQ25EOzs7O0FBR0Qsb0JBQVU7bUJBQUEsb0JBQUMsS0FBSyxFQUFDO0FBRWIsa0JBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFFBQVEsU0FBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBRWxEOzs7O0FBRUQscUJBQVc7bUJBQUEscUJBQUMsS0FBSyxFQUFFLFNBQVMsRUFBQztBQUN6QixrQkFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUE7YUFDcEQ7Ozs7QUFFRCxxQkFBVzttQkFBQSxxQkFBQyxPQUFPLEVBQUM7QUFDaEIscUJBQU8sR0FBRyxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQztBQUNuQyxrQkFBSSxDQUFDLFdBQVcsWUFBVSxJQUFJLENBQUMsV0FBVyxDQUFHLENBQUE7QUFDN0Msa0JBQUksQ0FBQyxRQUFRLFlBQVUsT0FBTyxDQUFHLENBQUE7QUFDakMsa0JBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNoQzs7Ozs7O2VBakVRLE9BQU87U0FBUyxTQUFTIiwiZmlsZSI6ImFpLWFzaWRlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==