import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'

var defaults = {
    side: top,
    value: false
}

export class AiActionReveal extends AiElement{

    static metadata(){

        return Behavior
            .customElement('ai-action-reveal')
            .withProperty('value', 'valueChanged')
            .withProperty('side', 'sideChanged')

    }

    static inject(){

        return [Element]

    }


    constructor(element) {

        this.element = element
        this.current = defaults
        _.assign(this, this.current)

        this.handle = ()=>{
            this.value = !this.value
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

    toggleReveal(event){
        event.preventDefault();
        this.value = !this.value
    }

}
