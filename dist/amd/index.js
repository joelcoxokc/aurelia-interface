System.register(["./ai-class", "./toggler"], function (_export) {
  "use strict";

  var AiClassAttachedBehavior, ToggleRegistry;


  function install(aurelia) {
    aurelia.withResources([Toggler, AiClassAttachedBehavior]);
  }

  return {
    setters: [function (_aiClass) {
      AiClassAttachedBehavior = _aiClass.AiClassAttachedBehavior;
    }, function (_toggler) {
      ToggleRegistry = _toggler.ToggleRegistry;
    }],
    execute: function () {
      _export("Toggler", Toggler);

      _export("AiClassAttachedBehavior", AiClassAttachedBehavior);

      _export("install", install);
    }
  };
});