/* */ 
System.register(["aurelia-templating", "aurelia-router", "aurelia-path", "aurelia-metadata"], function (_export) {
  "use strict";

  var CompositionEngine, RouteLoader, Router, relativeToFile, Origin, _prototypeProperties, _inherits, TemplatingRouteLoader;
  return {
    setters: [function (_aureliaTemplating) {
      CompositionEngine = _aureliaTemplating.CompositionEngine;
    }, function (_aureliaRouter) {
      RouteLoader = _aureliaRouter.RouteLoader;
      Router = _aureliaRouter.Router;
    }, function (_aureliaPath) {
      relativeToFile = _aureliaPath.relativeToFile;
    }, function (_aureliaMetadata) {
      Origin = _aureliaMetadata.Origin;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      _inherits = function (subClass, superClass) {
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

      TemplatingRouteLoader = (function (RouteLoader) {
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
      _export("TemplatingRouteLoader", TemplatingRouteLoader);
    }
  };
});