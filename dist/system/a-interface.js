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

          console.log(this.inst);
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
//# sourceMappingURL=data:application/json;base64,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