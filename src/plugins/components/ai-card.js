import {Behavior} from 'aurelia-templating';


export class AiCard{

    static metadata(){

        return Behavior
            .customElement('ai-card')
            .withProperty('type')

    }

    static inject(){
        return [Element]
    }

    constructor(element){
        this.element = element
    }

    bind(){
        this.element.classList.add('ai-card')
    }

}
