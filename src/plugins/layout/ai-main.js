import {Behavior} from 'aurelia-templating';
var directions,oposites,defaults;

directions ={
    row   : 'is-row',
    column: 'is-column'
}
oposites  ={
    column: directions.row ,
    row   : direction.column
}
defaults  = {
    direction: 'row'
}
export class AiBody{

    static metadata(){
        return Behavior
            .customElement('ai-main')
            .withProperty('container', 'containerChanged')
    }

    static inject(){
        return [Element]
    }

    constructor(element){

        this.element = element;

    }

    bind(){

        this.element.classList.add('ai-body')

    }

    containerChanged(hasContainer){

        this.classList[hasContainer ? 'add': 'remove']('main-container')

    }
}
