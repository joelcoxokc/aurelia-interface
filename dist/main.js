System.register(["aurelia-framework", "aurelia-logging-console", "../resources/index"], function (_export) {
  "use strict";

  var LogManager, ConsoleAppender, Ai;
  _export("configure", configure);

  function configure(aurelia) {


    aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator().plugin("./aurelia-interface").plugin("./a-interface").plugin("./ai-card").plugin("./ai-action").plugin("./ui-class-list").plugin("./ui-element").plugin("./ai-body").plugin("./ai-footer").plugin("./ai-toggle").plugin("./ai-nav-bar").plugin("./ai-nav-aside");


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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQ1EsVUFBVSxFQUNWLGVBQWUsRUFDZixFQUFFO3VCQUtNLFNBQVM7O0FBQWxCLFdBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRTs7O0FBR2pDLFdBQU8sQ0FBQyxHQUFHLENBQ1Isc0JBQXNCLEVBQUUsQ0FDeEIsZ0JBQWdCLEVBQUUsQ0FDbEIsTUFBTSxFQUFFLENBQ1IsZUFBZSxFQUFFLENBQ2pCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUM3QixNQUFNLENBQUMsZUFBZSxDQUFDLENBQ3ZCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDbkIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUNyQixNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FDekIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUN0QixNQUFNLENBQUMsV0FBVyxDQUFDLENBQ25CLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FDckIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUNyQixNQUFNLENBQUMsY0FBYyxDQUFDLENBQ3RCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBOzs7QUFHM0IsV0FBTyxDQUFDLEtBQUssRUFBRSxDQUNkLElBQUksQ0FBQyxVQUFTLFNBQVMsRUFBRTtBQUN0QixhQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQTs7QUFHOUIsYUFBTyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDakQsQ0FBQyxDQUFDO0dBQ0o7OztBQW5DTyxnQkFBVSxxQkFBVixVQUFVOztBQUNWLHFCQUFlLDBCQUFmLGVBQWU7O0FBQ2YsUUFBRSxtQkFBRixFQUFFOzs7QUFHVixnQkFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDLENBQUM7QUFDOUMsZ0JBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9kaXN0LyJ9