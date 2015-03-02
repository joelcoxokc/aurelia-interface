System.register(["aurelia-templating", "./ai-element", "./activator-service", "./ai-aside-attribute"], function (_export) {
  "use strict";

  var Behavior, AiElement, ActivatorService, _prototypeProperties, _inherits, _classCallCheck, defaults, AiAside, Elements;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aiElement) {
      AiElement = _aiElement.AiElement;
    }, function (_activatorService) {
      ActivatorService = _activatorService.ActivatorService;
    }, function (_aiAsideAttribute) {
      _export("AiAsideAttachedBehavior", _aiAsideAttribute.AiAsideAttachedBehavior);
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = { prefix: "aside",
        props: ["side", "size", "isOpen", "isFolded", "isFixed"],
        config: { side: "right",
          size: "sm",
          isOpen: false,
          isFolded: false,
          isFixed: true
        },
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
        function AiAside(element, activator) {
          _classCallCheck(this, AiAside);

          this.activator = activator;
          this.element = element;
          this.currentSide = null;
          this.state = this.fold || this.isOpen || defaults.aside;
          this.elements = {};
          for (var _iterator = defaults.props[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
            var prop = _step.value;
            this[prop] = this[prop] || defaults.config[prop];
          }
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
              return [Element, ActivatorService];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              var classList = ["ai-aside"];
              this.activator.activateProperty("ai-aside-" + this.side + "-open", this, "isOpen");
              this.activator.activateProperty("ai-aside-" + this.side + "-fold", this, "isFolded");

              this.side && classList.push(defaults["class"][this.side]);
              this.size && classList.push(defaults["class"][this.size]);
              this.isOpen && classList.push(defaults["class"].isOpen);
              this.isFixed && classList.push(defaults["class"].isFixed);
              this.isFolded && classList.push(defaults["class"].isFolded);
              this.addClass.apply(this, classList);
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
              newSide = newSide || defaults.config.side;
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
//# sourceMappingURL=data:application/json;base64,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Q0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFFBQVEsU0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBQ2pEOzs7O0FBRUwscUJBQVc7bUJBQUEscUJBQUMsS0FBSyxFQUFDO0FBQ1Ysa0JBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFFBQVEsU0FBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQ25EOzs7O0FBR0wsb0JBQVU7bUJBQUEsb0JBQUMsS0FBSyxFQUFDO0FBQ1Qsa0JBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFFBQVEsU0FBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBQ2xEOzs7O0FBRUwscUJBQVc7bUJBQUEscUJBQUMsS0FBSyxFQUFFLFNBQVMsRUFBQztBQUNyQixrQkFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUE7YUFDdEQ7Ozs7QUFFTCxxQkFBVzttQkFBQSxxQkFBQyxPQUFPLEVBQUM7QUFDWixxQkFBTyxHQUFHLE9BQU8sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUMxQyxrQkFBSSxDQUFDLFdBQVcsWUFBVSxJQUFJLENBQUMsV0FBVyxDQUFHLENBQUM7QUFDOUMsa0JBQUksQ0FBQyxRQUFRLFlBQVUsT0FBTyxDQUFHLENBQUM7QUFDbEMsa0JBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNoQzs7Ozs7O2VBL0ZJLE9BQU87U0FBUyxTQUFTO0FBa0doQyxjQUFRLGNBQVMsU0FBUztBQUVqQixpQkFGVCxRQUFRLENBRUUsT0FBTztnQ0FGakIsUUFBUTs7QUFHTixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUMxQjs7a0JBSkMsUUFBUSxFQUFTLFNBQVM7OzZCQUExQixRQUFRO0FBTVYsYUFBRzttQkFBQSxhQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO0FBRTVCLGtCQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixrQkFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7QUFDeEIsa0JBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNCLGtCQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDaEIscUJBQU8sSUFBSSxDQUFBO2FBQ2Q7Ozs7QUFFRCxrQkFBUTttQkFBQSxvQkFBRTtBQUNOLGtCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNqQzs7Ozs7O2VBakJDLFFBQVE7U0FBUyxTQUFTIiwiZmlsZSI6ImFpLWFzaWRlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==