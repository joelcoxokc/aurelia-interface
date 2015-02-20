System.register(["aurelia-router", "./system/toolbar"], function (_export) {
  "use strict";

  var Router, Toolbar, _prototypeProperties, _classCallCheck, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_systemToolbar) {
      Toolbar = _systemToolbar.Toolbar;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router, toolbar) {
          var _this = this;
          _classCallCheck(this, App);

          this.toolbar = toolbar;
          this.toolbar.configure({
            size: "sm",
            bgColor: "white",
            textColor: "purple"
          });
          this.aside = {
            open: false,
            side: "left",
            size: "md"
          };

          this["interface"] = {
            direction: "row" };


          this.router = router;
          this.router.title = "Aurelia-Interface";
          this.router.configure(function (config) {
            config.title = "Aurelia Interface";
            config.map([{ route: ["", "welcome"], moduleId: "welcome", title: "ai", toolbar: _this.toolbar }, { route: "buttons-demo", moduleId: "buttons-demo", title: "ai-Btn", nav: true, toolbar: _this.toolbar }, { route: "tabs-demo", moduleId: "tabs-demo", title: "ai-Tabs", nav: true, toolbar: _this.toolbar }, { route: "components", moduleId: "components-demo", title: "ai-Components", nav: true, toolbar: _this.toolbar }, { route: "layouts", moduleId: "layouts-demo", title: "ai-Layouts", nav: true, toolbar: _this.toolbar }]);
          });


        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [Router, Toolbar];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLEVBQ04sT0FBTyx5Q0FHRixHQUFHOzs7QUFKUixZQUFNLGtCQUFOLE1BQU07O0FBQ04sYUFBTyxrQkFBUCxPQUFPOzs7Ozs7O0FBR0YsU0FBRztBQUVILGlCQUZBLEdBQUcsQ0FFRixNQUFNLEVBQUUsT0FBTzs7Z0NBRmhCLEdBQUc7O0FBSVosY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7QUFDdEIsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7QUFDckIsZ0JBQUksRUFBRSxJQUFJO0FBQ1YsbUJBQU8sRUFBQyxPQUFPO0FBQ2YscUJBQVMsRUFBQyxRQUFRO1dBQ25CLENBQUMsQ0FBQTtBQUNGLGNBQUksQ0FBQyxLQUFLLEdBQUc7QUFDWCxnQkFBSSxFQUFDLEtBQUs7QUFDVixnQkFBSSxFQUFDLE1BQU07QUFDWCxnQkFBSSxFQUFDLElBQUk7V0FDVixDQUFBOztBQUVELGNBQUksYUFBVSxHQUFHO0FBQ2YscUJBQVMsRUFBRSxLQUFLLEVBQ2pCLENBQUE7OztBQUdELGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFBO0FBQ3ZDLGNBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQzlCLGtCQUFNLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDO0FBQ25DLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUcsUUFBUSxFQUFFLFNBQVMsRUFBWSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQyxNQUFLLE9BQU8sRUFBRSxFQUM3RixFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUksUUFBUSxFQUFFLGNBQWMsRUFBTyxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDLE1BQUssT0FBTyxFQUFFLEVBQzVHLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBTyxRQUFRLEVBQUUsV0FBVyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRyxPQUFPLEVBQUMsTUFBSyxPQUFPLEVBQUMsRUFDN0csRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFNLFFBQVEsRUFBRSxpQkFBaUIsRUFBSSxLQUFLLEVBQUUsZUFBZSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUcsT0FBTyxFQUFDLE1BQUssT0FBTyxFQUFDLEVBQ25ILEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBUyxRQUFRLEVBQUUsY0FBYyxFQUFPLEtBQUssRUFBRSxZQUFZLEVBQUssR0FBRyxFQUFFLElBQUksRUFBRyxPQUFPLEVBQUMsTUFBSyxPQUFPLEVBQUMsQ0FDcEgsQ0FBQyxDQUFDO1dBQ0osQ0FBQyxDQUFDOzs7U0FJSjs7NkJBcENVLEdBQUc7QUFDUCxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQUU7Ozs7OztlQURsQyxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=