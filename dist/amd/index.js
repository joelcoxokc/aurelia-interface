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