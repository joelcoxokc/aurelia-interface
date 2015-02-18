import {Behavior} from 'aurelia-templating'


export class AiAction{

    static metadata(){

        return Behavior
            .customElement('ai-action')
            .withProperty('type')
            .withProperty('shape')
            .noView()

    }

    static inject(){
service
        return [Element]

    }

    constructor(element) {

        this.element = element

    }


    bind(){

        this.element.classList.add('ai-action', `action-${this.type}`, `action-${this.shape}`)

    }
}
