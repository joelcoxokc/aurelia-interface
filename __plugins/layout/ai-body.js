import {Behavior} from 'aurelia-templating'


export class AiBody{

    static metadata(){

        return Behavior
            .customElement('ai-body')
            .withProperty('direction')

    }


    static inject(){

        return [Element]

    }


    constructor(element){

        this.element = element

    }

    bind(){

      this.element.classList.add('ai-body');

    }


    directionChanged(value){

        this.element.classList.add('is-'+value)

    }
}
