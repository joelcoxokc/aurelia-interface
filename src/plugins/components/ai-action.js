import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'



export class AiAction extends AiElement{

    static metadata(){

        return Behavior
            .customElement('ai-action')
            .withProperty('type')
            .withProperty('shape')
            .withProperty('reveal', 'onReveal')

    }

    static inject(){

        return [Element]

    }


    constructor(element) {

        this.element = element


        this.handle = ()=>{
            this.reveal = !this.reveal
        }
    }


    bind(){

        this.addClass('btn', 'btn-large', 'btn-raised', 'waves-effect', 'waves-light', 'ai-action', `action-${this.type}`, `action-${this.shape}`)
        this.addEvent('mouseenter', this.toggleReveal)
        this.addEvent('mouseout'  , this.toggleReveal)

    }

    onReveal(value){
        console.log('revealed', value)
    }

    toggleReveal(event){
        event.preventDefault();
        this.reveal = !this.reveal
    }

}

