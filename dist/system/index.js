System.register(["./ai-class"], function (_export) {
  "use strict";

  var AiClassAttachedBehavior;


  function install(aurelia) {
    aurelia.withResources([AiClassAttachedBehavior]);
  }

  return {
    setters: [function (_aiClass) {
      AiClassAttachedBehavior = _aiClass.AiClassAttachedBehavior;
    }],
    execute: function () {
      _export("AiClassAttachedBehavior", AiClassAttachedBehavior);

      _export("install", install);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFZLHVCQUF1Qjs7O0FBRS9CLFdBQVMsT0FBTyxDQUFDLE9BQU8sRUFBQztBQUVyQixXQUFPLENBQUMsYUFBYSxDQUFDLENBRWxCLHVCQUF1QixDQUUxQixDQUFDLENBQUM7R0FFTjs7OztBQVZPLDZCQUF1QixZQUF2Qix1QkFBdUI7Ozt5Q0FjM0IsdUJBQXVCOzt5QkFDdkIsT0FBTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjL3BsdWdpbnMvIn0=