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
            bgColor: "bg-white",
            textColor: "text-purple"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLEVBQ04sT0FBTyx5Q0FHRixHQUFHOzs7QUFKUixZQUFNLGtCQUFOLE1BQU07O0FBQ04sYUFBTyxrQkFBUCxPQUFPOzs7Ozs7O0FBR0YsU0FBRztBQUVILGlCQUZBLEdBQUcsQ0FFRixNQUFNLEVBQUUsT0FBTzs7Z0NBRmhCLEdBQUc7O0FBSVosY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7QUFDdEIsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7QUFDckIsZ0JBQUksRUFBRSxJQUFJO0FBQ1YsbUJBQU8sRUFBQyxVQUFVO0FBQ2xCLHFCQUFTLEVBQUMsYUFBYTtXQUN4QixDQUFDLENBQUE7QUFDRixjQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1gsZ0JBQUksRUFBQyxLQUFLO0FBQ1YsZ0JBQUksRUFBQyxNQUFNO0FBQ1gsZ0JBQUksRUFBQyxJQUFJO1dBQ1YsQ0FBQTs7QUFFRCxjQUFJLGFBQVUsR0FBRztBQUNmLHFCQUFTLEVBQUUsS0FBSyxFQUNqQixDQUFBOzs7QUFHRCxjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixjQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQTtBQUN2QyxjQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUM5QixrQkFBTSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQztBQUNuQyxrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxFQUFHLFFBQVEsRUFBRSxTQUFTLEVBQVksS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsTUFBSyxPQUFPLEVBQUUsRUFDN0YsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFJLFFBQVEsRUFBRSxjQUFjLEVBQU8sS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQyxNQUFLLE9BQU8sRUFBRSxFQUM1RyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQU8sUUFBUSxFQUFFLFdBQVcsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUcsT0FBTyxFQUFDLE1BQUssT0FBTyxFQUFDLEVBQzdHLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBTSxRQUFRLEVBQUUsaUJBQWlCLEVBQUksS0FBSyxFQUFFLGVBQWUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFHLE9BQU8sRUFBQyxNQUFLLE9BQU8sRUFBQyxFQUNuSCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQVMsUUFBUSxFQUFFLGNBQWMsRUFBTyxLQUFLLEVBQUUsWUFBWSxFQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUcsT0FBTyxFQUFDLE1BQUssT0FBTyxFQUFDLENBQ3BILENBQUMsQ0FBQztXQUNKLENBQUMsQ0FBQzs7O1NBSUo7OzZCQXBDVSxHQUFHO0FBQ1AsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQzthQUFFOzs7Ozs7ZUFEbEMsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9