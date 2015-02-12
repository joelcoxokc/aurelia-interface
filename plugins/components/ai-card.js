import {Behavior, BoundViewFactory, ViewSlot} from 'aurelia-templating'

export class AiCard{

    static metadata(){

        return Behavior
            .withProperty('router')
            .withProperty('value')


    }


    static inject(){
        return [Element, BoundViewFactory, ViewSlot]
    }


    constructor(element, viewFactory, viewSlot){

        this.element     = element;
        this.viewFactory = viewFactory;
        this.viewSlot    = viewSlot;

    }


    bind(){
        this.element.classList.add('ai-card')
        console.log(this.contentView)
    }

    toggleMe(){

        console.log('Me')
    }


}
