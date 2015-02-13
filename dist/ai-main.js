System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, UiMain;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      UiMain = _export("UiMain", (function () {
        function UiMain(element) {
          _classCallCheck(this, UiMain);

          this.element = element;
        }

        _prototypeProperties(UiMain, {
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
        }, {
          attahced: {
            value: function attahced() {
              this.element.classList.add("ai-body");
            },
            writable: true,
            configurable: true
          }
        });

        return UiMain;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLW1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FHSCxNQUFNOzs7QUFIWCxjQUFRLHNCQUFSLFFBQVE7Ozs7Ozs7QUFHSCxZQUFNO0FBa0JKLGlCQWxCRixNQUFNLENBa0JILE9BQU87Z0NBbEJWLE1BQU07O0FBb0JYLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1NBRXpCOzs2QkF0QlEsTUFBTTtBQUVSLGtCQUFRO21CQUFBLG9CQUFFO0FBRWIscUJBQU8sUUFBUSxDQUNWLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FDeEIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBRTlCOzs7O0FBR00sZ0JBQU07bUJBQUEsa0JBQUU7QUFFWCxxQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBRW5COzs7OztBQVNELGtCQUFRO21CQUFBLG9CQUFFO0FBRU4sa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTthQUV4Qzs7Ozs7O2VBNUJRLE1BQU0iLCJmaWxlIjoiYWktbWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvZGlzdC8ifQ==