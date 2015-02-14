System.register(["./ai-btn-toggle", "./ai-btn-radio", "./ai-class"], function (_export) {
  "use strict";

  var AiBtnToggleAttachedBehavior, AiBtnRadioAttachedBehavior, AiClassAttachedBehavior;


  function install(aurelia) {
    aurelia.withResources([AiBtnToggleAttachedBehavior, AiBtnRadioAttachedBehavior, AiClassAttachedBehavior]);
  }

  return {
    setters: [function (_aiBtnToggle) {
      AiBtnToggleAttachedBehavior = _aiBtnToggle.AiBtnToggleAttachedBehavior;
    }, function (_aiBtnRadio) {
      AiBtnRadioAttachedBehavior = _aiBtnRadio.AiBtnRadioAttachedBehavior;
    }, function (_aiClass) {
      AiClassAttachedBehavior = _aiClass.AiClassAttachedBehavior;
    }],
    execute: function () {
      _export("AiBtnToggleAttachedBehavior", AiBtnToggleAttachedBehavior);

      _export("AiBtnRadioAttachedBehavior", AiBtnRadioAttachedBehavior);

      _export("AiClassAttachedBehavior", AiClassAttachedBehavior);

      _export("install", install);
    }
  };
});