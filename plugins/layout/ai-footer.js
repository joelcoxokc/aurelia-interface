import {Behavior} from 'aurelia-templating'


export class AiFooter{

    static metadata(){

        return Behavior
            .customElement('ai-footer')
            .withProperty('direction')

    }


    static inject(){

        return [Element]

    }


    constructor(element){

        this.element = element

    }

    attahced(){

      this.element.classList.add('ai-footer');

    }


    directionChanged(value){

        this.element.classList.add('is-'+value)

    }
}
