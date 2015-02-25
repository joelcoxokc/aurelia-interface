import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'


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
        this.children = this.element.querySelectorAll('.ai-list')
        for(let index in this.children){
            this.children[index].classList.add('item')
        }

    }

    onReveal(value){
        console.log('revealed', value)
    }

    toggleReveal(event){
        event.preventDefault();
        this.reveal = !this.reveal
    }

}

