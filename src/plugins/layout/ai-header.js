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
        this.addClass('ai-header', `header-`+this.size)

        Object.observe(this.router, function(){
            _this.size = _this.router.currentInstruction.config.toolbar.size      || _this.current.size
            _this.bg = _this.router.currentInstruction.config.toolbar.bgColor     || _this.current.bg
            _this.text = _this.router.currentInstruction.config.toolbar.textColor || _this.current.text
        })
    }

    sizeChanged(newSize){
        newSize = newSize || defaults.size;
        this.removeClass(`header-${this.current.size}`)
        this.addClass(`header-${newSize}`)
        this.current.size = this.size;

    }

    bgChanged(newBg){

        this.removeClass(this.current.bg)
        this.addClass(newBg)
        this.current.bg = newBg

    }

    textChanged(newText){
        this.removeClass(this.current.text)
        this.addClass(newText)
        this.current.text = newText
    }


    addClass(){
        var args = _.flatten(arguments, true)
        console.log('add',args)
        this.element.classList.add.apply(this.element.classList, args)
    }

    removeClass(){
        var args = _.flatten(arguments, true)
        console.log('remove', args)
        this.element.classList.removeClass.apply(this.element.classList, args)
    }
}
