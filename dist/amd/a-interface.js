define(["exports", "aurelia-templating", "./aside", "./bar"], function (exports, _aureliaTemplating, _aside, _bar) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

  var Behavior = _aureliaTemplating.Behavior;
  var Aside = _aside.Aside;
  var Bar = _bar.Bar;



  var defaults = {
    asideId: "aside1",
    size: "md",
    side: "left",
    open: false,
    fixed: true
  };

  var AInterfaceCustomElement = exports.AInterfaceCustomElement = (function () {
    function AInterfaceCustomElement(element, bar) {
      _classCallCheck(this, AInterfaceCustomElement);

      console.log(this.toggler);
      this.element = element;
      this.aside = {};
      this.bar = {};
      this.aside = new Aside(defaults);

      this.showing = true;

    }

    _prototypeProperties(AInterfaceCustomElement, {
      metadata: {
        value: function metadata() {
          return Behavior.withProperty("router").withProperty("aside").withProperty("nav").withProperty("footer").withProperty("direction");
        },
        writable: true,
        configurable: true
      },
      inject: {
        value: function inject() {
          return [Element, Bar];
        },
        writable: true,
        configurable: true
      }
    }, {
      attached: {
        value: function attached() {
          this.element.classList.add("is-" + this.direction);
          this.element.classList.add("a-interface");
        },
        writable: true,
        configurable: true
      },
      activate: {
        value: function activate() {
          this.header = "Joel";
          console.log("Nav Activated", this);
        },
        writable: true,
        configurable: true
      }
    });

    return AInterfaceCustomElement;
  })();
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});