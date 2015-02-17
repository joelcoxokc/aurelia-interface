define(["exports", "./ai-btn-toggle", "./ai-btn-radio", "./ai-class", "./ai-tabs", "./nav-me"], function (exports, _aiBtnToggle, _aiBtnRadio, _aiClass, _aiTabs, _navMe) {
  "use strict";

  var AiBtnToggleAttachedBehavior = _aiBtnToggle.AiBtnToggleAttachedBehavior;
  var AiBtnRadioAttachedBehavior = _aiBtnRadio.AiBtnRadioAttachedBehavior;
  var AiClassAttachedBehavior = _aiClass.AiClassAttachedBehavior;
  var AiTabsAttachedBehavior = _aiTabs.AiTabsAttachedBehavior;
  var NavMe = _navMe.NavMe;


  function install(aurelia) {
    aurelia.withResources([AiBtnToggleAttachedBehavior, AiBtnRadioAttachedBehavior, AiClassAttachedBehavior, AiTabsAttachedBehavior, NavMe]);
  }

  exports.AiBtnToggleAttachedBehavior = AiBtnToggleAttachedBehavior;
  exports.AiBtnRadioAttachedBehavior = AiBtnRadioAttachedBehavior;
  exports.AiClassAttachedBehavior = AiClassAttachedBehavior;
  exports.AiTabsAttachedBehavior = AiTabsAttachedBehavior;
  exports.NavMe = NavMe;
  exports.install = install;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});