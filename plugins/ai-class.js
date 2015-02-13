import {Behavior} from 'aurelia-templating';

export class AiClass {
  static metadata () {
    return Behavior
      .attachedBehavior('ai-class')
      .withProperty('value', 'valueChanged', 'ai-class')
    ;
  }

  static inject() {
    return [
      Element
    ];
  }

  constructor (element) {
    this.element = element
  }

  bind () {
    this.setupObserver()
    this.updateClasses()
  }

  updateClasses () {
    Object.keys(this.value).forEach(className => {
      this.element.classList[this.value[className] ? 'add' : 'remove'](className)
    })
  }

  valueChanged (newValue, oldValue) {
    this.updateClasses()
    if (!Object.is(newValue, oldValue)) {
      this.setupObserver()
    }
  }

  setupObserver () {
    var _this = this
    Object.observe(this.value, () => {
      _this.updateClasses()
    })
  }
}
