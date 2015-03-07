import {Behavior} from 'aurelia-templating'
import {ComponentTools} from './utils'
import {iElement, ai} from './ai'

import {CollectionItem, defaults} from './collection-item-inheritance'

export class CollectionItemAttachedBehavior extends CollectionItem{

    static metadata(){

        return iElement.options((i)=>{
            i.option('body'       , 'childAttached');
            i.option('header'     , 'childAttached');
            i.option('actions'    , 'childAttached');
            i.option('isGroup',   , 'groupAttached');
            i.option('expanded'   , 'onExpand');
            i.option('showActions', 'showActionsChanged', 'show-actions');
            i.option('showActions', 'showActionsChanged', 'show-actions');
        });
    }

    static inject(){
        return [Element, ComponentTools]
    }

    constructor(element, tools) {
        this.element     = element;
    }

    attached(){

        this.configure();
        this.attachParent();

    }

    childAttached(child){
        // console.log(`${child.interfaceId}: attached`);
    }

    click(event){

        this.expand()

    }

    expand(expanded){

        this.expanded = (expanded === undefined) ? (!this.expanded) : (expanded || false)
        this.parent.activeChild = this.interfaceId;
    }

    onExpand(value){

        this.toggleClass(defaults.class.expanded, value)

    }

}



















