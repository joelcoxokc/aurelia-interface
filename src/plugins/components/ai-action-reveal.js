import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'

var defaults = {
    side: top,
    reveal: false
}

export class AiActionReveal extends AiElement{

    static metadata(){

        return Behavior
            .customElement('ai-action-reveal')
            .withProperty('reveal', 'onReveal')
            .withProperty('side'  , 'sideChanged')

    }

    static inject(){

        return [Element]

    }


    constructor(element) {

        this.element = element
        this.current = defaults

        _.assign(this, this.current)

        this.handle = ()=>{
            this.reveal = !this.reveal
        }
    }


    bind(){

        this.addClass('ai-action-reveal', `reveal-${this.side}`)
        this.addEvent('mouseenter', this.toggleReveal)
        this.addEvent('mouseout'  , this.toggleReveal)
    }


    unbind(){

        this.removeEvent('mouseenter', this.toggleReveal)
        this.removeEvent('mouseout'  , this.toggleReveal)

    }


    sideChanged(newSide){

        this.removeClass(`reveal-${this.current.side}`)
        this.addClass(`reveal-${newSide}`)

    }


    onReveal(value){

        this[value ? 'addClass' : 'removeClass']('reveal')

    }


    toggleReveal(event){
        event.preventDefault();
        this.reveal = !this.reveal
    }

}

