System.register(["aurelia-templating", "aurelia-framework", "../main"], function (_export) {
  "use strict";

  var Behavior, Container, Inst, _prototypeProperties, _classCallCheck, directions, defaults, AInterface;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aureliaFramework) {
      Container = _aureliaFramework.Container;
    }, function (_main) {
      Inst = _main.Inst;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      directions = {
        column: "is-column",
        row: "is-row"
      };
      defaults = {
        direction: "row"
      };
      AInterface = _export("AInterface", (function () {
        function AInterface(element, inst) {
          _classCallCheck(this, AInterface);

          this.inst = inst;

          this.element = element;
          this.direction = defaults.direction;

        }

        _prototypeProperties(AInterface, {
          metatdata: {
            value: function metatdata() {
              return Behavior.customElement("a-interface").withProperty("direction", "directionChanged").withProperty("router").withProperty("aside").withProperty("toolbar");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element, Inst];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              this.classList = ["a-interface"];
              this.direction && this.classList.push("is-" + this.direction);
              this.addClass.apply(this, this.classList);
            },
            writable: true,
            configurable: true
          },
          directionChanged: {
            value: function directionChanged(value) {
              var lastClass = value === "row" ? "column" : "row";
              this.removeClass(directions[lastClass]);
              this.addClass(directions[value]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImEtaW50ZXJmYWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEsRUFDUixTQUFTLEVBQ1QsSUFBSSx5Q0FFUixVQUFVLEVBSVYsUUFBUSxFQUlDLFVBQVU7OztBQVpmLGNBQVEsc0JBQVIsUUFBUTs7QUFDUixlQUFTLHFCQUFULFNBQVM7O0FBQ1QsVUFBSSxTQUFKLElBQUk7Ozs7Ozs7QUFFUixnQkFBVSxHQUFHO0FBQ2IsY0FBTSxFQUFDLFdBQVc7QUFDbEIsV0FBRyxFQUFJLFFBQVE7T0FDbEI7QUFDRyxjQUFRLEdBQUc7QUFDWCxpQkFBUyxFQUFDLEtBQUs7T0FDbEI7QUFFWSxnQkFBVTtBQWtCUixpQkFsQkYsVUFBVSxDQWtCUCxPQUFPLEVBQUUsSUFBSTtnQ0FsQmhCLFVBQVU7O0FBbUJmLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBOztBQUVoQixjQUFJLENBQUMsT0FBTyxHQUFLLE9BQU8sQ0FBQztBQUN6QixjQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUE7O1NBR3RDOzs2QkF6QlEsVUFBVTtBQUdaLG1CQUFTO21CQUFBLHFCQUFFO0FBRWQscUJBQU8sUUFBUSxDQUNWLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FDNUIsWUFBWSxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxDQUM3QyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQ3RCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FDckIsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2FBQy9COzs7O0FBRU0sZ0JBQU07bUJBQUEsa0JBQUU7QUFDWCxxQkFBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTthQUN6Qjs7Ozs7QUFZRCxjQUFJO21CQUFBLGdCQUFFO0FBQ0Ysa0JBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUNoQyxrQkFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksU0FBTyxJQUFJLENBQUMsU0FBUyxDQUFHLENBQUE7QUFDN0Qsa0JBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7YUFFNUM7Ozs7QUFFRCwwQkFBZ0I7bUJBQUEsMEJBQUMsS0FBSyxFQUFDO0FBQ25CLGtCQUFJLFNBQVMsR0FBRyxBQUFDLEtBQUssS0FBSyxLQUFLLEdBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztBQUNyRCxrQkFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUN4QyxrQkFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNwQzs7OztBQUdELGtCQUFRO21CQUFBLG9CQUFFO0FBRU4sa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFFdkU7Ozs7QUFHRCxxQkFBVzttQkFBQSx1QkFBRTtBQUVULGtCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBRTFFOzs7Ozs7ZUFwRFEsVUFBVSIsImZpbGUiOiJhLWludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=