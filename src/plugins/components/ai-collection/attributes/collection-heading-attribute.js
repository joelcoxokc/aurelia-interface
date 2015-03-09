import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {ComponentTools} from './utils'
import {iElement, ai} from './ai'

let defaults = {
    class: {
        heading      : 'collection-heading',
    },
}

class CollectionHeader{
    static inject(){
        return [Element]
    }

    get collection(){
        return this.element.parentElement.aiCollection ? this.element.parentElement.aiCollection : false;
    }

    configure(element){

        this.style();
        this.attachToCollection();
        this.createEvents();
    }

    style(){

        var classList = [this.classList.heading]
        this.color &&(classList.push(this.color));
        this.element.classList.add.apply(this.element.classList, classList);
    }

    attachToCollection(){
        this.collection.heading = this;
    }

    createEvents(){
        this.element.addEventListener('click', (evt)=>{
            evt.preventDefault();
            this.click(evt)
        });
    }
}

export class CollectionHeadingAttachedBehavior extends CollectionHeader{

    static inject(){

        return [Element, ComponentTools]
    }
    static metadata(){
        return iElement.options(x =>{
            x.option('title');
            x.option('color');
            x.option('icon');
        });
    }


    constructor(element, tools) {
        this.interfaceId = tools.generateId('CollectTitle')
        this.element     = element
        this.classList   = defaults.class
    }


    bind(){
    }

    click(evt){
        this.collection.expand();
    }

    attached(){
        this.configure();
    }

}

