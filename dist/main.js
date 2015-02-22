System.register(["aurelia-framework", "aurelia-logging-console", "./system/aside"], function (_export) {
  "use strict";

  var LogManager, ConsoleAppender, Aside, _classCallCheck, Inst;
  _export("configure", configure);

  function configure(aurelia) {
    aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator().plugin("./resources/index");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsVUFBVSxFQUNWLGVBQWUsRUFDZixLQUFLLG1CQTZCQSxJQUFJO3VCQXZCRCxTQUFTOztBQUFsQixXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFFakMsV0FBTyxDQUFDLEdBQUcsQ0FDUixzQkFBc0IsRUFBRSxDQUN4QixnQkFBZ0IsRUFBRSxDQUNsQixNQUFNLEVBQUUsQ0FDUixlQUFlLEVBQUUsQ0FDakIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDL0IsVUFBTSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRTtBQUMzRCxZQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxDQUFDOztBQUV2QyxhQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFekIsYUFBTyxDQUFDLEtBQUssRUFBRSxDQUNkLElBQUksQ0FBQyxVQUFTLFNBQVMsRUFBRTtBQUN0QixlQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQTtBQUM5QixpQkFBUyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFBO0FBRXhELGVBQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO09BQ2pELENBQUMsQ0FBQztLQUNKLENBQUMsQ0FBQTtHQUNIOzs7O0FBN0JPLGdCQUFVLHFCQUFWLFVBQVU7O0FBQ1YscUJBQWUsMEJBQWYsZUFBZTs7QUFDZixXQUFLLGdCQUFMLEtBQUs7Ozs7Ozs7OztBQUliLGdCQUFVLENBQUMsV0FBVyxDQUFDLElBQUksZUFBZSxFQUFFLENBQUMsQ0FBQztBQUM5QyxnQkFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBd0JoQyxVQUFJLG1CQUNGLFNBREYsSUFBSTs4QkFBSixJQUFJOztBQUVULFlBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFBO09BQ3JCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9