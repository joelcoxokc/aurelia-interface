System.register(["aurelia-templating", "./ai-element", "./activator-service", "./ai-aside-attribute", "./aside-nav-attribute"], function (_export) {
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
    }, function (_asideNavAttribute) {
      _export("AsideNavAttachedBehavior", _asideNavAttribute.AsideNavAttachedBehavior);

      _export("NavCollapseAttachedBehavior", _asideNavAttribute.NavCollapseAttachedBehavior);
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
          isFixed: false
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
            if (this[prop]) {
              this[prop] = this[prop] || defaults.config[prop];
            }
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
//# sourceMappingURL=data:application/json;base64,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QUUsUUFBUSxDQUFDLENBQUE7YUFDbEM7Ozs7QUFFTCxxQkFBVzttQkFBQSxxQkFBQyxLQUFLLEVBQUM7QUFDVixrQkFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxTQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7YUFDakQ7Ozs7QUFFTCxxQkFBVzttQkFBQSxxQkFBQyxLQUFLLEVBQUM7QUFDVixrQkFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxTQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7YUFDbkQ7Ozs7QUFHTCxvQkFBVTttQkFBQSxvQkFBQyxLQUFLLEVBQUM7QUFDVCxrQkFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxTQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDbEQ7Ozs7QUFFTCxxQkFBVzttQkFBQSxxQkFBQyxLQUFLLEVBQUUsU0FBUyxFQUFDO0FBQ3JCLGtCQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQTthQUN0RDs7OztBQUVMLHFCQUFXO21CQUFBLHFCQUFDLE9BQU8sRUFBQztBQUNaLHFCQUFPLEdBQUcsT0FBTyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQzFDLGtCQUFJLENBQUMsV0FBVyxZQUFVLElBQUksQ0FBQyxXQUFXLENBQUcsQ0FBQztBQUM5QyxrQkFBSSxDQUFDLFFBQVEsWUFBVSxPQUFPLENBQUcsQ0FBQztBQUNsQyxrQkFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2hDOzs7Ozs7ZUFqR0ksT0FBTztTQUFTLFNBQVM7QUFvR2hDLGNBQVEsY0FBUyxTQUFTO0FBRWpCLGlCQUZULFFBQVEsQ0FFRSxPQUFPO2dDQUZqQixRQUFROztBQUdOLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQzFCOztrQkFKQyxRQUFRLEVBQVMsU0FBUzs7NkJBQTFCLFFBQVE7QUFNVixhQUFHO21CQUFBLGFBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7QUFFNUIsa0JBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGtCQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztBQUN4QixrQkFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDM0Isa0JBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNoQixxQkFBTyxJQUFJLENBQUE7YUFDZDs7OztBQUVELGtCQUFRO21CQUFBLG9CQUFFO0FBQ04sa0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2pDOzs7Ozs7ZUFqQkMsUUFBUTtTQUFTLFNBQVMiLCJmaWxlIjoiYWktYXNpZGUuanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9