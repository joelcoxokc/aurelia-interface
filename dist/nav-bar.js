System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, NavBar;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NavBar = _export("NavBar", (function () {
        function NavBar(element) {
          _classCallCheck(this, NavBar);

          this.element = element;
          this.isColumn = true;
        }

        _prototypeProperties(NavBar, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("nav-bar").withProperty("router");
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
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FHSCxNQUFNOzs7QUFIWCxjQUFRLHNCQUFSLFFBQVE7Ozs7Ozs7QUFHSCxZQUFNO0FBa0JKLGlCQWxCRixNQUFNLENBa0JILE9BQU87Z0NBbEJWLE1BQU07O0FBb0JYLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0FBQ3RCLGNBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO1NBRXZCOzs2QkF2QlEsTUFBTTtBQUVSLGtCQUFRO21CQUFBLG9CQUFFO0FBRWIscUJBQU8sUUFBUSxDQUNWLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FDeEIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBRTlCOzs7O0FBR00sZ0JBQU07bUJBQUEsa0JBQUU7QUFFWCxxQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBRW5COzs7Ozs7ZUFmUSxNQUFNIiwiZmlsZSI6Im5hdi1iYXIuanMiLCJzb3VyY2VSb290IjoiL2Rpc3QvIn0=