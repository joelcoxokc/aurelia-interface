import {Behavior}  from  'aurelia-templating'
import {AiElement} from  './ai-element'

export class BarItem extends AiElement{

    static metadata(){
        return Behavior
            .customElement('bar-item')
            .withProperty('icon')
            .withProperty('waves')
            .withProperty('textc')
            .withProperty('text')
            .withProperty('bgc')
            .withProperty('bg')
            .withProperty('link')
    }

    static injnect(){
        return [Element]
    }

    constructor(element){
        this.element = element
        this.addClass('bar-item')
    }

    attached(){
        this.textColor = this.text || this.textc
        this.bgColor   = this.bg   || this.bgc
    }


}
