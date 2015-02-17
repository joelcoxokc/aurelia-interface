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


export class AiBarAttachedBehavior {

    static metadata(){

        return Behavior
            .withProperty('value', 'valueChnaged', 'ai-bar')
            .withProperty('size', 'sizeChanged')

    }


    static inject(){

        return [Element];

    }


    constructor(element){
        this.element = element

    }

    bind(){
        console.log('Hello')
        this.element.classList.add('ai-bar', 'ai-nav-bar')

    }

    sizeChanged(newSize){

        this.element.classList.add('bar-'+newSize);

    }
}
