import {Behavior} from 'aurelia-framework';

export class NavAside {

    static metadata(){

        return Behavior
            .withProperty('router')
            .withProperty('aside')
            .withProperty('size', 'size-changed')
            .withProperty('bar')

    }


    static inject (){

        return [Element]

    }

    constructor(element){
        this.heading = 'ai';
        this.element = element;

    }


    bind(){


        this.element.classList.add('ai-aside', 'ai-aside-nav', 'aside-fixed', 'aside-left');


    }

}
