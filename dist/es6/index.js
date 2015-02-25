System.register(["./ai-btn-toggle", "./ai-btn-radio", "./ai-tabs", "./ai-action", "./ai-card", "./ai-btn", "./ai-dropdown", "./ai-action-reveal"], function (_export) {
  "use strict";

  var AiBtnToggleAttachedBehavior, AiBtnRadioAttachedBehavior, AiTabsAttachedBehavior, AiAction, AiCard, AiBtn, AiDropdown, AiActionReveal;


  function install(aurelia) {
    aurelia.withResources([AiBtnToggleAttachedBehavior, AiBtnRadioAttachedBehavior, AiTabsAttachedBehavior, AiActionReveal, AiDropdown, AiAction, AiCard, AiBtn]);
  }

  return {
    setters: [function (_aiBtnToggle) {
      AiBtnToggleAttachedBehavior = _aiBtnToggle.AiBtnToggleAttachedBehavior;
    }, function (_aiBtnRadio) {
      AiBtnRadioAttachedBehavior = _aiBtnRadio.AiBtnRadioAttachedBehavior;
    }, function (_aiTabs) {
      AiTabsAttachedBehavior = _aiTabs.AiTabsAttachedBehavior;
    }, function (_aiAction) {
      AiAction = _aiAction.AiAction;
    }, function (_aiCard) {
      AiCard = _aiCard.AiCard;
    }, function (_aiBtn) {
      AiBtn = _aiBtn.AiBtn;
    }, function (_aiDropdown) {
      AiDropdown = _aiDropdown.AiDropdown;
    }, function (_aiActionReveal) {
      AiActionReveal = _aiActionReveal.AiActionReveal;
    }],
    execute: function () {
      _export("AiBtnToggleAttachedBehavior", AiBtnToggleAttachedBehavior);

      _export("AiBtnRadioAttachedBehavior", AiBtnRadioAttachedBehavior);

      _export("AiTabsAttachedBehavior", AiTabsAttachedBehavior);

      _export("AiActionReveal", AiActionReveal);

      _export("AiDropdown", AiDropdown);

      _export("AiAction", AiAction);

      _export("AiCard", AiCard);

      _export("AiBtn", AiBtn);

      _export("install", install);
    }
  };
});