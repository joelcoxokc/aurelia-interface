import {Behavior} from 'aurelia-templating'
import {Container} from 'aurelia-framework'
import {Inst} from '../main'

var directions = {
    column:'is-column',
    row   :'is-row'
}
var defaults = {
    direction:'row'
}

export class AInterface{


    static metatdata(){

        return Behavior
            .customElement('a-interface')
            .withProperty('direction', 'directionChanged')
            .withProperty('router')
            .withProperty('aside')
            .withProperty('toolbar')
    }

    static inject(){
        return [Element, Inst]
    }


    constructor(element, inst){
        this.inst = inst

        this.element   = element;
        this.direction = defaults.direction


    }

    bind(){
        this.classList = ['a-interface']
        this.direction && this.classList.push(`is-${this.direction}`)
        this.addClass.apply(this, this.classList)

    }

    directionChanged(value){
        var lastClass = (value === 'row') ? 'column' : 'row';
        this.removeClass(directions[lastClass]);
        this.addClass(directions[value]);
    }


    addClass(){

        this.element.classList.add.apply(this.element.classList, arguments);

    }


    removeClass(){

        this.element.classList.remove.apply(this.element.classList, arguments);

    }
}


