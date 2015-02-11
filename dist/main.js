System.register(["aurelia-framework", "aurelia-logging-console"], function (_export) {
  "use strict";

  var LogManager, ConsoleAppender;
  _export("configure", configure);

  function configure(aurelia) {
    aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator().plugin("./ui-class-list").plugin("./ui-element").plugin("./ui-toggle").plugin("./ui-aurelia").plugin("./ui-nav-bar").plugin("./ui-nav-aside");


    aurelia.start().then(function (a) {
      console.log(a);
      return a.setRoot("app", document.body);
    });
  }
  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_aureliaLoggingConsole) {
      ConsoleAppender = _aureliaLoggingConsole.ConsoleAppender;
    }],
    execute: function () {
      LogManager.addAppender(new ConsoleAppender());
      LogManager.setLevel(LogManager.levels.debug);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQ1EsVUFBVSxFQUNWLGVBQWU7dUJBS1AsU0FBUzs7QUFBbEIsV0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQ2pDLFdBQU8sQ0FBQyxHQUFHLENBQ1Isc0JBQXNCLEVBQUUsQ0FDeEIsZ0JBQWdCLEVBQUUsQ0FDbEIsTUFBTSxFQUFFLENBQ1IsZUFBZSxFQUFFLENBQ2pCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUN6QixNQUFNLENBQUMsY0FBYyxDQUFDLENBQ3RCLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FDckIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUN0QixNQUFNLENBQUMsY0FBYyxDQUFDLENBQ3RCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBOzs7QUFHM0IsV0FBTyxDQUFDLEtBQUssRUFBRSxDQUNkLElBQUksQ0FBQyxVQUFTLENBQUMsRUFBRTtBQUNkLGFBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFFZCxhQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUN6QyxDQUFDLENBQUM7R0FDSjs7O0FBMUJPLGdCQUFVLHFCQUFWLFVBQVU7O0FBQ1YscUJBQWUsMEJBQWYsZUFBZTs7O0FBRXZCLGdCQUFVLENBQUMsV0FBVyxDQUFDLElBQUksZUFBZSxFQUFFLENBQUMsQ0FBQztBQUM5QyxnQkFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL2Rpc3QvIn0=