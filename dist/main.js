System.register(["aurelia-framework", "aurelia-logging-console", "../resources/index"], function (_export) {
  "use strict";

  var LogManager, ConsoleAppender, Ai;
  _export("configure", configure);

  function configure(aurelia) {
    aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator().plugin("./a-interface").plugin("./ai-card").plugin("./ai-action").plugin("./ui-class-list").plugin("./ui-element").plugin("./ui-toggle").plugin("./ui-nav-bar").plugin("./ui-nav-aside");


    aurelia.start().then(function (framework) {
      console.log("Main", framework);
      return framework.setRoot("app", document.body);
    });
  }
  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_aureliaLoggingConsole) {
      ConsoleAppender = _aureliaLoggingConsole.ConsoleAppender;
    }, function (_resourcesIndex) {
      Ai = _resourcesIndex.Ai;
    }],
    execute: function () {
      LogManager.addAppender(new ConsoleAppender());
      LogManager.setLevel(LogManager.levels.debug);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQ1EsVUFBVSxFQUNWLGVBQWUsRUFDZixFQUFFO3VCQUtNLFNBQVM7O0FBQWxCLFdBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRTtBQUVqQyxXQUFPLENBQUMsR0FBRyxDQUNSLHNCQUFzQixFQUFFLENBQ3hCLGdCQUFnQixFQUFFLENBQ2xCLE1BQU0sRUFBRSxDQUNSLGVBQWUsRUFBRSxDQUNqQixNQUFNLENBQUMsZUFBZSxDQUFDLENBQ3ZCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDbkIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUNyQixNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FDekIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUN0QixNQUFNLENBQUMsYUFBYSxDQUFDLENBQ3JCLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FDdEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUE7OztBQUczQixXQUFPLENBQUMsS0FBSyxFQUFFLENBQ2QsSUFBSSxDQUFDLFVBQVMsU0FBUyxFQUFFO0FBQ3RCLGFBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFBO0FBRTlCLGFBQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO0tBQ2pELENBQUMsQ0FBQztHQUNKOzs7QUE5Qk8sZ0JBQVUscUJBQVYsVUFBVTs7QUFDVixxQkFBZSwwQkFBZixlQUFlOztBQUNmLFFBQUUsbUJBQUYsRUFBRTs7O0FBRVYsZ0JBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLGdCQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvZGlzdC8ifQ==