import {Behavior} from 'aurelia-framework';

export class Msg {
  static metadata(){ return Behavior.withProperty('router'); }
}
