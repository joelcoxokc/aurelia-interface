import {Behavior} from 'aurelia-framework';
import {ExampleContext} from './example-context';

export class Example {
  static metadata(){
    return Behavior
      .customElement('example')
      .withProperty('base', 'baseChanged');
  }

  static inject() { return [ExampleContext]; }
  constructor(context) {
    this.context = context;
    this.model = null;
    this.view = null;
    this.result = false;
  }

  baseChanged(newValue) {
    this.context.base = newValue;
    this.context.example = this;
  }
}
