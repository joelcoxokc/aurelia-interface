import {Behavior}   from  'aurelia-templating'
import {AiElement}  from  './ai-element'
import {BarService} from  './bar-service'

let defaults = {
    side: 'left'
}

export class BarGroupAttachedBehavior extends AiElement{

    static metadata(){
        return Behavior
            .withOptions().and(x =>{
                x.withProperty('items')
            })
    }

    static injnect(){
        return [Element]
    }

    constructor(element){
        this.element = element
        this.bar     = new BarService()

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
