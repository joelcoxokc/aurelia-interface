System.register(["./ai-btn-toggle", "./ai-btn-radio", "./ai-class", "./ai-tabs", "./ai-action"], function (_export) {
  "use strict";

  var AiBtnToggleAttachedBehavior, AiBtnRadioAttachedBehavior, AiClassAttachedBehavior, AiTabsAttachedBehavior, AiAction;


  function install(aurelia) {
    aurelia.withResources([AiBtnToggleAttachedBehavior, AiBtnRadioAttachedBehavior, AiClassAttachedBehavior, AiTabsAttachedBehavior, AiAction]);
  }

  return {
    setters: [function (_aiBtnToggle) {
      AiBtnToggleAttachedBehavior = _aiBtnToggle.AiBtnToggleAttachedBehavior;
    }, function (_aiBtnRadio) {
      AiBtnRadioAttachedBehavior = _aiBtnRadio.AiBtnRadioAttachedBehavior;
    }, function (_aiClass) {
      AiClassAttachedBehavior = _aiClass.AiClassAttachedBehavior;
    }, function (_aiTabs) {
      AiTabsAttachedBehavior = _aiTabs.AiTabsAttachedBehavior;
    }, function (_aiAction) {
      AiAction = _aiAction.AiAction;
    }],
    execute: function () {
      _export("AiBtnToggleAttachedBehavior", AiBtnToggleAttachedBehavior);

      _export("AiBtnRadioAttachedBehavior", AiBtnRadioAttachedBehavior);

      _export("AiClassAttachedBehavior", AiClassAttachedBehavior);

      _export("AiAction", AiAction);

      _export("install", install);
    }
  };
});