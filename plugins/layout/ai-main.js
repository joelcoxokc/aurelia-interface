import {Behavior} from 'aurelia-templating'


export class UiMain{

    static metadata(){

        return Behavior
            .customElement('nav-bar')
            .withProperty('router')

    }


    static inject(){

        return [Element]

    }


    constructor(element){

        this.element = element

    }

    attahced(){

        this.element.classList.add('ai-body')

    }
}
