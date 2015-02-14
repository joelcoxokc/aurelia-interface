/* */ 
"format register";
"use strict";

var Router = require("aurelia-router").Router;
var AppRouter = require("aurelia-router").AppRouter;
var RouteLoader = require("aurelia-router").RouteLoader;
var TemplatingRouteLoader = require("./route-loader").TemplatingRouteLoader;
var RouterView = require("./router-view").RouterView;


function install(aurelia) {
  aurelia.withSingleton(RouteLoader, TemplatingRouteLoader).withSingleton(Router, AppRouter).withResources(RouterView);
}

exports.TemplatingRouteLoader = TemplatingRouteLoader;
exports.RouterView = RouterView;
exports.install = install;