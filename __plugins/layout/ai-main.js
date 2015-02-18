import {Behavior} from 'aurelia-templating'


export class AiMain{

    static metadata(){

        return Behavior
            .customElement('ai-main')
            .withProperty('router')

    }


    static inject(){

        return [Element]

    }


    constructor(element){

        this.element = element

    }

    attahced(){

        this.element.classList.add('ai-main')

    }
}
