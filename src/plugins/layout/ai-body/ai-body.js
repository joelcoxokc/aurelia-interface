import {Behavior} from 'aurelia-templating'

var directions,oposites,defaults

directions ={
    row   : 'is-row',
    column: 'is-column'
}
oposites  ={
    column: directions.row,
    row   : directions.column
}
defaults  = {
    direction: 'row'
}

export {AiBodyAttachedBehavior} from './ai-body-attribute'

export class AiBody {

    static metadata(){
        return Behavior
            .customElement('ai-body')
            .withProperty('direction', 'directionChanged')
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

    directionChanged(newDirection){
        newDirection = newDirection || defaults.direction;
        this.classList.remove(directions[newDirection])
        this.classList.add(oposites[newDirection])
    }
}
