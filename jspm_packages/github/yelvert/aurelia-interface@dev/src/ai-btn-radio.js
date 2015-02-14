import {Behavior} from 'aurelia-templating'

export class AiBtnRadioAttachedBehavior {
  static metadata(){
    return Behavior
      .withProperty('value', null, 'ai-btn-radio').and(x => x.bindingIsTwoWay())
      .syncChildren('options', 'optionsChanged', '[ai-btn-radio-option]')
      .noView()
  }

  static inject () {
    return [Element]
  }

  constructor (element) {
    this.element = element
  }

  bind () {
    this.optionsChanged()
  }

  unbind () {
    this.handler = this.selectItem.bind(this)
    this.options.forEach(option => {
      option.removeEventListener('click', this.handler)
    })
  }

  optionsChanged () {
    this.unbind()
    this.options.forEach(option => {
      option.addEventListener('click', this.handler, false)
    })
  }

  selectItem ($event) {
    this.value = $event.target.value
  }
}