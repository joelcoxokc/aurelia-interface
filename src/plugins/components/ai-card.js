import {Behavior} from 'aurelia-templating';
import {AiElement} from './ai-element';


export class AiCard extends{

    static metadata(){

        return Behavior
            .customElement('ai-card')
            .withProperty('type', 'typeChanged')

    }

    static inject(){
        return [Element]
    }

    constructor(element){
        this.element = element
    }

    bind(){
        this.addClass('ai-card')
    }

    typeChanged(){

    }

}
