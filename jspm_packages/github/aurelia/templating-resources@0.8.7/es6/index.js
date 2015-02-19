/* */ 
"format register";
import {Compose} from './compose';
import {If} from './if';
import {Repeat} from './repeat';
import {Show} from './show';
import {SelectedItem} from './selected-item';
import {GlobalBehavior} from './global-behavior';

function install(aurelia){
  aurelia.withResources([Show, If, Repeat, Compose, SelectedItem, GlobalBehavior]);
}

export {
  Compose,
  If,
  Repeat,
  Show,
  SelectedItem,
  GlobalBehavior,
  install
};