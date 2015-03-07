import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {CollectionContainer} from './CollectionContainer'
let defaults = {
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
    elements: ['body','title','icon']
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


class Utility {

    all(selector, el){
        el = el || this.element;
        return el.querySelectorAll(selector);
    }
    allClass(){
        el = el || this.element;
        return el.getElementsByClassName(selector);
    }
    allTag(selector, el){
        el = el || this.element;
        return el.getElementsByTagName(selector);
    }
    find(selector, el){
        el = el || this.element;
        return el.querySelectorAll(selector)[0];
    }
    findClass(){
        el = el || this.element;
        return el.getElementsByClassName(selector)[0];
    }
    findTag(selector, el){
        el = el || this.element;
        return el.getElementsByTagName(selector)[0];
    }

    get classList(){
        return this.element.classList;
    }
}

class Item extends Utility{

    findElement(name, el){
        return this[`_${name}`] || this.find(`[${defaults.attrs[name]}]`) || this.findClass(defaults.class[name]);
    }
    get children(){
        this.__children = this.__children || this.element.children;
        return this.__children;
    }

    get header(){
        this._header = this._header || (this.children[0].getAttribute(defaults.attrs.header) && this.children[0]) || this.findTag('header') || this.findClass(defaults.class.header)
        return this._header;
    }

    get actions(){
        this._actions = this.findElement('actions', this.header);
        return this._actions;
    }

    get title(){
        this._title = this.findElement('title', this.header);
        console.log(this._title)
        return this._title;
    }
    get summary(){
        this._summary = this.findElement('summary', this.header);
        return this._summary;
    }
    get body(){
        this._body = this.findElement('body');
        return this._body;
    }
    get icon(){
        this._icon = this.findElement('icon', this.header);
        return this._icon;
    }
}

class CollectionItem extends Item{

    buildItem(){
        this.buildHeader();
        this.buildBody()
    }
    buildHeader(){
        console.log(this.header)
        this.header.classList.add(defaults.class.header);
        this.actions.classList.add(defaults.class.actions);
        this.title.classList.add(defaults.class.title);
        this.icon.classList.add(defaults.class.icon);
    }
    buildBody(){
        this.body && (this.body.classList.add(defaults.class.body));
    }
    _applyClassList(){
        var classList = [defaults.class.main];
        this.expanded    && classList.push(defaults.class.expanded);
        this.showActions && classList.push(defaults.class.showActions);
        this.classList.add.apply(this.classList, classList);
    }


}

export class CollectionItemAttachedBehavior extends CollectionItem{

    static metadata(){

        return Behavior
            .withOptions().and(x =>{
                x.withProperty('expanded');
                x.withProperty('showActions', 'showActionsChanged', 'show-actions');
            });
    }

    static inject(){
        return [Element, CollectionContainer]
    }

    constructor(element, collections) {
        this.element     = element;
    }

    bind(){

    }

    attached(){
        this._applyClassList();
        this.buildItem();
        this.bindClick();
    }

    bindClick(){
        this.header.addEventListener('click', this._onClick.bind(this));
    }

    _expand(parent){
        this.expanded = !this.expanded;
        this.parent.itemExpanded(this.interfaceId)
    }


    _onClick(evt){
        if(evt.target.classList.contains(defaults.class.actions) || evt.target.nodeName === 'I') return
        evt.preventDefault();
        this._expand();
    }

    expandedChanged(value){
        this.classList[value ? 'add' : 'remove'](defaults.class.expanded);

    }
}



















