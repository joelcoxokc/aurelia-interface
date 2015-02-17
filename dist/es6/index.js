import {AiBtnToggleAttachedBehavior} from './ai-btn-toggle'
import {AiBtnRadioAttachedBehavior} from './ai-btn-radio'
import {AiClassAttachedBehavior} from './ai-class'
import {AiTabsAttachedBehavior} from './ai-tabs'
import {NavMe} from './nav-me'

function install(aurelia){
  aurelia.withResources([
    AiBtnToggleAttachedBehavior,
    AiBtnRadioAttachedBehavior,
    AiClassAttachedBehavior,
    AiTabsAttachedBehavior,
    NavMe
  ]);
}

export {
  AiBtnToggleAttachedBehavior,
  AiBtnRadioAttachedBehavior,
  AiClassAttachedBehavior,
  AiTabsAttachedBehavior,
  NavMe,
  install
};
