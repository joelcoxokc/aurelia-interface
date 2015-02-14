define(["exports", "./ai-btn-toggle", "./ai-btn-radio", "./ai-class"], function (exports, _aiBtnToggle, _aiBtnRadio, _aiClass) {
  "use strict";

  var AiBtnToggleAttachedBehavior = _aiBtnToggle.AiBtnToggleAttachedBehavior;
  var AiBtnRadioAttachedBehavior = _aiBtnRadio.AiBtnRadioAttachedBehavior;
  var AiClassAttachedBehavior = _aiClass.AiClassAttachedBehavior;


  function install(aurelia) {
    aurelia.withResources([AiBtnToggleAttachedBehavior, AiBtnRadioAttachedBehavior, AiClassAttachedBehavior]);
  }

  exports.AiBtnToggleAttachedBehavior = AiBtnToggleAttachedBehavior;
  exports.AiBtnRadioAttachedBehavior = AiBtnRadioAttachedBehavior;
  exports.AiClassAttachedBehavior = AiClassAttachedBehavior;
  exports.install = install;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});