import {Behavior}   from 'aurelia-templating';
import {Aside}      from './aside'
import {UiElement}  from './ui-element'

var defaults = {
  asideId : 'aside1',
  side    : 'left'  ,
  open    : false   ,
  fixed   : true
}

export class UiNavAsideCustomElement extends UiElement{


    static metadata(){

        return Behavior
              .withProperty('open')
              .withProperty('fixed')
              .withProperty('side')
              .withProperty('size')

    }


    bind(){

        var classList = ['ui-aside', 'ui-aside-nav', `aside-${this.side}`]
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
