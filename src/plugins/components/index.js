import {AiBtnToggleAttachedBehavior} from './ai-btn-toggle'
import {AiBtnRadioAttachedBehavior} from './ai-btn-radio'
import {AiTabsAttachedBehavior} from './ai-tabs'
import {AiAction} from './ai-action'
import {AiCard} from './ai-card'

function install(aurelia){
  aurelia.withResources([
    AiBtnToggleAttachedBehavior,
    AiBtnRadioAttachedBehavior,
    AiTabsAttachedBehavior,
    AiCard,
    AiAction
  ]);
}

export {
  AiBtnToggleAttachedBehavior,
  AiBtnRadioAttachedBehavior,
  AiTabsAttachedBehavior,
  AiAction,
  AiCard,
  install
};
