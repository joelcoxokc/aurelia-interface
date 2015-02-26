import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'

export {ListItem} from './list-item'
export {ListItemAttachedBehavior} from './list-item-attribute'
export {ListHeadingAttachedBehavior} from './list-heading-attribute'
export class AiList extends AiElement{

    static metadata(){

        return Behavior
            .customElement('ai-list')
            .withProperty('direction')
            .withProperty('header')
            .withProperty('items')

    }

    static inject(){

        return [Element]

    }


    constructor(element) {

        this.element = element

    }


    bind(){

        this.addClass('ai-list', `list-${this.direction}`)


    }

    onReveal(value){
        console.log('revealed', value)
    }

    toggleReveal(event){
        event.preventDefault();
        this.reveal = !this.reveal
    }

}

