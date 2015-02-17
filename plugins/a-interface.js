

import {Behavior} from 'aurelia-templating';


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

            return [Element];

    }

    constructor(element) {

            console.log(this.toggler)
            this.element = element
            this.aside   = {};
            this.bar     = {};
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



