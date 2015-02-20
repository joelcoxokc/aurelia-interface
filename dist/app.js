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
            config.map([{ route: ["", "welcome"], moduleId: "welcome", title: "ai", toolbar: { size: "xl", bgColor: "bg-purple", textColor: "text-white" } }, { route: "buttons-demo", moduleId: "buttons-demo", title: "ai-Btn", nav: true, toolbar: { size: "sm", bgColor: "bg-white", textColor: "text-purple" } }, { route: "tabs-demo", moduleId: "tabs-demo", title: "ai-Tabs", nav: true, toolbar: { size: "sm", bgColor: "bg-white", textColor: "text-purple" } }, { route: "components", moduleId: "components", title: "ai-Components", nav: true, toolbar: { size: "sm", bgColor: ["bg-teal", "accent-4"], textColor: "text-white" } }, { route: "layouts", moduleId: "layouts", title: "ai-Layouts", nav: true, toolbar: { size: "sm", bgColor: "bg-white", textColor: "text-purple" } }]);
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
//# sourceMappingURL=data:application/json;base64,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