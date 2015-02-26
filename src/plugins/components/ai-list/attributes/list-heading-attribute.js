import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'

let defaults = {
    class: {
        item      : 'list-item',
        heading   : 'list-heading'
    },
}





export class ListHeadingAttachedBehavior extends AiElement{

    static metadata(){

        return Behavior
            .withOptions().and(x =>{
                x.withProperty('title');
                x.withProperty('color');
                x.withProperty('icon');
        });

    }

    static inject(){

        return [Element]

    }


    constructor(element, construction) {

        this.element     = element
        this.classList   = defaults.class
    }


    bind(){
        var classList = [this.classList.item, this.classList.heading]
        this.color &&(classList.push(this.color))
        this.addClass(classList)
    }

}

