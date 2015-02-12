System.register(["aurelia-templating", "./aside", "./bar"], function (_export) {
  "use strict";

  var Behavior, Aside, Bar, _prototypeProperties, _classCallCheck, defaults, AInterfaceCustomElement;
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
      AInterfaceCustomElement = _export("AInterfaceCustomElement", (function () {
        function AInterfaceCustomElement(element, bar) {
          _classCallCheck(this, AInterfaceCustomElement);

          console.log(this.toggler);
          this.element = element;
          this.aside = {};
          this.bar = {};
          this.aside = new Aside(defaults);

          this.showing = true;

        }

        _prototypeProperties(AInterfaceCustomElement, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("router").withProperty("aside").withProperty("nav").withProperty("footer").withProperty("direction");
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

        return AInterfaceCustomElement;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImEtaW50ZXJmYWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEsRUFDUixLQUFLLEVBQ0wsR0FBRyx5Q0FFUCxRQUFRLEVBUUMsdUJBQXVCOzs7QUFaNUIsY0FBUSxzQkFBUixRQUFROztBQUNSLFdBQUssVUFBTCxLQUFLOztBQUNMLFNBQUcsUUFBSCxHQUFHOzs7Ozs7O0FBRVAsY0FBUSxHQUFHO0FBQ2IsZUFBTyxFQUFHLFFBQVE7QUFDbEIsWUFBSSxFQUFNLElBQUk7QUFDZCxZQUFJLEVBQU0sTUFBTTtBQUNoQixZQUFJLEVBQU0sS0FBSztBQUNmLGFBQUssRUFBSyxJQUFJO09BQ2Y7QUFFWSw2QkFBdUI7QUFxQnJCLGlCQXJCRix1QkFBdUIsQ0FxQnBCLE9BQU8sRUFBRSxHQUFHO2dDQXJCZix1QkFBdUI7O0FBdUI1QixpQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDekIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7QUFDdEIsY0FBSSxDQUFDLEtBQUssR0FBSyxFQUFFLENBQUM7QUFDbEIsY0FBSSxDQUFDLEdBQUcsR0FBTyxFQUFFLENBQUM7QUFDbEIsY0FBSSxDQUFDLEtBQUssR0FBSyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQTs7QUFFbEMsY0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7O1NBR3RCOzs2QkFoQ1EsdUJBQXVCO0FBRXpCLGtCQUFRO21CQUFBLG9CQUFFO0FBRWIscUJBQU8sUUFBUSxDQUVWLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FDdEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUNyQixZQUFZLENBQUMsS0FBSyxDQUFDLENBQ25CLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FDdEIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUN6QjthQUVSOzs7O0FBRU0sZ0JBQU07bUJBQUEsa0JBQUc7QUFFWixxQkFBTyxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsQ0FBQzthQUV4Qjs7Ozs7QUFlRCxrQkFBUTttQkFBQSxvQkFBRTtBQUNOLGtCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBRyxDQUFBO0FBQ2xELGtCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7YUFDNUM7Ozs7QUFHRCxrQkFBUTttQkFBQSxvQkFBRTtBQUNOLGtCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtBQUNwQixxQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUE7YUFFckM7Ozs7OztlQTVDUSx1QkFBdUIiLCJmaWxlIjoiYS1pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290IjoiL2Rpc3QvIn0=