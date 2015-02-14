System.register(["./ai-btn-toggle", "./ai-btn-radio", "./ai-class", "./a-interface"], function (_export) {
  "use strict";

  var AiBtnToggleAttachedBehavior, AiBtnRadioAttachedBehavior, AiClassAttachedBehavior, AInterfaceCustomElement;


  function install(aurelia) {
    aurelia.withResources([AInterfaceCustomElement, AiBtnToggleAttachedBehavior, AiBtnRadioAttachedBehavior, AiClassAttachedBehavior]);
  }

  return {
    setters: [function (_aiBtnToggle) {
      AiBtnToggleAttachedBehavior = _aiBtnToggle.AiBtnToggleAttachedBehavior;
    }, function (_aiBtnRadio) {
      AiBtnRadioAttachedBehavior = _aiBtnRadio.AiBtnRadioAttachedBehavior;
    }, function (_aiClass) {
      AiClassAttachedBehavior = _aiClass.AiClassAttachedBehavior;
    }, function (_aInterface) {
      AInterfaceCustomElement = _aInterface.AInterfaceCustomElement;
    }],
    execute: function () {
      _export("AInterfaceCustomElement", AInterfaceCustomElement);

      _export("AiBtnToggleAttachedBehavior", AiBtnToggleAttachedBehavior);

      _export("AiBtnRadioAttachedBehavior", AiBtnRadioAttachedBehavior);

      _export("AiClassAttachedBehavior", AiClassAttachedBehavior);

      _export("install", install);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLDJCQUEyQixFQUMzQiwwQkFBMEIsRUFDMUIsdUJBQXVCLEVBQ3ZCLHVCQUF1Qjs7O0FBRS9CLFdBQVMsT0FBTyxDQUFDLE9BQU8sRUFBQztBQUN2QixXQUFPLENBQUMsYUFBYSxDQUFDLENBQ3BCLHVCQUF1QixFQUN2QiwyQkFBMkIsRUFDM0IsMEJBQTBCLEVBQzFCLHVCQUF1QixDQUN4QixDQUFDLENBQUM7R0FDSjs7OztBQVpPLGlDQUEyQixnQkFBM0IsMkJBQTJCOztBQUMzQixnQ0FBMEIsZUFBMUIsMEJBQTBCOztBQUMxQiw2QkFBdUIsWUFBdkIsdUJBQXVCOztBQUN2Qiw2QkFBdUIsZUFBdkIsdUJBQXVCOzs7eUNBWTdCLHVCQUF1Qjs7NkNBQ3ZCLDJCQUEyQjs7NENBQzNCLDBCQUEwQjs7eUNBQzFCLHVCQUF1Qjs7eUJBQ3ZCLE9BQU8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2Rpc3QvIn0=