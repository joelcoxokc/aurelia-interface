import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Construction} from './construction'
import {Util, ComponentTools} from './utils'
import {ai, iElement} from './ai'

let defaults = {
    name: 'collectBody',
    parent: {
        name: 'collectionItem',
        class: 'collection-item'
    },
    class:{
        main: 'collection-item-body',
        expanded: 'item-expanded'
    }
}


export class CollectBodyAttachedBehavior extends Util{

    static metadata(){

        return Behavior
            .withOptions().and(x =>{
                x.withProperty('expanded');
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
        return this.findParent(defaults.parent.name)
    }


    constructor(element, tools) {
        this.interfaceId = tools.generateId('CollectBody');
        this.element = element
    }

    bind(){
        this.applyClasses()
    }

    attached(){

        this.parent.body = this;
    }

    applyClasses(){
        var classList = [defaults.class.main];
        this.classList.add.apply(this.classList, classList);
    }

    expandedChanged(value){
        this.classList[ai.toggle(value)](defaults.class.expanded);

    }

}


