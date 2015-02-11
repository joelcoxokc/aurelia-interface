import {Behavior} from 'aurelia-templating';

export class MzBody {
  static metadata() {
    return Behavior
      .customElement('ui-body')
      // .withProperty('options')
      // .useView('./body.html')

  }
  static inject() {
    return [Element];
  }
  constructor(element) {
    console.log(element)
    this.element = element
  }
}
