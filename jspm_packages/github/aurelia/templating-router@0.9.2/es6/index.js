/* */ 
"format register";
import {Router, AppRouter, RouteLoader} from 'aurelia-router';
import {TemplatingRouteLoader} from './route-loader';
import {RouterView} from './router-view';

function install(aurelia){
  aurelia.withSingleton(RouteLoader, TemplatingRouteLoader)
         .withSingleton(Router, AppRouter)
         .withResources(RouterView);
}

export {
  TemplatingRouteLoader,
  RouterView,
  install
};