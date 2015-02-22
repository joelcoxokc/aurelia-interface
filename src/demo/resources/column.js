import {Behavior} from 'aurelia-framework';

export class Column {
  static metadata() {
    return Behavior
        .customElement('column')
        .withProperty('screen')
        .withProperty('size')
  }

  static inject(){
      return [Element]
  }

  constructor(element) {
      this.element = element
      this.screen = this.screen || 'md';
      this.size   = this.size   || '12';
      this.element.classList.add('flex', `${this.screen}${this.size}`)
  }
}
