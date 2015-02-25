import {Behavior}  from  'aurelia-templating'
import {AiElement} from  './ai-element'
import {BarService} from  './bar-service'
let defaults = {
    side: 'left'
}

export class BarGroup extends AiElement{

    static metadata(){
        return Behavior
            .customElement('bar-group')
            .withProperty('items')
    }

    static injnect(){
        return [Element]
    }

    constructor(element){
        this.bar     = new BarService()
        this.element = element
        this.addClass('bar-group', `bar-group-${this.bar.current}`)
    }
    attached(){

    }

    bind(){
        this.addItems(this.items)
    }

    addItems(items){
        if (!items || !this.items) return

    }


}
