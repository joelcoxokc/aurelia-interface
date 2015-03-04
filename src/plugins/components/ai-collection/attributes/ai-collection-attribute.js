import {Behavior, ChildObserver} from 'aurelia-templating'
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
                x.withProperty('items', 'itemsChanged', '[collection-item]');
                x.withProperty('items', 'itemsChanged', '[collection-item]');
                x.withProperty('keepOpen', 'keepOpenChanged', 'keep-open');
                x.withProperty('showActions', 'showActionsChanhed', 'show-actions');
        })
        .syncChildren('items', 'itemsChanged', '[collection-item]');
    }

    static inject(){
        return [Element, ChildObserver]
    }

    get classList(){
        return this.element.classList;
    }

    get children(){
        this.element.children;
    }


    constructor(element, childObserver) {
        this.element = element
        this.childObserver = childObserver;
    }

    bind(){
        this.applyClasses()
        console.log(this)

    }
    attached(){

    }

    itemsChanged(items){

    }

    applyClasses(){
        var classList = ['ai-collection'];
        this.showActions && classList.push(defaults.class.showActions)
        defaults.class.keepopen && classList.push(defaults.class.keepopen)
        this.classList.add.apply(this.classList, classList);
    }

}

