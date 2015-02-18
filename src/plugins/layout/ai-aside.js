import {Behavior} from 'aurelia-templating';

var defaults =  {
                , side : 'right'
                , size : 'sm'
                , open : false
                , fold : false
                , fixed: true
                }

export class AiAside{

    static metadata(){
        return Behavior
            .customElement('ai-aside')
            .withProperty('router')
            .withProperty('side' , 'sideChanged')
            .withProperty('size' , 'sizeChanged')
            .withProperty('open' , 'openChanged')
            .withProperty('fold' , 'foldChanged')
            .withProperty('fixed', 'fixedChanged')
    }

    static inject(){
        return [Element]
    }

    constructor(element){

        this.element = element
        this.currentSide = null

    }

    bind(){
        this.classList = [];
        this.addClass('ai-aside')
    }

    sideChanged(newSide){
        newSide = newSide || defaults.side;
        this.removeClass(`aside-${this.currentSide}`)
        this.addClass(`aside-${newSide}`)
        this.currentSide = this.side;

    }

    addClass(){

        this.element.classList.add.apply(this.element.classList, arguments);

    }


    removeClass(){

        this.element.classList.remove.apply(this.element.classList, arguments);

    }
}
