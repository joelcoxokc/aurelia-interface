import {Behavior} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

var httpClient = new HttpClient().configure(builder => builder.withResponseType('text'));

export class Source {
  static metadata(){
    return Behavior
      .attachedBehavior('source')
      .withProperty('value', 'valueChanged', 'source');
  }

  static inject() { return [Element]; }
  constructor(element) {
    this.element = element;
  }

  valueChanged(newValue) {
    if (!newValue) {
      this.element.innerHTML = '';
      return;
    }

    httpClient.get(newValue)
      .then(response => {
        this.element.textContent = response.content.trim();
        Prism.highlightElement(this.element);
      });
  }
}
