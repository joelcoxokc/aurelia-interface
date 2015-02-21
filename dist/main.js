System.register(["aurelia-framework", "aurelia-logging-console", "./system/aside"], function (_export) {
  "use strict";

  var LogManager, ConsoleAppender, Aside, _classCallCheck, Inst;
  _export("configure", configure);

  function configure(aurelia) {
    aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator();
    System.normalize("./dist/system/index").then(function (name) {
      System.map["aurelia-interface"] = name;

      aurelia.use.plugin(name);

      aurelia.start().then(function (framework) {
        console.log("Main", framework);
        framework.container.registerInstance(Aside, new Aside());
        return framework.setRoot("app", document.body);
      });
    });
  }

  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_aureliaLoggingConsole) {
      ConsoleAppender = _aureliaLoggingConsole.ConsoleAppender;
    }, function (_systemAside) {
      Aside = _systemAside.Aside;
    }],
    execute: function () {
      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };





      LogManager.addAppender(new ConsoleAppender());
      LogManager.setLevel(LogManager.levels.debug);
      Inst = _export("Inst", function Inst() {
        _classCallCheck(this, Inst);

        this.name = "Joel";
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsVUFBVSxFQUNWLGVBQWUsRUFDZixLQUFLLG1CQTRCQSxJQUFJO3VCQXRCRCxTQUFTOztBQUFsQixXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFFakMsV0FBTyxDQUFDLEdBQUcsQ0FDUixzQkFBc0IsRUFBRSxDQUN4QixnQkFBZ0IsRUFBRSxDQUNsQixNQUFNLEVBQUUsQ0FDUixlQUFlLEVBQUUsQ0FBQTtBQUNwQixVQUFNLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFO0FBQzNELFlBQU0sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLENBQUM7O0FBRXZDLGFBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUV6QixhQUFPLENBQUMsS0FBSyxFQUFFLENBQ2QsSUFBSSxDQUFDLFVBQVMsU0FBUyxFQUFFO0FBQ3RCLGVBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFBO0FBQzlCLGlCQUFTLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUE7QUFFeEQsZUFBTyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7T0FDakQsQ0FBQyxDQUFDO0tBQ0osQ0FBQyxDQUFBO0dBQ0g7Ozs7QUE1Qk8sZ0JBQVUscUJBQVYsVUFBVTs7QUFDVixxQkFBZSwwQkFBZixlQUFlOztBQUNmLFdBQUssZ0JBQUwsS0FBSzs7Ozs7Ozs7O0FBSWIsZ0JBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLGdCQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUF1QmhDLFVBQUksbUJBQ0YsU0FERixJQUFJOzhCQUFKLElBQUk7O0FBRVQsWUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUE7T0FDckIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=