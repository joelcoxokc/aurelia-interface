/* */ 
"format register";
define(["exports","aurelia-router","./route-loader","./router-view"], function (exports, _aureliaRouter, _routeLoader, _routerView) {
  "use strict";

  var Router = _aureliaRouter.Router;
  var AppRouter = _aureliaRouter.AppRouter;
  var RouteLoader = _aureliaRouter.RouteLoader;
  var TemplatingRouteLoader = _routeLoader.TemplatingRouteLoader;
  var RouterView = _routerView.RouterView;


  function install(aurelia) {
    aurelia.withSingleton(RouteLoader, TemplatingRouteLoader).withSingleton(Router, AppRouter).withResources(RouterView);
  }

  exports.TemplatingRouteLoader = TemplatingRouteLoader;
  exports.RouterView = RouterView;
  exports.install = install;
});