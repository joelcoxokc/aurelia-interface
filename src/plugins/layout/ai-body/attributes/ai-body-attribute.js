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
export class AiBodyAttachedBehavior {

    static metadata(){
        return Behavior
            .withOptions().and((x)=>{
                x.withProperty('direction', 'directionChanged');
            })
    }

    static inject(){
        return [Element]
    }

    constructor(element){
        this.element = element;
    }

    bind(){
        this.applyClassList();
    }

    applyClassList(){
        var classList = ['ai-body'];
        this.direction &&( classList.push(`is-${this.direction}`) );
        this.element.classList.add.apply(this.element.classList, classList);
    }

    directionChanged(newDirection){
        newDirection = newDirection || defaults.direction;
        this.classList.remove(directions[newDirection])
        this.classList.add(oposites[newDirection])
    }
}
