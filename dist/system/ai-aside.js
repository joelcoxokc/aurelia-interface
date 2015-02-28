System.register(["aurelia-templating", "./ai-element", "./aside-toggle", "./toggler"], function (_export) {
  "use strict";

  var Behavior, AiElement, AsideToggle, Toggler, _prototypeProperties, _inherits, _classCallCheck, defaults, AiAside, Elements;
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
          this.elements = {};
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
          attached: {
            value: function attached() {
              this.getElements();
              this.attachElements();
            },
            writable: true,
            configurable: true
          },
          getElements: {
            value: function getElements() {
              var header = this.element.getElementsByClassName("header")[0];
              var content = this.element.getElementsByClassName("content")[0];

              !header && (header = this.element.getElementsByClassName("aside-header")[0]);
              !content && (content = this.element.getElementsByClassName("aside-content")[0]);

              this.elements.header = header;
              this.elements.content = content;

              this.elements.header && (this.header = new Elements(this.elements.header));
              this.elements.content && (this.content = new Elements(this.elements.content));
            },
            writable: true,
            configurable: true
          },
          attachElements: {
            value: function attachElements() {
              this.header && this.header.use(this.elements.header, ["aside-header"], this);
              this.content && this.content.use(this.elements.content, ["aside-content"], this);
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
      Elements = (function (AiElement) {
        function Elements(element) {
          _classCallCheck(this, Elements);

          this.element = element;
        }

        _inherits(Elements, AiElement);

        _prototypeProperties(Elements, null, {
          use: {
            value: function use(element, classList, context) {
              this.element = element;
              this._context = context;
              this.classList = classList;
              this.attached();
              return this;
            },
            writable: true,
            configurable: true
          },
          attached: {
            value: function attached() {
              this.addClass(this.classList);
            },
            writable: true,
            configurable: true
          }
        });

        return Elements;
      })(AiElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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RDs7OztBQUVMLHFCQUFXO21CQUFBLHFCQUFDLEtBQUssRUFBQztBQUNWLGtCQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxRQUFRLFNBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTthQUNuRDs7OztBQUdMLG9CQUFVO21CQUFBLG9CQUFDLEtBQUssRUFBQztBQUNULGtCQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxRQUFRLFNBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUNsRDs7OztBQUVMLHFCQUFXO21CQUFBLHFCQUFDLEtBQUssRUFBRSxTQUFTLEVBQUM7QUFDckIsa0JBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxHQUFHLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFBO2FBQ3REOzs7O0FBRUwscUJBQVc7bUJBQUEscUJBQUMsT0FBTyxFQUFDO0FBQ1oscUJBQU8sR0FBRyxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQztBQUNuQyxrQkFBSSxDQUFDLFdBQVcsWUFBVSxJQUFJLENBQUMsV0FBVyxDQUFHLENBQUM7QUFDOUMsa0JBQUksQ0FBQyxRQUFRLFlBQVUsT0FBTyxDQUFHLENBQUM7QUFDbEMsa0JBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNoQzs7Ozs7O2VBbkdJLE9BQU87U0FBUyxTQUFTO0FBc0doQyxjQUFRLGNBQVMsU0FBUztBQUVqQixpQkFGVCxRQUFRLENBRUUsT0FBTztnQ0FGakIsUUFBUTs7QUFHTixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUMxQjs7a0JBSkMsUUFBUSxFQUFTLFNBQVM7OzZCQUExQixRQUFRO0FBTVYsYUFBRzttQkFBQSxhQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO0FBRTVCLGtCQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixrQkFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7QUFDeEIsa0JBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNCLGtCQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDaEIscUJBQU8sSUFBSSxDQUFBO2FBQ2Q7Ozs7QUFFRCxrQkFBUTttQkFBQSxvQkFBRTtBQUNOLGtCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNqQzs7Ozs7O2VBakJDLFFBQVE7U0FBUyxTQUFTIiwiZmlsZSI6ImFpLWFzaWRlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==