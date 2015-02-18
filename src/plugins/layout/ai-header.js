import {Behavior} from 'aurelia-templating';

var defaults =  { size : 'sm'
                , fixed: false
                , bg  : 'white'
                , text: 'purple'
                }

export class AiHeader{

    static metadata(){
        return Behavior
            .customElement('ai-header')
            .withProperty('router')
            .withProperty('size'      , 'sizeChanged')
            .withProperty('fixed'     , 'fixedChanged')
            .withProperty('bg'        , 'bgChanged')
            .withProperty('text'      , 'textChanged')
    }

    static inject(){
        return [Element]
    }

    constructor(element){

        this.element     = element
        this.current     = defaults;
        _.assign(this, this.current)

    }

    bind(){

        var _this = this;
        this.classList = [];
        this.element.classList.add('ai-header', `header-`+this.size)

        Object.observe(this.router, function(){
            console.log('headomg', _this.router.currentInstruction.config.toolbar.bgColor)
            _this.size = _this.router.currentInstruction.config.toolbar.size      || _this.current.size
            _this.bg = _this.router.currentInstruction.config.toolbar.bgColor     || _this.current.bg
            _this.text = _this.router.currentInstruction.config.toolbar.textColor || _this.current.text
        })
    }

    sizeChanged(newSize){
        newSize = newSize || defaults.size;
        this.element.classList.remove(`header-${this.current.size}`)
        this.element.classList.add(`header-${newSize}`)
        this.current.size = this.size;

    }

    bgChanged(newBg){

        this.element.classList.remove(`bg-${this.current.bg}`)
        this.element.classList.add(`bg-${newBg}`)
        this.current.bg = newBg

    }

    textChanged(newText){
        this.element.classList.remove(`text-${this.current.text}`)
        this.element.classList.add(`text-${newText}`)
        this.current.text = newText
    }


    addClass(){

        this.element.classList.add.apply(this.element.classList, arguments);

    }


    removeClass(){

        this.element.classList.remove.apply(this.element.classList, arguments);

    }
}
