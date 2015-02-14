import {AiBtnToggleAttachedBehavior} from './ai-btn-toggle'
import {AiBtnRadioAttachedBehavior} from './ai-btn-radio'

function install(aurelia){
  aurelia.withResources([
    AiBtnToggleAttachedBehavior,
    AiBtnRadioAttachedBehavior
  ]);
}

export {
  AiBtnToggleAttachedBehavior,
  AiBtnRadioAttachedBehavior,
  install
};