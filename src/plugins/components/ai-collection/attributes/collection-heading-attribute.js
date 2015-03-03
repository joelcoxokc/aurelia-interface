import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'

let defaults = {
    class: {
        heading      : 'collection-heading',
    },
}





export class CollectionHeadingAttachedBehavior{

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
        var classList = [this.classList.heading]
        this.color &&(classList.push(this.color))
        this.element.classList.add.apply(this.element.classList, classList)
    }

}

