import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'

let defaults = {
    class: {
        active: 'modal-active'
        ,xs: 'modal-xs'
        ,sm: 'modal-sm'
        ,md: 'modal-md'
        ,lg: 'modal-lg'
        ,xl: 'modal-xl'
        ,size:'modal-md'
    },

}

export class AiNote extends AiElement{

    static metadata(){

        return Behavior
            .customElement('ai-note')
            .withProperty('size')
            .withProperty('side')
            .withProperty('drop')
            .withProperty('active')

    }

    static inject(){

        return [Element]

    }


    constructor(element) {
        this.classList = defaults.class
        this.element   = element
        this.active    = false

    }


    bind(){
        this.size = this.size || this.classList.size
        this.addClass('ai-modal', `modal-${this.size}`)

    }

    activeChanged(value){
        this[value ? 'addClass' :  'removeClass'](this.classList.active)
    }

}

