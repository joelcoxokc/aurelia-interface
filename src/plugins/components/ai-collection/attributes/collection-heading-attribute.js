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

    configure(element){

        this.createEvents();
        this.style()
    }

    style(){

        var classList = [this.classList.heading]
        this.color &&(classList.push(this.color));
        this.element.classList.add.apply(this.element.classList, classList);
    }

    createEvents(){
        this.element.addEventListener('click', (evt)=>{
            evt.preventDefault();
            this.click(evt)
        });
    }
}

export class CollectionHeadingAttachedBehavior extends CollectionHeader{


    static metadata(){
        return iElement.options(x =>{
            x.option('title');
            x.option('color');
            x.option('icon');
        });
    }

    static inject(){

        return [Element, ComponentTools]
    }

    constructor(element, tools) {
        this.interfaceId = tools.generateId('CollectTitle')
        this.element     = element
        this.classList   = defaults.class
    }


    bind(){
        this.configure();
    }

    click(evt){
        console.log('Hello Event')
    }

    attach(){
        this.bindParent();
    }

}

