import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Construction} from './construction'

export class CollectSummaryAttachedBehavior{

    static metadata(){

        return Behavior
            .withOptions().and(x =>{
                x.withProperty('expandable');
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
        var classList = ['collection-item-summary'];
        this.classList.add.apply(this.classList, classList);
    }

}

