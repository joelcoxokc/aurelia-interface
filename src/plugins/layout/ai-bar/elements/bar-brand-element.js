import {Behavior}  from  'aurelia-templating'
import {AiElement} from  './ai-element'

export class BarBrand extends AiElement{
    static metadata(){
        return Behavior
            .customElement('bar-brand')
            .withProperty('icon')
            .withProperty('value')
            .withProperty('link')
    }

    static injnect(){
        return [Element]
    }

    constructor(element){
        this.element = element
        this.addClass('bar-brand')
    }

    bind(){
        this.addIcon(this.icon)
    }


    addIcon(className){
        if(!this.icon || className) return
        var icon = document.createElement('I')
        icon.classList.add(this.icon || className)
        this.element.appendChild(icon)
    }


}
