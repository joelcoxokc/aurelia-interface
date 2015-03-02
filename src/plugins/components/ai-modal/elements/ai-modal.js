import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'

export {AiModalAttachedBehavior} from './ai-modal-attribute'

export class AiModal extends AiElement{

    static metadata(){

        return Behavior
            .customElement('ai-modal')
            .withProperty('size')
            .withProperty('drop')

    }

    static inject(){

        return [Element]

    }


    constructor(element) {

        this.element = element

    }


    bind(){

        this.addClass('ai-modal', `modal-${this.size}`)

    }

}

