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
        direction: "column"
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
              this.routeView = document.body.getElementsByTagName("router-view");

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