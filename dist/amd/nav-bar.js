define(["exports", "aurelia-templating"], function (exports, _aureliaTemplating) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

  var Behavior = _aureliaTemplating.Behavior;
  var NavBar = exports.NavBar = (function () {
    function NavBar(element) {
      _classCallCheck(this, NavBar);

      this.element = element;
      this.isColumn = true;
    }

    _prototypeProperties(NavBar, {
      metadata: {
        value: function metadata() {
          return Behavior.withProperty("router");
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

    return NavBar;
  })();
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});