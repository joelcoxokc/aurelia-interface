import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Construction} from './construction'

export class AiList{

    static metadata(){

        return Behavior
            ,withOptions().and(x =>{
                x.withProperty('direction');
                x.withProperty('columns');
                x.withProperty('header');
                x.withProperty('items');
                x.withProperty('rows');
        });

    }

    static inject(){

        return [Element, Construction]

    }


    constructor(element, construction) {
        this.build   = construction
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

