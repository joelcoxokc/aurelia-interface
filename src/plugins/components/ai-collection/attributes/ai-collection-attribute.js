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
    get classList(){
        return this.element.classList;
    }

    static inject(){
        return [Element, ComponentTools]
    }

    /////////////////
    /// Item Binding
    set item(item){
        this.items[item.interfaceId] = item;
        this.bindItem(item);
        return item
    }

    set activeItem(id){
        if(id === this._activeItem) { return }
        this.itemExpanded(this._activeItem, id)
    }
}

class AiCollection extends Collection{

    configure(){
        this.style();
    }

    style(){
        var classList = ['ai-collection'];
        this.keepOpen     && classList.push(defaults.class.keepopen)
        this.showActions  && classList.push(defaults.class.showActions)
        this.classList.add.apply(this.classList, classList);
    }

    bindItem(item){
        item.expanded &&( this.activeItem = item.interfaceId );
        item.collection = this;
    }

    headingAttached(heading){
        heading.parent = this;
    }

    itemExpanded(oldId, newId){
        this._activeItem = newId;
        this.unExpandItem(oldId);
    }

    unExpandItem(interfaceId){
        this.items[interfaceId].expanded = false;
    }

}


export class AiCollectionAttachedBehavior extends AiCollection{
    static metadata(){

        return Behavior
            .withOptions().and(x =>{
                x.withProperty('expandable');
                x.withProperty('heading', 'headingAttached');
                x.withProperty('isAccordion');
                x.withProperty('keepOpen', 'keepOpenChanged', 'keep-open');
                x.withProperty('showActions', 'showActionsChanhed', 'show-actions');
            })
    }
    constructor(element, tools) {

        this.interfaceId  = tools.generateId('AiCollection');
        this.element      = element;
        this._activeItem  = null
        this.isAccordion  = this.isAccordion || true;
        this.accordion    = true;
        this.container    = {};
        this.expanded     = this.expanded || false;
        this.items        = {};
    }

    bind(){}

    attached(){
        this.configure();
    }
}





