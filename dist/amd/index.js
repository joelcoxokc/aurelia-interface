define(["exports", "./ai-btn-toggle", "./ai-btn-radio", "./ai-class", "./ai-tabs"], function (exports, _aiBtnToggle, _aiBtnRadio, _aiClass, _aiTabs) {
  "use strict";

  var AiBtnToggleAttachedBehavior = _aiBtnToggle.AiBtnToggleAttachedBehavior;
  var AiBtnRadioAttachedBehavior = _aiBtnRadio.AiBtnRadioAttachedBehavior;
  var AiClassAttachedBehavior = _aiClass.AiClassAttachedBehavior;
  var AiTabsAttachedBehavior = _aiTabs.AiTabsAttachedBehavior;


  function install(aurelia) {
    aurelia.withResources([AiBtnToggleAttachedBehavior, AiBtnRadioAttachedBehavior, AiClassAttachedBehavior, AiTabsAttachedBehavior]);
  }

  exports.AiBtnToggleAttachedBehavior = AiBtnToggleAttachedBehavior;
  exports.AiBtnRadioAttachedBehavior = AiBtnRadioAttachedBehavior;
  exports.AiClassAttachedBehavior = AiClassAttachedBehavior;
  exports.AiTabsAttachedBehavior = AiTabsAttachedBehavior;
  exports.install = install;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});