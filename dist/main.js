System.register(["aurelia-framework", "aurelia-logging-console"], function (_export) {
  "use strict";

  var LogManager, ConsoleAppender;
  _export("configure", configure);

  function configure(aurelia) {
    aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator();
    System.normalize("./dist/system/index").then(function (name) {
      System.map["aurelia-interface"] = name;

      aurelia.use.plugin(name);

      aurelia.start().then(function (framework) {
        console.log("Main", framework);

        return framework.setRoot("app", document.body);
      });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsVUFBVSxFQUNWLGVBQWU7dUJBSVAsU0FBUzs7QUFBbEIsV0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQ2pDLFdBQU8sQ0FBQyxHQUFHLENBQ1Isc0JBQXNCLEVBQUUsQ0FDeEIsZ0JBQWdCLEVBQUUsQ0FDbEIsTUFBTSxFQUFFLENBQ1IsZUFBZSxFQUFFLENBQUE7QUFDcEIsVUFBTSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRTtBQUMzRCxZQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxDQUFDOztBQUV2QyxhQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFekIsYUFBTyxDQUFDLEtBQUssRUFBRSxDQUNkLElBQUksQ0FBQyxVQUFTLFNBQVMsRUFBRTtBQUN0QixlQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQTs7QUFHOUIsZUFBTyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7T0FDakQsQ0FBQyxDQUFDO0tBQ0osQ0FBQyxDQUFBO0dBQ0g7OztBQXhCTyxnQkFBVSxxQkFBVixVQUFVOztBQUNWLHFCQUFlLDBCQUFmLGVBQWU7OztBQUV2QixnQkFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDLENBQUM7QUFDOUMsZ0JBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==