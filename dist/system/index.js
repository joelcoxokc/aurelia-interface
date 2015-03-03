System.register(["./ai-class", "./ai-element"], function (_export) {
  "use strict";

  var AiClassAttachedBehavior, AiElement;


  function install(aurelia) {
    aurelia.withResources([AiClassAttachedBehavior]);
  }

  return {
    setters: [function (_aiClass) {
      AiClassAttachedBehavior = _aiClass.AiClassAttachedBehavior;
    }, function (_aiElement) {
      AiElement = _aiElement.AiElement;
    }],
    execute: function () {
      _export("AiClassAttachedBehavior", AiClassAttachedBehavior);

      _export("AiElement", AiElement);

      _export("install", install);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFZLHVCQUF1QixFQUN2QixTQUFTOzs7QUFFakIsV0FBUyxPQUFPLENBQUMsT0FBTyxFQUFDO0FBRXJCLFdBQU8sQ0FBQyxhQUFhLENBQUMsQ0FFbEIsdUJBQXVCLENBRTFCLENBQUMsQ0FBQztHQUVOOzs7O0FBWE8sNkJBQXVCLFlBQXZCLHVCQUF1Qjs7QUFDdkIsZUFBUyxjQUFULFNBQVM7Ozt5Q0FjYix1QkFBdUI7OzJCQUN2QixTQUFTOzt5QkFDVCxPQUFPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvcGx1Z2lucy8ifQ==