System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, directions, oposites, defaults, AiMain;
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
      AiMain = _export("AiMain", (function () {
        function AiMain(element) {
          _classCallCheck(this, AiMain);

          this.element = element;
        }

        _prototypeProperties(AiMain, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-main").withProperty("container", "containerChanged");
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
              this.element.classList.add("ai-main");
            },
            writable: true,
            configurable: true
          },
          containerChanged: {
            value: function containerChanged(hasContainer) {
              this.classList[hasContainer ? "add" : "remove"]("main-container");
            },
            writable: true,
            configurable: true
          }
        });

        return AiMain;
      })());
    }
  };
});