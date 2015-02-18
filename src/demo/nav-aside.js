import {Behavior} from 'aurelia-framework';

export class NavAside {

    static metadata(){

        return Behavior
            .customElement('nav-aside')
            .withProperty('router')
            .withProperty('aside')
            .withProperty('size', 'sizeChanged')
            .withProperty('bar')

    }


    static inject (){

        return [Element]

    }

    constructor(element){
        this.heading = 'ai';
        this.element = element;
        // Object.observe(this.router)

    }


    toggle(){
        this.aside.open = !this.aside.open
    }

    bind(){
        this.router = this.router

    }

}
