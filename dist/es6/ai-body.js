System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, directions, oposites, defaults, AiBody;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      directions = {
        row: "is-row",
        column: "is-column"
      };
      oposites = {
        column: directions.row,
        row: directions.column
      };
      defaults = {
        direction: "row"
      };
      AiBody = _export("AiBody", (function () {
        function AiBody(element) {
          _classCallCheck(this, AiBody);

          this.element = element;
        }

        _prototypeProperties(AiBody, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-body").withProperty("direction", "directionChanged");
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
          bind: {
            value: function bind() {
              this.element.classList.add("ai-body");
            },
            writable: true,
            configurable: true
          },
          directionChanged: {
            value: function directionChanged(newDirection) {
              newDirection = newDirection || defaults.direction;
              this.classList.remove(directions[newDirection]);
              this.classList.add(oposites[newDirection]);
            },
            writable: true,
            configurable: true
          }
        });

        return AiBody;
      })());
    }
  };
});