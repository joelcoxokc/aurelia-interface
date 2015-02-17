System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, BoundViewFactory, ViewSlot, ViewCompiler, _prototypeProperties, _classCallCheck, NavMe;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
      BoundViewFactory = _aureliaTemplating.BoundViewFactory;
      ViewSlot = _aureliaTemplating.ViewSlot;
      ViewCompiler = _aureliaTemplating.ViewCompiler;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NavMe = _export("NavMe", (function () {
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
      })());
    }
  };
});