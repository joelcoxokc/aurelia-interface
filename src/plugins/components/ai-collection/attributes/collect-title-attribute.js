import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Construction} from './construction'
import {Util, ComponentTools} from './utils'

let defaults = {
    class: {

    },
    parent: {
        name: 'collectionItem'
    }
}



export class CollectTitleAttachedBehavior extends Util{

    static metadata(){

        return Behavior
            .withOptions().and(x =>{
                x.withProperty('expandable');
        });
    }

    static inject(){
        return [Element, ComponentTools]
    }

    get classList(){
        return this.element.classList;
    }

    get children(){
        this.element.children;
    }

    get parent(){
        return this.findParent(defaults.parent.name);
    }

    constructor(element, tools) {
        this.interfaceId = tools.generateId('CollectTitle');
        this.element = element
    }

    bind(){
        this.applyClasses()
    }
    attached(){
        this.parent.title = this;
    }

    applyClasses(){
        var classList = ['collection-item-title'];
        this.classList.add.apply(this.classList, classList);
    }

}

