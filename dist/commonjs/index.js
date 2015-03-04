System.register(["./ai-aside", "./ai-body", "./ai-bar", "./ai-main", "./ai-footer", "./ai-header", "./ai-aside-attribute", "./ai-body-attribute", "./ai-main-attribute", "./ai-footer-attribute", "./ai-header-attribute"], function (_export) {
  "use strict";

  var AiAside, AiBody, AiBar, AiMain, AiFooter, AiHeader, AiAsideAttachedBehavior, AiBodyAttachedBehavior, AiMainAttachedBehavior, AiFooterAttachedBehavior, AiHeaderAttachedBehavior;




  function install(aurelia) {
    aurelia.withResources([AiAside, AiBar, AiBody, AiMain, AiFooter, AiHeader, AiAsideAttachedBehavior, AiBodyAttachedBehavior, AiMainAttachedBehavior, AiFooterAttachedBehavior, AiHeaderAttachedBehavior]);
  }

  return {
    setters: [function (_aiAside) {
      AiAside = _aiAside.AiAside;
    }, function (_aiBody) {
      AiBody = _aiBody.AiBody;
    }, function (_aiBar) {
      AiBar = _aiBar.AiBar;
    }, function (_aiMain) {
      AiMain = _aiMain.AiMain;
    }, function (_aiFooter) {
      AiFooter = _aiFooter.AiFooter;
    }, function (_aiHeader) {
      AiHeader = _aiHeader.AiHeader;
    }, function (_aiAsideAttribute) {
      AiAsideAttachedBehavior = _aiAsideAttribute.AiAsideAttachedBehavior;
    }, function (_aiBodyAttribute) {
      AiBodyAttachedBehavior = _aiBodyAttribute.AiBodyAttachedBehavior;
    }, function (_aiMainAttribute) {
      AiMainAttachedBehavior = _aiMainAttribute.AiMainAttachedBehavior;
    }, function (_aiFooterAttribute) {
      AiFooterAttachedBehavior = _aiFooterAttribute.AiFooterAttachedBehavior;
    }, function (_aiHeaderAttribute) {
      AiHeaderAttachedBehavior = _aiHeaderAttribute.AiHeaderAttachedBehavior;
    }],
    execute: function () {
      _export("AiAside", AiAside);

      _export("AiBar", AiBar);

      _export("AiBody", AiBody);

      _export("AiMain", AiMain);

      _export("AiFooter", AiFooter);

      _export("AiHeader", AiHeader);

      _export("AiAsideAttachedBehavior", AiAsideAttachedBehavior);

      _export("AiBodyAttachedBehavior", AiBodyAttachedBehavior);

      _export("AiMainAttachedBehavior", AiMainAttachedBehavior);

      _export("AiFooterAttachedBehavior", AiFooterAttachedBehavior);

      _export("AiHeaderAttachedBehavior", AiHeaderAttachedBehavior);

      _export("install", install);
    }
  };
});