System.register(["aurelia-router", "aurelia-framework", "./aurelia-interface"], function (_export) {
  "use strict";

  var Router, Behaviore, NavBar, NavAside, _prototypeProperties, _classCallCheck, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_aureliaFramework) {
      Behaviore = _aureliaFramework.Behaviore;
    }, function (_aureliaInterface) {
      NavBar = _aureliaInterface.NavBar;
      NavAside = _aureliaInterface.NavAside;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router) {
          _classCallCheck(this, App);

          this.bar = new NavBar();
          this.aside = new NavAside();

          this.router = router;
          this.router.configure(function (config) {
            config.title = "Aurelia";
            config.map([{ route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome" }, { route: "flickr", moduleId: "flickr", nav: true }, { route: "child-router", moduleId: "child-router", nav: true, title: "Child Router" }, { route: "buttons-demo", moduleId: "buttons-demo", nav: true, title: "Buttons Demo" }]);

          });

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLEVBQ04sU0FBUyxFQUNULE1BQU0sRUFBRSxRQUFRLHlDQUVYLEdBQUc7OztBQUpSLFlBQU0sa0JBQU4sTUFBTTs7QUFDTixlQUFTLHFCQUFULFNBQVM7O0FBQ1QsWUFBTSxxQkFBTixNQUFNO0FBQUUsY0FBUSxxQkFBUixRQUFROzs7Ozs7O0FBRVgsU0FBRztBQVVELGlCQVZGLEdBQUcsQ0FVQSxNQUFNO2dDQVZULEdBQUc7O0FBWVIsY0FBSSxDQUFDLEdBQUcsR0FBSyxJQUFJLE1BQU0sRUFBRSxDQUFBO0FBQ3pCLGNBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQTs7QUFFM0IsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ2pCLFVBQUEsTUFBTSxFQUFJO0FBRU4sa0JBQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBRVAsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUMsU0FBUyxDQUFDLEVBQUcsUUFBUSxFQUFFLFNBQVMsRUFBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxTQUFTLEVBQUUsRUFDaEYsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFTLFFBQVEsRUFBRSxRQUFRLEVBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxFQUMvRCxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUcsUUFBUSxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxjQUFjLEVBQUUsRUFDckYsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFHLFFBQVEsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLENBRXpGLENBQUMsQ0FBQzs7V0FHTixDQUFDLENBQUM7O1NBR1Y7OzZCQWpDUSxHQUFHO0FBR0wsZ0JBQU07bUJBQUEsa0JBQUc7QUFFWixxQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBRW5COzs7Ozs7ZUFQUSxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvZGlzdC8ifQ==