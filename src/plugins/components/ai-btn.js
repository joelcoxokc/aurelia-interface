import {Behavior}  from 'aurelia-templating'
import {AiElement} from './ai-element'

var properties = ['color', 'shape', 'type', 'size']

export class AiBtn extends AiElement{

    static metadata(){

        return Behavior
            .customElement('ai-btn')
            .withProperty('flex')
            .withProperty('center')
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
        this.addClass('ai-btn')
    }

    bind(){
        if(this.center) this.addClass('center')
        if(this.flex)   this.addClass(`is-${this.flex}`)
        this.btn = this.element.getElementsByClassName('btn')[0]
        var classList = []
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
        this.btn.classList.add.apply(this.btn.classList, classList)
        this.icon &&( this.useIcon(this.icon) )
    }

    attachIcon(){
        this.iconElement = document.createElement("i");

        this.btn.appendChild(this.iconElement)
    }

    useIcon(iconName){

        (!this.iconElement) &&( this.attachIcon() )
        this.iconElement.classList.add(iconName);
    }

}
