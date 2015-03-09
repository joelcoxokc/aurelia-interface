import {Behavior} from 'aurelia-templating'
import {ComponentTools} from './utils'
import {iElement, ai} from './ai'
// import {Item} from './aicollectionitem'

import {CollectionItem, defaults} from './collection-item-inheritance'

class Helpers{


    set collection(parent){
        this.collectionAttach(parent)
    }

    get collection(){
        if(this.element.parentElement.aiCollection){
            return this.element.parentElement.aiCollection;
        }
        return false;
    }

    configure(){
        this.style();
        this.attachToCollection();
    }

    style(){

        var classList = [this.defaults.class.main];
        this.expanded    && classList.push(this.defaults.class.expanded);
        this.showActions && classList.push(this.defaults.class.showActions);
        this.element.classList.add.apply(this.element.classList, classList);

    }

    attachToCollection(){
        this.collection && ( this.collection.item = this )
    }

    collectionAttach(aiCollection){
        console.log('Parent Attatched',this.collection.interfaceId,  this.interfaceId);
    }

    childAttached(child){
        // console.log(`${child.interfaceId}: attached`);
    }


    toggleClass(property, value){
        this.element.classList[ai.toggle(value)](property);
    }
}

export class CollectionItemAttachedBehavior extends Helpers{

    static metadata(){

        return iElement.options((i)=>{
            i.option('body'       , 'childAttached');
            i.option('header'     , 'childAttached');
            i.option('actions'    , 'childAttached');
            i.option('isGroup'    , 'groupAttached');
            i.option('expanded'   , 'onExpand');
            i.option('showActions', 'showActionsChanged', 'show-actions');
        });
    }

    static inject(){
        return [Element, ComponentTools]
    }

    constructor(element, tools) {
        this.interfaceId = ai.generateId('collectionItem');
        this.element     = element;
        this.defaults    = defaults;
        this.expanded    = this.expanded || false;
    }

    attached(){

        this.configure();

    }

    expand(override, value){
        if(override){ this.expanded = value; }
        else {this.expanded = !this.expanded; }

        this.collection.activeItem = this.interfaceId;
    }

    onExpand(value){

        this.toggleClass(defaults.class.expanded, value)

    }

}



















