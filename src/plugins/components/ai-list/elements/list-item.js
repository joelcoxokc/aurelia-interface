import {Behavior}  from 'aurelia-templating'
import {AiElement}  from './ai-element'


export class ListItem extends AiElement{

    static metadata(){
        return Behavior
            .customElement('list-item')
            .withProperty('columns')
            .withProperty('rows')
            .withProperty('prefix')
            .withProperty('postfix')
            .withProperty('active')
    }

    static inject(){
        return [Element]
    }

    constructor(element){
        this.element = element
        this.addClass('list-item')
    }
}
