

import {Behavior} from 'aurelia-templating';
import {Aside}             from './aside'
import {Bar}               from './bar'


var defaults = {
  asideId : 'aside1',
  size    : 'md'    ,
  side    : 'left' ,
  open    : false   ,
  fixed   : true
}

export class AInterface {


    static metadata(){
        return Behavior
            .customElement('a-interface')
            .withProperty('router')
            .withProperty('aside')
            .withProperty('nav')
            .withProperty('footer')
            .withProperty('direction')
            ;

    }

    static inject() {

        return [Element,Bar];

    }

    constructor(element, bar) {

        console.log(this.toggler)
        this.element = element
        this.aside   = {};
        this.bar     = {};
        this.aside   = new Aside(defaults)
        this.showing = true

    }

    attached(){
        this.element.classList.add(`is-${this.direction}`)
        this.element.classList.add('a-interface')
    }


    activate(){
        this.header = 'Joel'
        console.log('Nav Activated', this)

    }
}



