System.register(["./ai-class", "./toggler"], function (_export) {
  "use strict";

  var AiClassAttachedBehavior, ToggleRegistry;


  function install(aurelia) {
    aurelia.withResources([AiClassAttachedBehavior]);
  }

  return {
    setters: [function (_aiClass) {
      AiClassAttachedBehavior = _aiClass.AiClassAttachedBehavior;
    }, function (_toggler) {
      ToggleRegistry = _toggler.ToggleRegistry;
    }],
    execute: function () {
      _export("AiClassAttachedBehavior", AiClassAttachedBehavior);

      _export("install", install);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFZLHVCQUF1QixFQUN2QixjQUFjOzs7QUFFdEIsV0FBUyxPQUFPLENBQUMsT0FBTyxFQUFDO0FBRXJCLFdBQU8sQ0FBQyxhQUFhLENBQUMsQ0FDbEIsdUJBQXVCLENBRTFCLENBQUMsQ0FBQztHQUVOOzs7O0FBVk8sNkJBQXVCLFlBQXZCLHVCQUF1Qjs7QUFDdkIsb0JBQWMsWUFBZCxjQUFjOzs7eUNBWWxCLHVCQUF1Qjs7eUJBQ3ZCLE9BQU8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NyYy9wbHVnaW5zLyJ9