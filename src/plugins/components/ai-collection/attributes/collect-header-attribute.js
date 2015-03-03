import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Construction} from './construction'

export class CollectHeaderAttachedBehavior{

    static metadata(){

        return Behavior
            .withOptions().and(x =>{
                x.withProperty('expandable');
        });
    }


    static inject(){
        return [Element]
    }

    get classList(){
        return this.element.classList;
    }

    get children(){
        this.element.children;
    }

    constructor(element) {
        this.element = $(element)

        this._handleEvent = (evt)=>{
            evt.preventDefault();
            this.service.activate();
        }
    }

    bind(){
        this.element.on('click', this._handleEvent)
        this.applyClasses()
    }

    applyClasses(){
        var classList = ['collection-item-header'];
        this.element.addClass('collection-item-header');
    }

}

