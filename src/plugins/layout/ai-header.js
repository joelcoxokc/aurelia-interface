import {Behavior} from 'aurelia-templating';

var defaults =  { size : 'sm'
                , fixed: true
                , bgColor  : 'white'
                , textColor: 'purple'
                }

export class AiHeader{

    static metadata(){
        return Behavior
            .customElement('ai-header')
            .withProperty('router')
            .withProperty('size'      , 'sizeChanged')
            .withProperty('fixed'     , 'fixedChanged')
            .withProperty('bg-color'  , 'bgChanged')
            .withProperty('text-color', 'textChanged')
    }

    static inject(){
        return [Element]
    }

    constructor(element){

        this.element     = element
        this.currentSize = defaults.size;
        this.currentBg   = defaults.bgColor;
        this.currentText = defaults.textColor;

    }

    bind(){
        this.classList = [];
        this.addClass('ai-header')
    }

    sizeChanged(newSize){
        newSize = newSize || defaults.size;
        this.removeClass(`header-${this.currentSize}`)
        this.addClass(`header-${newSize}`)
        this.currentSize = this.size;

    }

    bgChanged(newBg){

        this.removeClass(`bg-${this.currentBg}`)
        this.addClass(`bg-${this.newBg}`)
        this.currentBg = this.bgColor

    }

    textChanged(value){
        this.removeClass(`text-${this.currentText}`)
        this.addClass(`text-${this.newText}`)
        this.currentText = this.textColor
    }

    addClass(){

        this.element.classList.add.apply(this.element.classList, arguments);

    }


    removeClass(){

        this.element.classList.remove.apply(this.element.classList, arguments);

    }
}
