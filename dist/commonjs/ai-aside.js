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

              this.side && classList.push(defaults["class"][this.side]);
              this.size && classList.push(defaults["class"][this.size]);
              this.isOpen && classList.push(defaults["class"].isOpen);
              this.isFixed && classList.push(defaults["class"].isFixed);
              this.isFolded && classList.push(defaults["class"].isFolded);
              this.addClass.apply(this, classList);
              this.activator.activateProperty("ai-aside-" + this.side + "-open", this, "isOpen");
              this.activator.activateProperty("ai-aside-" + this.side + "-fold", this, "isFolded");
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