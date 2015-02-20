System.register(["aurelia-framework", "aurelia-logging-console"], function (_export) {
  "use strict";

  var LogManager, ConsoleAppender, _classCallCheck, Inst;
  _export("configure", configure);

  function configure(aurelia) {
    aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator();
    System.normalize("./dist/system/index").then(function (name) {
      System.map["aurelia-interface"] = name;

      aurelia.use.plugin(name);

      aurelia.start().then(function (framework) {
        console.log("Main", framework);
        framework.container.registerInstance(Inst, new Inst());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsVUFBVSxFQUNWLGVBQWUsbUJBMEJWLElBQUk7dUJBdEJELFNBQVM7O0FBQWxCLFdBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRTtBQUVqQyxXQUFPLENBQUMsR0FBRyxDQUNSLHNCQUFzQixFQUFFLENBQ3hCLGdCQUFnQixFQUFFLENBQ2xCLE1BQU0sRUFBRSxDQUNSLGVBQWUsRUFBRSxDQUFBO0FBQ3BCLFVBQU0sQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUU7QUFDM0QsWUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQzs7QUFFdkMsYUFBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXpCLGFBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FDZCxJQUFJLENBQUMsVUFBUyxTQUFTLEVBQUU7QUFDdEIsZUFBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUE7QUFDOUIsaUJBQVMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUV0RCxlQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtPQUNqRCxDQUFDLENBQUM7S0FDSixDQUFDLENBQUE7R0FDSDs7OztBQXpCTyxnQkFBVSxxQkFBVixVQUFVOztBQUNWLHFCQUFlLDBCQUFmLGVBQWU7Ozs7O0FBRXZCLGdCQUFVLENBQUMsV0FBVyxDQUFDLElBQUksZUFBZSxFQUFFLENBQUMsQ0FBQztBQUM5QyxnQkFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBdUJoQyxVQUFJLG1CQUNGLFNBREYsSUFBSTs4QkFBSixJQUFJOztBQUVULFlBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFBO09BQ3JCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9