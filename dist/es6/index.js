import {AiBtnToggleAttachedBehavior} from './ai-btn-toggle'
import {AiBtnRadioAttachedBehavior} from './ai-btn-radio'
import {AiClassAttachedBehavior} from './ai-class'
// import {AInterfaceCustomElement} from './a-interface'

function install(aurelia){
  aurelia.withResources([
    // AInterfaceCustomElement,
    AiBtnToggleAttachedBehavior,
    AiBtnRadioAttachedBehavior,
    AiClassAttachedBehavior,
  ]);
}

export {
  // AInterfaceCustomElement,
  AiBtnToggleAttachedBehavior,
  AiBtnRadioAttachedBehavior,
  AiClassAttachedBehavior,
  install
};