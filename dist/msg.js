System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, Msg;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Msg = _export("Msg", (function () {
        function Msg() {
          _classCallCheck(this, Msg);
        }

        _prototypeProperties(Msg, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("router");
            },
            writable: true,
            configurable: true
          }
        });

        return Msg;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLHlDQUVILEdBQUc7OztBQUZSLGNBQVEscUJBQVIsUUFBUTs7Ozs7OztBQUVILFNBQUc7aUJBQUgsR0FBRztnQ0FBSCxHQUFHOzs7NkJBQUgsR0FBRztBQUNQLGtCQUFRO21CQUFBLG9CQUFFO0FBQUUscUJBQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUFFOzs7Ozs7ZUFEakQsR0FBRyIsImZpbGUiOiJtc2cuanMiLCJzb3VyY2VSb290IjoiL2Rpc3QvIn0=