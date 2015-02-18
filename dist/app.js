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
            config.map([{ route: ["", "welcome"], moduleId: "welcome", title: "ai", toolbar: { size: "sm", bgColor: "white", textColor: "purple" } }, { route: "buttons-demo", moduleId: "buttons-demo", title: "ai-Btn", nav: true, toolbar: { size: "xl", bgColor: "purple", textColor: "white" } }, { route: "tabs-demo", moduleId: "tabs-demo", title: "ai-Tabs", nav: true, toolbar: { size: "xl", bgColor: "purple", textColor: "white" } }, { route: "components", moduleId: "components", title: "ai-Components", nav: true, toolbar: { size: "xl", bgColor: "purple", textColor: "white" } }, { route: "layouts", moduleId: "layouts", title: "ai-Layouts", nav: true, toolbar: { size: "xl", bgColor: "purple", textColor: "white" } }]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLHlDQUdELEdBQUc7OztBQUhSLFlBQU0sa0JBQU4sTUFBTTs7Ozs7OztBQUdELFNBQUc7QUFFSCxpQkFGQSxHQUFHLENBRUYsTUFBTTtnQ0FGUCxHQUFHOztBQUdaLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFBO0FBQ3ZDLGNBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQzlCLGtCQUFNLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDO0FBQ25DLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUcsUUFBUSxFQUFFLFNBQVMsRUFBTyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFDNUgsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFJLFFBQVEsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFDM0ksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFPLFFBQVEsRUFBRSxXQUFXLEVBQUssS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFHLE9BQU8sRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsT0FBTyxFQUFDLEVBQUMsRUFDM0ksRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFNLFFBQVEsRUFBRSxZQUFZLEVBQUksS0FBSyxFQUFFLGVBQWUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFHLE9BQU8sRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsT0FBTyxFQUFDLEVBQUMsRUFDakosRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFTLFFBQVEsRUFBRSxTQUFTLEVBQU8sS0FBSyxFQUFFLFlBQVksRUFBSyxHQUFHLEVBQUUsSUFBSSxFQUFHLE9BQU8sRUFBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsT0FBTyxFQUFDLEVBQUMsQ0FDbEosQ0FBQyxDQUFDO1dBQ0osQ0FBQyxDQUFDOztBQUVILGNBQUksQ0FBQyxLQUFLLEdBQUc7QUFDWCxnQkFBSSxFQUFDLEtBQUs7QUFDVixnQkFBSSxFQUFDLE1BQU07QUFDWCxnQkFBSSxFQUFDLElBQUk7V0FDVixDQUFBOztBQUVELGNBQUksYUFBVSxHQUFHO0FBQ2YscUJBQVMsRUFBRSxLQUFLLEVBQ2pCLENBQUE7QUFDRCxjQUFJLENBQUMsT0FBTyxHQUFHO0FBQ2IsZ0JBQUksRUFBRSxJQUFJO0FBQ1YsbUJBQU8sRUFBQyxPQUFPO0FBQ2YscUJBQVMsRUFBQyxRQUFRO1dBQ25CLENBQUE7U0FDRjs7NkJBOUJVLEdBQUc7QUFDUCxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7YUFBRTs7Ozs7O2VBRHpCLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==