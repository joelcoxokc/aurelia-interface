System.register(["aurelia-templating", "./aside", "./bar"], function (_export) {
  "use strict";

  var Behavior, Aside, Bar, _prototypeProperties, _classCallCheck, defaults, AInterface;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aside) {
      Aside = _aside.Aside;
    }, function (_bar) {
      Bar = _bar.Bar;
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
        function AInterface(element, bar) {
          _classCallCheck(this, AInterface);

          console.log(this.toggler);
          this.element = element;
          this.aside = {};
          this.bar = {};
          this.aside = new Aside(defaults);
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
              return [Element, Bar];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImEtaW50ZXJmYWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUVRLFFBQVEsRUFDUixLQUFLLEVBQ0wsR0FBRyx5Q0FHUCxRQUFRLEVBUUMsVUFBVTs7O0FBYmYsY0FBUSxzQkFBUixRQUFROztBQUNSLFdBQUssVUFBTCxLQUFLOztBQUNMLFNBQUcsUUFBSCxHQUFHOzs7Ozs7O0FBR1AsY0FBUSxHQUFHO0FBQ2IsZUFBTyxFQUFHLFFBQVE7QUFDbEIsWUFBSSxFQUFNLElBQUk7QUFDZCxZQUFJLEVBQU0sTUFBTTtBQUNoQixZQUFJLEVBQU0sS0FBSztBQUNmLGFBQUssRUFBSyxJQUFJO09BQ2Y7QUFFWSxnQkFBVTtBQXNCUixpQkF0QkYsVUFBVSxDQXNCUCxPQUFPLEVBQUUsR0FBRztnQ0F0QmYsVUFBVTs7QUF3QlgsaUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ3pCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0FBQ3RCLGNBQUksQ0FBQyxLQUFLLEdBQUssRUFBRSxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxHQUFHLEdBQU8sRUFBRSxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxLQUFLLEdBQUssSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDbEMsY0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7U0FFMUI7OzZCQS9CUSxVQUFVO0FBR1osa0JBQVE7bUJBQUEsb0JBQUU7QUFFVCxxQkFBTyxRQUFRLENBQ1YsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUM1QixZQUFZLENBQUMsUUFBUSxDQUFDLENBQ3RCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FDckIsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUNuQixZQUFZLENBQUMsUUFBUSxDQUFDLENBQ3RCLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FDekI7YUFFWjs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFHO0FBRVIscUJBQU8sQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUM7YUFFNUI7Ozs7O0FBYUQsa0JBQVE7bUJBQUEsb0JBQUU7QUFFRixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFPLElBQUksQ0FBQyxTQUFTLENBQUcsQ0FBQTtBQUNsRCxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO2FBRWhEOzs7O0FBR0Qsa0JBQVE7bUJBQUEsb0JBQUU7QUFFRixrQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7QUFDcEIscUJBQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFBO2FBRXpDOzs7Ozs7ZUE5Q1EsVUFBVSIsImZpbGUiOiJhLWludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiIvZGlzdC8ifQ==