define(["exports", "aurelia-templating"], function (exports, _aureliaTemplating) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

  var Behavior = _aureliaTemplating.Behavior;
  var BoundViewFactory = _aureliaTemplating.BoundViewFactory;
  var ViewSlot = _aureliaTemplating.ViewSlot;
  var ViewCompiler = _aureliaTemplating.ViewCompiler;
  var NavMe = exports.NavMe = (function () {
    function NavMe(element) {
      _classCallCheck(this, NavMe);

      this.elememt = element;
    }

    _prototypeProperties(NavMe, {
      metadata: {
        value: function metadata() {
          return Behavior.customElement("nav-me").withProperty("value", "valueChanged", "nav-me");
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
      attached: {
        value: function attached() {},
        writable: true,
        configurable: true
      }
    });

    return NavMe;
  })();
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});