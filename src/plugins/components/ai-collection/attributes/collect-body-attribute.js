import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Construction} from './construction'

export class CollectBodyAttachedBehavior{

    static metadata(){

        return Behavior
            .withOptions().and(x =>{
                x.withProperty('expanded');
        });
    }

    get classList(){
        return this.element.classList;
    }

    get children(){
        this.element.children;
    }

    static inject(){
        return [Element]
    }

    constructor(element) {
        this.element = element
    }

    bind(){
        this.applyClasses()
    }

    applyClasses(){
        var classList = ['collection-item-body'];
        this.classList.add.apply(this.classList, classList);
    }

    expandedChanged(value){
        this.classList[value ? 'add' : 'remove']('item-expanded');
    }

}


