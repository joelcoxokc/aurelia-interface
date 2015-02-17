System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, LayoutPrimary;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      LayoutPrimary = _export("LayoutPrimary", (function () {
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
      })());
    }
  };
});