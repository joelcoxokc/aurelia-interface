import {Behavior} from 'aurelia-templating';
import {AiElement} from './ai-element';


export class AiCardAttachedBehavior extends AiElement{

    static metadata(){

        return Behavior
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
