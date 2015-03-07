import {Behavior, ChildObserver} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Construction} from './construction'


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
    static metadata(){

        return Behavior
            .withOptions().and(x =>{
                x.withProperty('expandable');
                x.withProperty('heading');
                x.withProperty('keepOpen', 'keepOpenChanged', 'keep-open');
                x.withProperty('showActions', 'showActionsChanhed', 'show-actions');
                x.withProperty('items', 'itemsChanged', '[collection-item]');
        })
        .syncChildren('items', 'itemsChanged', '[collection-item]');
    }

    static inject(){
        return [Element]
    }
}

class CollectionItems extends Collection{
    bindItems(){
        for(let child of this.items){
            child.interfaceId = defaults.item.name + count
            count++
            this.bindItem(child)
        }
    }
    bindItem(item){
        this.container[item.interfaceId] = item;
        this.container[item.interfaceId].parent = this;
    }
}

export class AiCollectionAttachedBehavior extends CollectionItems{


    constructor(element) {
        this.element = element;
        this.accordion = true;
        this.expanded = this.expanded || false;
        this.container = {};
    }

    bind(){
        this.applyClasses();
        this.bindItems();
    }

    attached(){

    }


    itemExpanded(interfaceId){
        for(let item of this.children){
            (item.interfaceId !== interfaceId) && this._hideChild(item)
        }
    }

    _toggleChild(child){
        child.collectionItem.expanded = false;
    }

    itemsChanged(){

    }

    applyClasses(){
        var classList = ['ai-collection'];
        this.keepOpen     && classList.push(defaults.class.keepopen)
        this.showActions  && classList.push(defaults.class.showActions)
        this.classList.add.apply(this.classList, classList);
    }

}
