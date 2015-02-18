import {AiBtnToggleAttachedBehavior} from './ai-btn-toggle'
import {AiBtnRadioAttachedBehavior} from './ai-btn-radio'
import {AiTabsAttachedBehavior} from './ai-tabs'
import {AiAction} from './ai-action'
import {AiCard} from './ai-card'
import {AiDropdown} from './ai-dropdown'

function install(aurelia){
  aurelia.withResources([
    AiBtnToggleAttachedBehavior,
    AiBtnRadioAttachedBehavior,
    AiTabsAttachedBehavior,
    AiDropdown,
    AiAction,
    AiCard,
  ]);
}

export {
  AiBtnToggleAttachedBehavior,
  AiBtnRadioAttachedBehavior,
  AiTabsAttachedBehavior,
  AiDropdown,
  AiAction,
  AiCard,
  install
};
