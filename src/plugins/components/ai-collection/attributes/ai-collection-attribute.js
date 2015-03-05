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


export class AiCollectionAttachedBehavior{

    static metadata(){

        return Behavior
            .withOptions().and(x =>{
                x.withProperty('expandable');
                x.withProperty('heading');
                x.withProperty('keepOpen', 'keepOpenChanged', 'keep-open');
                // x.withProperty('showActions', 'showActionsChanhed', 'show-actions');
                x.withProperty('items', 'itemsChanged', '[collection-item]');
        })
        .syncChildren('items', 'itemsChanged', '[collection-item]');
    }

    static inject(){
        return [Element]
    }

    get classList(){
        return this.element.classList;
    }

    set items(value){
        console.log('setter', value)
    }

    constructor(element) {
        this.element = element;
        this.accordion = true;
        this.children = {};
    }

    bind(){
        this.applyClasses()
        console.log(this)

    }

    attached(){
        for(let child of this.items){
            child.interfaceId = defaults.item.name + count
            count++
        }
    }

    itemExpanded(el){
        for(let child of this.items){
           (child.interfaceId !== el.interfaceId) && this._toggleChild(child);
        }
    }

    _toggleChild(child){
        child.collectionItem.expanded = false;
    }

    itemsChanged(){

    }

    applyClasses(){
        var classList = ['ai-collection'];
        this.showActions && classList.push(defaults.class.showActions)
        defaults.class.keepopen && classList.push(defaults.class.keepopen)
        this.classList.add.apply(this.classList, classList);
    }

}






















