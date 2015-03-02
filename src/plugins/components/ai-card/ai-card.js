import {Behavior} from 'aurelia-templating';
import {AiElement} from './ai-element';


export class AiCard extends AiElement{

    static metadata(){

        return Behavior
            .customElement('ai-card')
            .withProperty('heading')
            .withProperty('type', 'typeChanged')

    }

    static inject(){
        return [Element]
    }

    constructor(element){
        this.element = element
        this.heading = this.element.getElementsByClassName('card-heading')
    }

    bind(){
        this.heading = this.heading[0]
        this.addClass('ai-card')
    }

    typeChanged(){

    }

}
