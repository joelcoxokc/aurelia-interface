import {Behavior} from 'aurelia-templating';

export class AiFooter{

    static metadata(){
        return Behavior
            .customElement('ai-footer')
            // .withProperty('')
    }

    static inject(){
        return [Element]
    }

    constructor(element){

        this.element = element

    }

    bind() {
        this.element.classList.add('ai-footer')
    }
}
