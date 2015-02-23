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