import {Behavior}   from 'aurelia-templating';
import {UiElement}  from './ui-element'

var defaults = {
  asideId : 'aside1',
  side    : 'left'  ,
  open    : false   ,
  fixed   : true
}

export class AiNavAside extends UiElement{


    static metadata(){

        return Behavior
              .customElement('ai-nav-aside')
              .withProperty('open')
              .withProperty('fixed')
              .withProperty('side')
              .withProperty('size')
              .withProperty('aside')

    }

    static inject(){

        return [Element]

    }

    constructor(element){

        this.element = element

    }

    bind(){
        console.log(this)
        var classList = ['ai-aside', 'ai-aside-nav', `aside-${this.side}`]
        this.fixed && classList.push('aside-fixed')
        this.addClass(classList)

    }


    openChanged(newValue){
      if(newValue) {
          this.addClass('aside-open') }
      else {
         this.removeClass('aside-open') }

    }


}
