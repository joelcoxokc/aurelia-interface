import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Construction} from './construction'

let defaults = {
    class: {
        main: 'ai-collection',
        showActions: 'collection-show-actions'
    }
}

export class AiCollectionAttachedBehavior{

    static metadata(){

        return Behavior
            .withOptions().and(x =>{
                x.withProperty('expandable');
                x.withProperty('heading');
                x.withProperty('items');
                x.withProperty('showActions', 'showActionsChanhed', 'show-actions');
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
        var classList = ['ai-collection'];
        this.showActions && classList.push(defaults.class.showActions)
        this.classList.add.apply(this.classList, classList);
    }

}

