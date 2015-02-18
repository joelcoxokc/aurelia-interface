System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, AInterface;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AInterface = _export("AInterface", (function () {
        function AInterface() {
          _classCallCheck(this, AInterface);

          this.direction = "row";
        }

        _prototypeProperties(AInterface, {
          metatdata: {
            value: function metatdata() {
              return Behavior.withProperty("direction");

            },
            writable: true,
            configurable: true
          }
        }, {
          _bind: {
            value: function _bind() {
              this.classList = ["a-interface"];
              this.direction && this.classList.push("is-" + this.direction);
              this.addClass.apply(this.classList);
            },
            writable: true,
            configurable: true
          },
          directionChaned: {
            value: function directionChaned(value) {
              this.addClass(value);
            },
            writable: true,
            configurable: true
          },
          addClass: {
            value: function addClass() {
              this.element.classList.add.apply(this.element.classList, arguments);
            },
            writable: true,
            configurable: true
          },
          removeClass: {
            value: function removeClass() {
              this.element.classList.remove.apply(this.element.classList, arguments);
            },
            writable: true,
            configurable: true
          }
        });

        return AInterface;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImEtaW50ZXJmYWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEseUNBS0gsVUFBVTs7O0FBTGYsY0FBUSxzQkFBUixRQUFROzs7Ozs7O0FBS0gsZ0JBQVU7QUFZUixpQkFaRixVQUFVO2dDQUFWLFVBQVU7O0FBY2YsY0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7U0FFekI7OzZCQWhCUSxVQUFVO0FBR1osbUJBQVM7bUJBQUEscUJBQUU7QUFFZCxxQkFBTyxRQUFRLENBQ1YsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFBOzthQUdqQzs7Ozs7QUFTRCxlQUFLO21CQUFBLGlCQUFFO0FBQ0gsa0JBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUNoQyxrQkFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksU0FBTyxJQUFJLENBQUMsU0FBUyxDQUFHLENBQUE7QUFDN0Qsa0JBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTthQUV0Qzs7OztBQUVELHlCQUFlO21CQUFBLHlCQUFDLEtBQUssRUFBQztBQUNsQixrQkFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4Qjs7OztBQUdELGtCQUFRO21CQUFBLG9CQUFFO0FBRU4sa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFFdkU7Ozs7QUFHRCxxQkFBVzttQkFBQSx1QkFBRTtBQUVULGtCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBRTFFOzs7Ozs7ZUF6Q1EsVUFBVSIsImZpbGUiOiJhLWludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=