import {Behavior} from 'aurelia-framework';
import {ExampleContext} from './example-context';

export class Example {
  static metadata(){
    return Behavior
      .customElement('example')
      .withProperty('demo')
      .withProperty('base', 'baseChanged');
  }

  static inject() { return [Element, ExampleContext]; }
  constructor(element, context) {
    this.element = element;
    this.context = context;
    this.model = null;
    this.view = null;
    this.result = false;
  }



  attached(){

    // this.write(title, this.title)
    // this.write(body, this.body)
    // this.write(code, this.code)
    console.log(this)
  }

  write(oldEl, newEl){
    newEl.innerHTML = oldEl.innerHTML
  }

  append(oldClass, newClass, element){
    var el = this.element.getElementsByClassName(oldClass)
    el.classList.remove(oldClass)
    el.classList.add(newClass)
    element.appendChild(el)
  }

  baseChanged(newValue) {
    this.context.base = newValue;
    this.context.example = this;
  }
}
