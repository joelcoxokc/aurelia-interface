define(["exports", "aurelia-templating"], function (exports, _aureliaTemplating) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

  var Behavior = _aureliaTemplating.Behavior;
  var AiBtnRadioAttachedBehavior = exports.AiBtnRadioAttachedBehavior = (function () {
    function AiBtnRadioAttachedBehavior(element) {
      _classCallCheck(this, AiBtnRadioAttachedBehavior);

      this.element = element;
    }

    _prototypeProperties(AiBtnRadioAttachedBehavior, {
      metadata: {
        value: function metadata() {
          return Behavior.withProperty("value", null, "ai-btn-radio").and(function (x) {
            return x.bindingIsTwoWay();
          }).syncChildren("options", "optionsChanged", "[ai-btn-radio-option]").noView();
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
          this.optionsChanged();
        },
        writable: true,
        configurable: true
      },
      unbind: {
        value: function unbind() {
          var _this = this;
          this.handler = this.selectItem.bind(this);
          this.options.forEach(function (option) {
            option.removeEventListener("click", _this.handler);
          });
        },
        writable: true,
        configurable: true
      },
      optionsChanged: {
        value: function optionsChanged() {
          var _this = this;
          this.unbind();
          this.options.forEach(function (option) {
            option.addEventListener("click", _this.handler, false);
          });
        },
        writable: true,
        configurable: true
      },
      selectItem: {
        value: function selectItem($event) {
          this.value = $event.target.value;
        },
        writable: true,
        configurable: true
      }
    });

    return AiBtnRadioAttachedBehavior;
  })();
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});