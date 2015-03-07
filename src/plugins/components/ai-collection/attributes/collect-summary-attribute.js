import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Construction} from './construction'

let defaults = {
    viz:true
}

export class CollectSummaryAttachedBehavior{

    static metadata(){

        return Behavior
            .withOptions().and(x =>{
                x.withProperty('expandable');
                x.withProperty('viz');
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

        this.viz = defaults.viz;
    }

    bind(){
        this.applyClasses()
    }

    applyClasses(){
        var classList = ['collection-item-summary'];
        this.classList.add.apply(this.classList, classList);
    }

}

