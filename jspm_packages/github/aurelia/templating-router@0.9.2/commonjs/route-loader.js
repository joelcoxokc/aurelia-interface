/* */ 
"format register";
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var _inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) subClass.__proto__ = superClass;
};

var CompositionEngine = require("aurelia-templating").CompositionEngine;
var RouteLoader = require("aurelia-router").RouteLoader;
var Router = require("aurelia-router").Router;
var relativeToFile = require("aurelia-path").relativeToFile;
var Origin = require("aurelia-metadata").Origin;
var TemplatingRouteLoader = (function (RouteLoader) {
  function TemplatingRouteLoader(compositionEngine) {
    this.compositionEngine = compositionEngine;
  }

  _inherits(TemplatingRouteLoader, RouteLoader);

  _prototypeProperties(TemplatingRouteLoader, {
    inject: {
      value: function inject() {
        return [CompositionEngine];
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  }, {
    loadRoute: {
      value: function loadRoute(router, config) {
        var childContainer = router.container.createChild(),
            instruction = {
          viewModel: relativeToFile(config.moduleId, Origin.get(router.container.viewModel.constructor).moduleId),
          childContainer: childContainer,
          view: config.view
        },
            childRouter;

        childContainer.registerHandler(Router, function (c) {
          return childRouter || (childRouter = router.createChild(childContainer));
        });

        return this.compositionEngine.createViewModel(instruction).then(function (instruction) {
          instruction.executionContext = instruction.viewModel;
          instruction.router = router;
          return instruction;
        });
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return TemplatingRouteLoader;
})(RouteLoader);

exports.TemplatingRouteLoader = TemplatingRouteLoader;