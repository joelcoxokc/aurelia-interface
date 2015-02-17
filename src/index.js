import {AiBtnToggleAttachedBehavior} from './ai-btn-toggle'
import {AiBtnRadioAttachedBehavior} from './ai-btn-radio'
import {AiClassAttachedBehavior} from './ai-class'
import {AiTabsAttachedBehavior} from './ai-tabs'

function install(aurelia){
  aurelia.withResources([
    AiBtnToggleAttachedBehavior,
    AiBtnRadioAttachedBehavior,
    AiClassAttachedBehavior,
    AiTabsAttachedBehavior,
  ]);
}

export {
  AiBtnToggleAttachedBehavior,
  AiBtnRadioAttachedBehavior,
  AiClassAttachedBehavior,
  install
};
