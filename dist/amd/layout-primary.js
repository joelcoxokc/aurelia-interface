define(["exports", "aurelia-templating"], function (exports, _aureliaTemplating) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

  var Behavior = _aureliaTemplating.Behavior;
  var LayoutPrimary = exports.LayoutPrimary = (function () {
    function LayoutPrimary(element) {
      _classCallCheck(this, LayoutPrimary);

      this.element = element;
    }

    _prototypeProperties(LayoutPrimary, {
      metadata: {
        value: function metadata() {
          return Behavior.customElement("layout-primary").withProperty("router").withProperty("direction");

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
    });

    return LayoutPrimary;
  })();
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});