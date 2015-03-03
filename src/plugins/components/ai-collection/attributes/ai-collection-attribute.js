import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Construction} from './construction'

export class AiCollectionAttachedBehavior{

    static metadata(){

        return Behavior
            .withOptions().and(x =>{
                x.withProperty('expandable');
                x.withProperty('heading');
                x.withProperty('items');
        });
    }

    static inject(){
        return [Element]
    }

    get classList(){
        return this.element.classList;
    }

    get children(){
        this.element.children;
    }


    constructor(element) {
        this.element = element
    }

    bind(){
        this.applyClasses()
    }

    applyClasses(){
        var classList = [];
        this.classList.add('ai-collection');
    }

}

