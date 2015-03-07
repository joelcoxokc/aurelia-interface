import {Behavior, ChildObserver} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Construction} from './construction'
import {ComponentTools} from './utils'
import {ai, iElement} from './ai'

let defaults = {
    class: {
        main: 'ai-collection',
        showActions: 'collection-show-actions'
    },
    item: {
        name: 'collectionItem',
        main: 'collection-item',
    }
}
defaults.item.expanded = `${defaults.item.main}-expanded`;

let count = 0;


class Collection{

    get children(){
        return this.element.children
    }
    get heading(){
        return this.element.querySelector('[collect-heading]')
    }
    get classList(){
        return this.element.classList;
    }

    static inject(){
        return [Element, ComponentTools]
    }

    static metadata(){

        return iElement
            .options(x =>{
                x.option('expandable');
                x.option('heading', 'headingAttached');
                x.option('isAccordion');
                x.option('keepOpen', 'keepOpenChanged', 'keep-open');
                x.option('showActions', 'showActionsChanhed', 'show-actions');
                x.option('items', 'itemAttached', '[collection-item]');
            })
            .syncChildren('items', 'itemAttached', '[collection-item]');
    }

}

class AiCollection extends Collection{

    set parent(value){
        this.parentAttached(value);
    }

    get parent(){
        return this.findParent(defaults.parent.name);
    }

    configure(){
        this.style();
        this.bindChildren();
        this.parent && this.parent.collection = this;
    }

    bindChildren(){
        for(let child of this.items){
            this.container[child.interfaceId] = child;
            this.container[child.interfaceId].expanded &&( this._activeChild = child.interfaceId );
            this.childBind(this.container[child.interfaceId]);
        }
    }

    style(){
        var classList = ['ai-collection'];
        this.keepOpen     && classList.push(defaults.class.keepopen)
        this.showActions  && classList.push(defaults.class.showActions)
        this.classList.add.apply(this.classList, classList);
    }

    parentAttached(parent){
        this.element.classList.add('ai-collection-item');
    }

    itemAttached(){}
}


export class AiCollectionAttachedBehavior extends AiCollection{

    set activeChild(id){
        if(id === this._activeChild) { return }

        this.childExpanded(this._activeChild, id)
    }


    constructor(element, tools) {

        this.interfaceId  = tools.generateId('AiCollection');
        this.element      = element;
        this._activeChild = null
        this.accordion    = true;
        this.container    = {};
        this.expanded     = this.expanded || false;
        this.isAccordion  = this.isAccordion || true

    }

    bind(){}

    childBind(child){
        child.parent = this;
    }

    attached(){
        this.configure();
    }

    headingAttached(heading){
        heading.parent = this;
    }

    childAttched(child){}

    childExpanded(oldId, newId){
        this._activeChild = newId;
        this.unExpand(oldId);
    }

    unExpand(interfaceId){
        console.log(this.container)
        this.container[interfaceId].expanded = false;
    }



}
