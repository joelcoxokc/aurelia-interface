import {Behavior} from 'aurelia-templating'


export class AiBody{

    static metadata(){

        return Behavior
            .customElement('ai-body')
            .withProperty('router')
            .withProperty('direction')

    }


    static inject(){

        return [Element]

    }


    constructor(element){

        this.element = element

    }

    attahced(){

      this.element.classList.add('ai-body');

    }


    directionChanged(value){

        this.element.classList.add('is-'+value)

    }
}
