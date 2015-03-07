import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Construction} from './construction'
import {Util, ComponentTools} from './utils'
let defaults = {
    class: {
        viz: {
            true: 'show-actions'
        }
    },
    parent: {
        name: 'collectionItem'
    }
}

class Actions extends Util{
    get classList(){
        return this.element.classList;
    }

    get children(){
        this.element.children;
    }

    set parent(value){
        this.parentAttached(value);
    }
    get parent(){
        return this.findParent(defaults.parent.name);
    }
}

export class CollectActionsAttachedBehavior extends Actions{

    static metadata(){

        return Behavior
            .withOptions().and(x =>{
                x.withProperty('actions');
                x.withProperty('viz');
        });
    }


    static inject(){
        return [Element, ComponentTools]
    }

    constructor(element, tools) {
        this.interfaceId = tools.generateId('CollectActions');
        this.element = element;
    }

    bind(){
        this.applyClasses();
    }
    attached(){
        this.parent.actions = this;

    }
    parentAttached(){
    }

    applyClasses(){
        var classList = ['collection-item-actions'];
        this.viz && classList.push(defaults.class.viz[this.viz])
        this.classList.add.apply(this.classList, classList);
    }

}

