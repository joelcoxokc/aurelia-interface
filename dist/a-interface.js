System.register(["aurelia-framework", "aurelia-templating", "./aside", "./bar", "./message"], function (_export) {
  "use strict";

  var All, Behavior, Aside, Bar, MsgPublisher, MsgSubscriber, _prototypeProperties, _classCallCheck, defaults, AInterfaceCustomElement;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImEtaW50ZXJmYWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLEdBQUcsRUFDSCxRQUFRLEVBQ1IsS0FBSyxFQUNMLEdBQUcsRUFDSCxZQUFZLEVBQ1osYUFBYSx5Q0FFakIsUUFBUSxFQVFDLHVCQUF1Qjs7O0FBZjVCLFNBQUcscUJBQUgsR0FBRzs7QUFDSCxjQUFRLHNCQUFSLFFBQVE7O0FBQ1IsV0FBSyxVQUFMLEtBQUs7O0FBQ0wsU0FBRyxRQUFILEdBQUc7O0FBQ0gsa0JBQVksWUFBWixZQUFZO0FBQ1osbUJBQWEsWUFBYixhQUFhOzs7Ozs7O0FBRWpCLGNBQVEsR0FBRztBQUNiLGVBQU8sRUFBRyxRQUFRO0FBQ2xCLFlBQUksRUFBTSxJQUFJO0FBQ2QsWUFBSSxFQUFNLE1BQU07QUFDaEIsWUFBSSxFQUFNLEtBQUs7QUFDZixhQUFLLEVBQUssSUFBSTtPQUNmO0FBRVksNkJBQXVCO0FBcUJyQixpQkFyQkYsdUJBQXVCLENBcUJwQixPQUFPLEVBQUUsR0FBRztnQ0FyQmYsdUJBQXVCOztBQXVCNUIsaUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ3pCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0FBQ3RCLGNBQUksQ0FBQyxLQUFLLEdBQUssRUFBRSxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxHQUFHLEdBQU8sRUFBRSxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxLQUFLLEdBQUssSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7O0FBRWxDLGNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBOztTQUd0Qjs7NkJBaENRLHVCQUF1QjtBQUV6QixrQkFBUTttQkFBQSxvQkFBRTtBQUViLHFCQUFPLFFBQVEsQ0FFVixZQUFZLENBQUMsUUFBUSxDQUFDLENBQ3RCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FDckIsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUNuQixZQUFZLENBQUMsUUFBUSxDQUFDLENBQ3RCLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FDekI7YUFFUjs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFHO0FBRVoscUJBQU8sQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUM7YUFFeEI7Ozs7O0FBZUQsa0JBQVE7bUJBQUEsb0JBQUU7QUFDTixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFPLElBQUksQ0FBQyxTQUFTLENBQUcsQ0FBQTtBQUNsRCxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO2FBQzVDOzs7O0FBR0Qsa0JBQVE7bUJBQUEsb0JBQUU7QUFDTixrQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7QUFDcEIscUJBQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFBO2FBRXJDOzs7Ozs7ZUE1Q1EsdUJBQXVCIiwiZmlsZSI6ImEtaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Ii9kaXN0LyJ9