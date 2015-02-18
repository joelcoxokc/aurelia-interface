import {Behavior, BoundViewFactory, ViewSlot} from 'aurelia-templating'

export class AiCard{

    static metadata(){

        return Behavior
            .customElement('ai-card')
            .withProperty('heading')

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
        console.log('attached')
        this.element.classList.add('ai-card');
    }

    toggleMe(){

        console.log('Me')
    }


}
