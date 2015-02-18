import {AiBtnToggleAttachedBehavior} from './ai-btn-toggle'
import {AiBtnRadioAttachedBehavior} from './ai-btn-radio'
import {AiTabsAttachedBehavior} from './ai-tabs'
import {AiAction} from './ai-action'

function install(aurelia){
  aurelia.withResources([
    AiBtnToggleAttachedBehavior,
    AiBtnRadioAttachedBehavior,
    AiTabsAttachedBehavior,
    AiAction
  ]);
}

export {
  AiBtnToggleAttachedBehavior,
  AiBtnRadioAttachedBehavior,
  AiTabsAttachedBehavior,
  AiAction,
  install
};
