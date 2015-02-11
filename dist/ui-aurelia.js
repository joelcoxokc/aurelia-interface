System.register(["aurelia-framework", "aurelia-templating", "./aside", "./bar", "./message"], function (_export) {
  "use strict";

  var All, Behavior, Aside, Bar, MsgPublisher, MsgSubscriber, _prototypeProperties, _classCallCheck, defaults, UiAureliaCustomElement;
  return {
    setters: [function (_aureliaFramework) {
      All = _aureliaFramework.All;
    }, function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aside) {
      Aside = _aside.Aside;
    }, function (_bar) {
      Bar = _bar.Bar;
    }, function (_message) {
      MsgPublisher = _message.MsgPublisher;
      MsgSubscriber = _message.MsgSubscriber;
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
      UiAureliaCustomElement = _export("UiAureliaCustomElement", (function () {
        function UiAureliaCustomElement(element, bar, pub, sub) {
          _classCallCheck(this, UiAureliaCustomElement);

          this.element = element;
          this.pub = pub;
          this.sub = sub;
          this.aside = {};
          this.bar = {};
          this.aside = new Aside(defaults);

        }

        _prototypeProperties(UiAureliaCustomElement, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("router").withProperty("aside").withProperty("nav").withProperty("footer");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element, Bar, MsgPublisher, MsgSubscriber];
            },
            writable: true,
            configurable: true
          }
        }, {
          attached: {
            value: function attached() {
              this.element.classList.add("ui-aurelia");
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

        return UiAureliaCustomElement;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLWF1cmVsaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsR0FBRyxFQUNILFFBQVEsRUFDUixLQUFLLEVBQ0wsR0FBRyxFQUNILFlBQVksRUFDWixhQUFhLHlDQUdqQixRQUFRLEVBUUMsc0JBQXNCOzs7QUFoQjNCLFNBQUcscUJBQUgsR0FBRzs7QUFDSCxjQUFRLHNCQUFSLFFBQVE7O0FBQ1IsV0FBSyxVQUFMLEtBQUs7O0FBQ0wsU0FBRyxRQUFILEdBQUc7O0FBQ0gsa0JBQVksWUFBWixZQUFZO0FBQ1osbUJBQWEsWUFBYixhQUFhOzs7Ozs7O0FBR2pCLGNBQVEsR0FBRztBQUNiLGVBQU8sRUFBRyxRQUFRO0FBQ2xCLFlBQUksRUFBTSxJQUFJO0FBQ2QsWUFBSSxFQUFNLE1BQU07QUFDaEIsWUFBSSxFQUFNLEtBQUs7QUFDZixhQUFLLEVBQUssSUFBSTtPQUNmO0FBRVksNEJBQXNCO0FBb0JwQixpQkFwQkYsc0JBQXNCLENBb0JuQixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO2dDQXBCekIsc0JBQXNCOztBQXNCM0IsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7QUFDdEIsY0FBSSxDQUFDLEdBQUcsR0FBTyxHQUFHLENBQUE7QUFDbEIsY0FBSSxDQUFDLEdBQUcsR0FBTyxHQUFHLENBQUE7QUFDbEIsY0FBSSxDQUFDLEtBQUssR0FBSyxFQUFFLENBQUM7QUFDbEIsY0FBSSxDQUFDLEdBQUcsR0FBTyxFQUFFLENBQUM7QUFDbEIsY0FBSSxDQUFDLEtBQUssR0FBSyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQTs7U0FHckM7OzZCQTlCUSxzQkFBc0I7QUFFeEIsa0JBQVE7bUJBQUEsb0JBQUU7QUFFYixxQkFBTyxRQUFRLENBRVYsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUN0QixZQUFZLENBQUMsT0FBTyxDQUFDLENBQ3JCLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FDbkIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUN0QjthQUVSOzs7O0FBRU0sZ0JBQU07bUJBQUEsa0JBQUc7QUFFWixxQkFBTyxDQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2FBRXJEOzs7OztBQWNELGtCQUFRO21CQUFBLG9CQUFFO0FBQ04sa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTthQUUzQzs7OztBQUVELGtCQUFRO21CQUFBLG9CQUFFO0FBRU4sa0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0FBQ3BCLHFCQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQTthQUVyQzs7Ozs7O2VBMUNRLHNCQUFzQiIsImZpbGUiOiJ1aS1hdXJlbGlhLmpzIiwic291cmNlUm9vdCI6Ii9kaXN0LyJ9