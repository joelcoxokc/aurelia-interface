import {Behavior}  from 'aurelia-templating'
import {AiElement} from './ai-element'


export class AiBtn extends AiElement{

    static metadata(){

        return Behavior
            .customElement('ai-btn')
            .withProperty('shape', 'shapeChanged')
            .withProperty('type', 'typeChanged')
            .withProperty('icon', 'iconChanged')
            .withProperty('size', 'sizeChanged')
            .withProperty('nextIcon', 'nextIconChanged', 'next-icon')

    }

    static inject(){

        return [Element]

    }

    constructor(element){
        this.element = element

    }

    bind(){
        this.addClass('ai-btn', 'btn', `btn-${this.type}`,`btn-${this.shape}`, `btn-${this.size}`)
        this.icon &&( this.useIcon(this.icon) )
    }

    attachIcon(){
        this.iconElement = document.createElement("i");

        this.element.appendChild(this.iconElement)
    }

    useIcon(iconName){

        (!this.iconElement) &&( this.attachIcon() )
        this.iconElement.classList.add(iconName);
    }

}
