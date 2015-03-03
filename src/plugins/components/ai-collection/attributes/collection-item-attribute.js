import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Construction} from './construction'

let defaults = {
    class: {
        item    : 'collection-item'         ,
        body    : 'collection-item-body'    ,
        title   : 'collection-item-title'   ,
        icon    : 'collection-item-icon'    ,
        header  : 'collection-item-header'  ,
        actions : 'collection-item-actions' ,
        summary : 'collection-item-summary' ,
        footer  : 'collection-item-footer'  ,
    },
    elements: ['body','title','icon',]
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
        });

    }

    static inject(){
        return [Element]
    }


    constructor(element) {

        this.element     = element
        this.elements    = {};
        this.containers  = {};
        this.elementList = defaults.elements
    }

    get classList(){
        return this.element.classList;
    }

    bind(){
        this.classList.add(defaults.class.item)
        this.getOptions()
        this.buildItem()
    }

    getOptions(){
    }

    buildItem(){
    }

    appendTo(elements, prop){
        prop = this.elements[prop] || this.element;

        if(!Array.isArray(elements)){ elements = [elements] }

        for(let el of elements){
            // console.log(el)
            this.elements[el] &&( this.build.append(this.elements[el], prop) )
        }

    }

    findOrCreate(prop, pass){

        let selection = this.build.getClassName(prop) || this.build.getClassName(this.classList[prop]);
        if(selection) {
            return this.swapClass(prop, this.classList[prop], selection)  }

        selection = this.build.getClassName(this[prop])
                    || this.build.getTagName(this[prop])
                    || this.build.select(this[prop]);
        if(selection) {
            return this.swapClass(prop, this.classList[prop], selection)  }

        if(!!this[prop] || pass){
            return this.build.createElement('DIV', this.classList[prop]);
        }
    }

    swapClass(last, next, el){
        el = el || this.element
        el.classList.remove(last)
        el.classList.add(next)
        return el
    }



}

