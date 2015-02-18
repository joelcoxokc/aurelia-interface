define(["exports", "./ai-btn-toggle", "./ai-btn-radio", "./ai-class", "./ai-tabs", "./ai-action"], function (exports, _aiBtnToggle, _aiBtnRadio, _aiClass, _aiTabs, _aiAction) {
  "use strict";

  var AiBtnToggleAttachedBehavior = _aiBtnToggle.AiBtnToggleAttachedBehavior;
  var AiBtnRadioAttachedBehavior = _aiBtnRadio.AiBtnRadioAttachedBehavior;
  var AiClassAttachedBehavior = _aiClass.AiClassAttachedBehavior;
  var AiTabsAttachedBehavior = _aiTabs.AiTabsAttachedBehavior;
  var AiAction = _aiAction.AiAction;


  function install(aurelia) {
    aurelia.withResources([AiBtnToggleAttachedBehavior, AiBtnRadioAttachedBehavior, AiClassAttachedBehavior, AiTabsAttachedBehavior, AiAction]);
  }

  exports.AiBtnToggleAttachedBehavior = AiBtnToggleAttachedBehavior;
  exports.AiBtnRadioAttachedBehavior = AiBtnRadioAttachedBehavior;
  exports.AiClassAttachedBehavior = AiClassAttachedBehavior;
  exports.AiAction = AiAction;
  exports.install = install;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});