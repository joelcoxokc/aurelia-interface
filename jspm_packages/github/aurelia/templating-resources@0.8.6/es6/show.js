/* */ 
"format register";
import {Behavior} from 'aurelia-templating';

function addStyleString(str) {
  var node = document.createElement('style');
  node.innerHTML = str;
  node.type = 'text/css';
  document.head.appendChild(node);
}

addStyleString('.aurelia-hide { display:none !important; }');

export class Show {
  static metadata(){
    return Behavior
      .attachedBehavior('show')
      .withProperty('value', 'valueChanged', 'show');
  }

  static inject() { return [Element]; }
  constructor(element) {
    this.element = element;
  }

  valueChanged(newValue){
    if (newValue) {
      this.element.classList.remove('aurelia-hide');
    } else {
      this.element.classList.add('aurelia-hide');
    }
  }
}
