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