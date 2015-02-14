/* */ 
System.register(["aurelia-router", "./route-loader", "./router-view"], function (_export) {
  "use strict";

  var Router, AppRouter, RouteLoader, TemplatingRouteLoader, RouterView;


  function install(aurelia) {
    aurelia.withSingleton(RouteLoader, TemplatingRouteLoader).withSingleton(Router, AppRouter).withResources(RouterView);
  }

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
      AppRouter = _aureliaRouter.AppRouter;
      RouteLoader = _aureliaRouter.RouteLoader;
    }, function (_routeLoader) {
      TemplatingRouteLoader = _routeLoader.TemplatingRouteLoader;
    }, function (_routerView) {
      RouterView = _routerView.RouterView;
    }],
    execute: function () {
      _export("TemplatingRouteLoader", TemplatingRouteLoader);

      _export("RouterView", RouterView);

      _export("install", install);
    }
  };
});