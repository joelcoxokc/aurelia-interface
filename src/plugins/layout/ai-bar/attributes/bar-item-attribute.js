import {Behavior}  from  'aurelia-templating'
import {AiElement} from  './ai-element'

export class BarItemAttachedBehavior extends AiElement{

    static metadata(){
        return Behavior
            .withOptions().and(x =>{
                x.withProperty('icon')
                x.withProperty('waves')
                x.withProperty('textc')
                x.withProperty('text')
                x.withProperty('bgc')
                x.withProperty('bg')
                x.withProperty('link')
            })
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
