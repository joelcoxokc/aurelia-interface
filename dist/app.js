System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, _prototypeProperties, _classCallCheck, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router) {
          _classCallCheck(this, App);

          this.router = router;
          this.router.title = "Aurelia-Interface";
          this.router.configure(function (config) {
            config.title = "Aurelia Interface";
            config.map([{ route: ["", "welcome"], moduleId: "welcome", title: "ai", bar: { size: "sm", bg: "white", color: "purple" } }, { route: "buttons-demo", moduleId: "buttons-demo", title: "Buttons Demo", nav: true, bar: { size: "xl", bg: "purple", color: "white" } }, { route: "tabs-demo", moduleId: "tabs-demo", title: "Tabs Demo", nav: true, bar: { size: "xl", bg: "purple", color: "white" } }]);
          });

          this.aside = {
            open: false };

          this["interface"] = {
            direction: "is-row" };
          this.bar = {
            size: "sm"
          };
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [Router];
            },
            writable: true,
            configurable: true
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLHlDQUdELEdBQUc7OztBQUhSLFlBQU0sa0JBQU4sTUFBTTs7Ozs7OztBQUdELFNBQUc7QUFFSCxpQkFGQSxHQUFHLENBRUYsTUFBTTtnQ0FGUCxHQUFHOztBQUdaLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFBO0FBQ3ZDLGNBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQzlCLGtCQUFNLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDO0FBQ25DLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUcsUUFBUSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFDekcsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFJLFFBQVEsRUFBRSxjQUFjLEVBQUUsT0FBUSxjQUFjLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQ3JJLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBTyxRQUFRLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFDLE9BQU8sRUFBQyxFQUFDLENBQzdILENBQUMsQ0FBQztXQUNKLENBQUMsQ0FBQzs7QUFFSCxjQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1gsZ0JBQUksRUFBQyxLQUFLLEVBQ1gsQ0FBQTs7QUFFRCxjQUFJLGFBQVUsR0FBRztBQUNmLHFCQUFTLEVBQUUsUUFBUSxFQUNwQixDQUFBO0FBQ0QsY0FBSSxDQUFDLEdBQUcsR0FBRztBQUNULGdCQUFJLEVBQUUsSUFBSTtXQUNYLENBQUE7U0FDRjs7NkJBeEJVLEdBQUc7QUFDUCxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7YUFBRTs7Ozs7O2VBRHpCLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==