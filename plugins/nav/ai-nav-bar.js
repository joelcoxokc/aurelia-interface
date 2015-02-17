import {Behavior, BoundViewFactory, ViewSlot} from 'aurelia-templating';
import {UiElement}        from './ui-element';


export class AiNavBar extends UiElement {


    static metadata(){

       return Behavior
         .customElement('ai-nav-bar')
         .withProperty('router')
         .withProperty('aside')
         .withProperty('showing')
         .withProperty('value')

    }

    static inject() {

      return [Element]

    }


    constructor(element){

      this.element = element

      this.showing = true
      this.open    = false
      this.fixed   = true
      this.size    = 'sm'
      this.ripple  = true

    }


    bind(){

      console.log('AiNavBar directive', this)
    }

    open(){

        this.showing = !this.showing

    }

}
