import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'

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
    elements: ['body','title','icon',]
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




export class CollectionItemAttachedBehavior{

    static metadata(){

        return Behavior
            .withOptions().and(x =>{
                x.withProperty('title');
                x.withProperty('icon');
                x.withProperty('summary');
                x.withProperty('actions');
                x.withProperty('expanded');
                x.withProperty('showActions', 'showActionsChanged', 'show-actions');
                x.withProperty('header', 'headerChanged', '[collect-header]');
            })

    }

    static inject(){
        return [Element]
    }

    constructor(element) {
        this.element     = element;
        this.elements    = {};
        this.containers  = {};
    }
    get parent(){
        return this.element.parentElement.aiCollection
    }
    get classList(){
        return this.element.classList;
    }

    get children(){
        return {body    : this._getElement('body')
               ,title   : this._getElement('title')
               ,header  : this._getElement('header')
               ,actions : this._getElement('actions')
               ,summary : this._getElement('summary')
               }
    }

    bind(){
        this._applyClassList();
    }

    attached(){
        this.bindClick();
        // this.things = this.observer.createBinding('expand', this)

    }

    bindClick(){
        this.children.header.addEventListener('click', this._onClick.bind(this), false);

    }

    _expand(parent){
        this.expanded = !this.expanded;
        this.parent.itemExpanded(this.element)
    }

    _applyClassList(){
        var classList = [defaults.class.main];
        this.expanded    && classList.push(defaults.class.expanded);
        this.showActions && classList.push(defaults.class.showActions);
        this.classList.add.apply(this.classList, classList);
    }

    _onClick(evt){
        if(evt.target.classList.contains(defaults.class.actions) || evt.target.nodeName === 'I') return
        evt.preventDefault();
        this._expand()
    }

    _getElement(name){
        return this.element.getElementsByClassName( (defaults.prefix.long + name) )[0] || $(`[${defaults.prefix.long}${name}]`)[0];
    }



    expandedChanged(value){
        this.classList[value ? 'add' : 'remove'](defaults.class.expanded);

    }



}

function validateTarget(event){
    if(evt.target.classList.contains(defaults.class.actions) || evt.target.nodeName === 'I') return false
    return true
}

