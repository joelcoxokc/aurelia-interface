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
            config.map([{ route: ["", "welcome"], moduleId: "welcome", title: "ai", toolbar: { size: "sm", bgColor: "purple", textColor: "purple" } }, { route: "buttons-demo", moduleId: "buttons-demo", title: "Buttons Demo", nav: true, toolbar: { size: "xl", bgColor: "purple", textColor: "white" } }, { route: "tabs-demo", moduleId: "tabs-demo", title: "Tabs Demo", nav: true, toolbar: { size: "xl", bgColor: "purple", textColor: "white" } }, { route: "components", moduleId: "components", title: "aiComponents", nav: true, toolbar: { size: "sm", bgColor: "purple", textColor: "white" } }]);
          });

          this.aside = {
            open: false,
            side: "left",
            size: "md"
          };

          this["interface"] = {
            direction: "row" };
          this.toolbar = {
            size: "sm",
            bgColor: "white",
            textColor: "purple"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLHlDQUdELEdBQUc7OztBQUhSLFlBQU0sa0JBQU4sTUFBTTs7Ozs7OztBQUdELFNBQUc7QUFFSCxpQkFGQSxHQUFHLENBRUYsTUFBTTtnQ0FGUCxHQUFHOztBQUdaLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFBO0FBQ3ZDLGNBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQzlCLGtCQUFNLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDO0FBQ25DLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUcsUUFBUSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFDdkgsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFJLFFBQVEsRUFBRSxjQUFjLEVBQUUsT0FBUSxjQUFjLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQ2xKLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBTyxRQUFRLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRyxPQUFPLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLE9BQU8sRUFBQyxFQUFDLEVBQ3pJLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBTSxRQUFRLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRyxPQUFPLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLE9BQU8sRUFBQyxFQUFDLENBQzlJLENBQUMsQ0FBQztXQUNKLENBQUMsQ0FBQzs7QUFFSCxjQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1gsZ0JBQUksRUFBQyxLQUFLO0FBQ1YsZ0JBQUksRUFBQyxNQUFNO0FBQ1gsZ0JBQUksRUFBQyxJQUFJO1dBQ1YsQ0FBQTs7QUFFRCxjQUFJLGFBQVUsR0FBRztBQUNmLHFCQUFTLEVBQUUsS0FBSyxFQUNqQixDQUFBO0FBQ0QsY0FBSSxDQUFDLE9BQU8sR0FBRztBQUNiLGdCQUFJLEVBQUUsSUFBSTtBQUNWLG1CQUFPLEVBQUMsT0FBTztBQUNmLHFCQUFTLEVBQUMsUUFBUTtXQUNuQixDQUFBO1NBQ0Y7OzZCQTdCVSxHQUFHO0FBQ1AsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQUU7Ozs7OztlQUR6QixHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=