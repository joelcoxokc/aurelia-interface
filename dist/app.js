System.register(["aurelia-router", "aurelia-interface@master"], function (_export) {
  "use strict";

  var Router, NavBar, _prototypeProperties, _classCallCheck, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_aureliaInterfaceMaster) {
      NavBar = _aureliaInterfaceMaster.NavBar;
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
            config.map([{ route: ["", "welcome"], moduleId: "welcome", title: "ai", bar: { size: "sm" } }, { route: "buttons-demo", moduleId: "buttons-demo", title: "Buttons Demo", nav: true, bar: { size: "xl" } }, { route: "tabs-demo", moduleId: "tabs-demo", title: "Tabs Demo", nav: true, bar: { size: "xl" } }]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLEVBQ04sTUFBTSx5Q0FHRCxHQUFHOzs7QUFKUixZQUFNLGtCQUFOLE1BQU07O0FBQ04sWUFBTSwyQkFBTixNQUFNOzs7Ozs7O0FBR0QsU0FBRztBQUVILGlCQUZBLEdBQUcsQ0FFRixNQUFNO2dDQUZQLEdBQUc7O0FBR1osY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUE7QUFDdkMsY0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDOUIsa0JBQU0sQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUM7QUFDbkMsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBRyxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQzdFLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBSSxRQUFRLEVBQUUsY0FBYyxFQUFFLE9BQVEsY0FBYyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQ3pHLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBTyxRQUFRLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLEVBQUMsQ0FDbEcsQ0FBQyxDQUFDO1dBQ0osQ0FBQyxDQUFDOztBQUVILGNBQUksQ0FBQyxLQUFLLEdBQUc7QUFDWCxnQkFBSSxFQUFDLEtBQUssRUFDWCxDQUFBOztBQUVELGNBQUksYUFBVSxHQUFHO0FBQ2YscUJBQVMsRUFBRSxRQUFRLEVBQ3BCLENBQUE7QUFDRCxjQUFJLENBQUMsR0FBRyxHQUFHO0FBQ1QsZ0JBQUksRUFBRSxJQUFJO1dBQ1gsQ0FBQTtTQUNGOzs2QkF4QlUsR0FBRztBQUNQLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUFFOzs7Ozs7ZUFEekIsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==