import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Construction} from './construction'
import {Util, ComponentTools} from './utils'
import {ai, iElement} from './ai'

let defaults = {
    parent: {
        name: 'collectionItem',
        class: 'collection-item'
    }
}


class CollectionHeader extends Util{

    set parent(value){
        this.parentAttached(value);
    }

    get parent(){
        return this.findParent(defaults.parent.name);
    }

}

export class CollectHeaderAttachedBehavior extends CollectionHeader{

    static metadata(){

        return iElement.options(i =>{
           i.option('expandable');
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

    constructor(element, tools) {
        this.tools = tools;
        this.interfaceId = this.tools.generateId('CollectHeader');
        this.element = element;

        this._handleEvent = (evt)=>{
            evt.preventDefault();
            this.click()
        }
    }

    bind(){
        // this.element.on('click', this._handleEvent)
        this.applyClasses()
    }
    attached(){
        this.parent.header = this;
        this.expandOnClick();

    }

    expandOnClick(){
        this.element.addEventListener('click', this._handleEvent.bind(this));
    }

    click(event){
        this.parent.expand();
    }

    applyClasses(){
        var classList = ['collection-item-header'];
        this.element.classList.add.apply(this.element.classList, classList);
    }

}

