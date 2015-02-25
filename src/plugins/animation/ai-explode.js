import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Toggler}   from './toggler'

export class AiExplode extends AiElement{

    static metadata(){
        return Behavior
            .customElement('ai-explode')
            .withProperty('shape')
            .withProperty('bg')
            .withProperty('explode')
    }

    static inject(){
        return [Element, Toggler]
    }

    constructor(element, toggler){
        this.element = element;
        this.toggler = toggler;
        this.explode = false;
    }

    bind(){

        this.addClass('ai-explode')
        this.span    = this.element.querySelector('span')
        this.span.classList.add(this.bg)
        this.toggler.register('explode-main', this, 'explode', null, this.onExplode)
    }

    onExplode(){
        console.log('exploded')

    }

    explodeChanged(value){
        this[value ? 'addClass' : 'removeClass']('explode')
    }

    attached(){

    }
}
