import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Construction} from './construction'

let defaults = {
    class: {
        viz: {
            true: 'show-actions'
        }
    }
}


export class CollectActionsAttachedBehavior{

    static metadata(){

        return Behavior
            .withOptions().and(x =>{
                x.withProperty('actions');
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
    }

    bind(){
        this.applyClasses()
    }

    applyClasses(){
        var classList = ['collection-item-actions'];
        this.viz && classList.push(defaults.class.viz[this.viz])
        this.classList.add.apply(this.classList, classList);
    }

}

