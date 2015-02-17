System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, defaults, AInterface;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = {
        asideId: "aside1",
        size: "md",
        side: "left",
        open: false,
        fixed: true
      };
      AInterface = _export("AInterface", (function () {
        function AInterface(element) {
          _classCallCheck(this, AInterface);

          console.log(this.toggler);
          this.element = element;
          this.aside = {};
          this.bar = {};
          this.showing = true;
        }

        _prototypeProperties(AInterface, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("a-interface").withProperty("router").withProperty("aside").withProperty("nav").withProperty("footer").withProperty("direction");
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
          attached: {
            value: function attached() {
              this.element.classList.add("is-" + this.direction);
              this.element.classList.add("a-interface");
            },
            writable: true,
            configurable: true
          },
          activate: {
            value: function activate() {
              this.header = "Joel";
              console.log("Nav Activated", this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImEtaW50ZXJmYWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUVRLFFBQVEseUNBR1osUUFBUSxFQVFDLFVBQVU7OztBQVhmLGNBQVEsc0JBQVIsUUFBUTs7Ozs7OztBQUdaLGNBQVEsR0FBRztBQUNiLGVBQU8sRUFBRyxRQUFRO0FBQ2xCLFlBQUksRUFBTSxJQUFJO0FBQ2QsWUFBSSxFQUFNLE1BQU07QUFDaEIsWUFBSSxFQUFNLEtBQUs7QUFDZixhQUFLLEVBQUssSUFBSTtPQUNmO0FBRVksZ0JBQVU7QUFzQlIsaUJBdEJGLFVBQVUsQ0FzQlAsT0FBTztnQ0F0QlYsVUFBVTs7QUF3QlgsaUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ3pCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0FBQ3RCLGNBQUksQ0FBQyxLQUFLLEdBQUssRUFBRSxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxHQUFHLEdBQU8sRUFBRSxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1NBRTFCOzs2QkE5QlEsVUFBVTtBQUdaLGtCQUFRO21CQUFBLG9CQUFFO0FBRVQscUJBQU8sUUFBUSxDQUNWLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FDNUIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUN0QixZQUFZLENBQUMsT0FBTyxDQUFDLENBQ3JCLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDbkIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUN0QixZQUFZLENBQUMsV0FBVyxDQUFDLENBQ3pCO2FBRVo7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRztBQUVSLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFFeEI7Ozs7O0FBWUQsa0JBQVE7bUJBQUEsb0JBQUU7QUFFRixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFPLElBQUksQ0FBQyxTQUFTLENBQUcsQ0FBQTtBQUNsRCxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO2FBRWhEOzs7O0FBR0Qsa0JBQVE7bUJBQUEsb0JBQUU7QUFFRixrQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7QUFDcEIscUJBQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFBO2FBRXpDOzs7Ozs7ZUE3Q1EsVUFBVSIsImZpbGUiOiJhLWludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiIvZGlzdC8ifQ==