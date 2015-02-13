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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQ1EsVUFBVSxFQUNWLGVBQWUsRUFDZixFQUFFO3VCQUtNLFNBQVM7O0FBQWxCLFdBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRTs7O0FBR2pDLFdBQU8sQ0FBQyxHQUFHLENBQ1Isc0JBQXNCLEVBQUUsQ0FDeEIsZ0JBQWdCLEVBQUUsQ0FDbEIsTUFBTSxFQUFFLENBQ1IsZUFBZSxFQUFFLENBQ2pCLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FDdkIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUNuQixNQUFNLENBQUMsYUFBYSxDQUFDLENBQ3JCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUN6QixNQUFNLENBQUMsY0FBYyxDQUFDLENBQ3RCLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FDckIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUN0QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTs7O0FBRzNCLFdBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FDZCxJQUFJLENBQUMsVUFBUyxTQUFTLEVBQUU7QUFDdEIsYUFBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUE7O0FBRzlCLGFBQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO0tBQ2pELENBQUMsQ0FBQztHQUNKOzs7QUFoQ08sZ0JBQVUscUJBQVYsVUFBVTs7QUFDVixxQkFBZSwwQkFBZixlQUFlOztBQUNmLFFBQUUsbUJBQUYsRUFBRTs7O0FBR1YsZ0JBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLGdCQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvZGlzdC8ifQ==