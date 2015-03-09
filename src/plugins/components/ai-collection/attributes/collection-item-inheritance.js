import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {CollectionContainer} from './CollectionContainer'
import {Util} from './utils'
import {iElement, ai} from './ai'

export let defaults = {
    name: 'collectionItem',
    prefix: {
        long: 'collection-item-',
        short: 'item-'
    },
    class: {
        main     : 'collection-item'         ,
        body     : 'collection-item-body'    ,
        title    : 'collection-item-title'   ,
        icon     : 'collection-item-icon'    ,
        header   : 'collection-item-header'  ,
        actions  : 'collection-item-actions' ,
        summary  : 'collection-item-summary' ,
        footer   : 'collection-item-footer'  ,
        expanded : 'collection-item-expanded',
        showActions : 'item-show-actions',
    },
    attrs: {
        header  : 'collect-header',
        body    : 'collect-body',
        actions : 'collect-actions',
        title   : 'collect-title',
        icon    : 'collect-icon',
        summary : 'collect-summary',
    },
    elements: ['body','title','icon'],
    parent: {
        name: 'aiCollection'
    }
}
let bodyProps = {
    display: {
        true      : 'flex',
        false     : 'none'
    },

    visibility: {
        true: 'visible',
        false: 'hidden'
    },
    opacity   : {
        true : 1,
        false: 0
    }
}



class Item extends Util{

    findElement(name, el){
        return this[`_${name}`] || this.find(`[${this.defaults.attrs[name]}]`) || this.findClass(this.defaults.class[name]);
    }
}


class CollectionEvents{
    onHeaderClicked(){
        this.expand();
    }
}

class CollectionStyles extends CollectionEvents{

    toggleClass(property, value){
        this.classList[ai.toggle(value)](property);
    }

    style(){

        var classList = [this.defaults.class.main];
        this.expanded    && classList.push(this.defaults.class.expanded);
        this.showActions && classList.push(this.defaults.class.showActions);
        this.classList.add.apply(this.classList, classList);

    }
}

export class CollectionItem extends CollectionStyles{

    configure(){
        this.interfaceId = tools.generateId('CollectionItem');
        this.defaults = defaults;
        this.style();
    }
}
