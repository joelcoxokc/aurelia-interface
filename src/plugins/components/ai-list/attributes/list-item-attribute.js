import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Construction} from './construction'

let defaults = {
    class: {
        item   : 'list-item'    ,
        content : 'item-content' ,
        title   : 'item-title' ,
        text    : 'item-text' ,
        prefix  : 'item-prefix' ,
        postfix : 'item-postfix' ,
    },
    elements: ['content','title','text','prefix','postfix']
}





export class ListItemAttachedBehavior{

    static metadata(){

        return Behavior
            .withOptions().and(x =>{
                x.withProperty('direction');
                x.withProperty('content');
                x.withProperty('title');
                x.withProperty('text');
                x.withProperty('prefix');
                x.withProperty('postfix');
        });

    }

    static inject(){

        return [Element, Construction]

    }


    constructor(element, construction) {

        this.element     = element
        this.elements    = {};
        this.containers  = {};
        this.classList   = defaults.class
        this.elementList = defaults.elements
        this.build      = new Construction(this.element);
        for(let item of this.elementList){this[item] = false}
    }


    bind(){
        this.build.addClass(this.classList.item)
        this.getOptions()
        this.buildItem()
    }

    getOptions(){
        for(let value of this.elementList){
            this.elements[value] = this.findOrCreate(value, (value === 'content'))
        }
    }

    buildItem(){
        this.appendTo(['title', 'text', 'postfix'], 'content')
        this.appendTo(['prefix', 'content'])
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

