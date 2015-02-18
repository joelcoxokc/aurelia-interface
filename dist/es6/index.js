import {AiBtnToggleAttachedBehavior} from './ai-btn-toggle'
import {AiBtnRadioAttachedBehavior} from './ai-btn-radio'
import {AiClassAttachedBehavior} from './ai-class'
import {AiTabsAttachedBehavior} from './ai-tabs'
import {AiAction} from './ai-action'

function install(aurelia){
  aurelia.withResources([
    AiBtnToggleAttachedBehavior,
    AiBtnRadioAttachedBehavior,
    AiClassAttachedBehavior,
    AiTabsAttachedBehavior,
    AiAction
  ]);
}

export {
  AiBtnToggleAttachedBehavior,
  AiBtnRadioAttachedBehavior,
  AiClassAttachedBehavior,
  AiAction,
  install
};
