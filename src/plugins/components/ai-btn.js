import {Behavior}  from 'aurelia-templating'
import {AiElement} from './ai-element'

var properties = ['color', 'shape', 'type', 'size']

export class AiBtn extends AiElement{

    static metadata(){

        return Behavior
            .customElement('ai-btn')
            .withProperty('color')
            .withProperty('shape')
            .withProperty('type')
            .withProperty('icon')
            .withProperty('size')
            .withProperty('waves')
            .withProperty('bg')
            .withProperty('text')
            .withProperty('nextIcon', 'nextIconChanged', 'next-icon')

    }

    static inject(){

        return [Element]

    }

    constructor(element){
        this.element = element

    }

    bind(){
        var classList = ['ai-btn']
        _.each(properties, (item)=>{
            this[item] && classList.push(`btn-${this[item]}`)
        })
        if(this.text){
            for(var color of this.text.split(' ')){
                classList.push(`text-${color}`)
            }
        }
        if(this.bg){
            for(var color of this.bg.split(' ')){
                classList.push(`bg-${color}`)
            }
        }
        this.waves && classList.push('waves-effect', `waves-${this.waves}`)
        this.addClass.apply(this, classList)
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
