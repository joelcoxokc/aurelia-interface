import {Behavior} from 'aurelia-templating'

export class AiBtnToggleAttachedBehavior {
  static metadata(){
    return Behavior
      .withProperty('value', null, 'ai-btn-toggle').and(x => x.bindingIsTwoWay())
      .noView()
  }

  static inject () {
    return [Element]
  }

  constructor (element) {
    this.element = element
  }

  bind () {
    // this.handler = this[typeof this.value === 'function' ? '_toggle' : 'toggle'].bind(this)

    this.element.addEventListener('click', this.handler, false)
  }

  unbind () {
    this.element.removeEventListener('click', this.handler)
  }

  toggle () {
    this.value = !this.value
  }

  _toggle () {
    this._value = !this._value
    this.value(this._value)
  }
}
