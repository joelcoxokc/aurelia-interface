import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Toolbar}   from './toolbar'
import {ActivatorService} from './activator-service';

var defaults =  [ 'size' , 'fixed' , 'bgColor' , 'textColor' , 'brand' ]

export class AiToolbarAttachedBehavior extends Toolbar{

    static metadata(){
        return Behavior
            .withOptions().and((x)=>{
                x.withProperty('router');
                x.withProperty('fixed');
                x.withProperty('brand', 'brandChanged');
                x.withProperty('bgColor', 'bgChanged');
                x.withProperty('textColor', 'textChanged');
                x.withProperty('size', 'sizeChanged');
                x.withProperty('toolbar', 'toolbarChanged');
                x.withProperty('multi-menu');
            })
    }

    static inject(){
        return [Element, ActivatorService]
    }

    constructor(element, activator){
        var _this = this;
        this.current  = {}
        this.element  = element
        this.activator = activator
        this.splitter = this.splitter  = /\s*,\s*/;

        _.assign(this.current, this.defaults);

        for(let prop in defaults){
            this.activator.activateProperty(`ai-toolbar-${prop}`     , this, prop)
        }

        this.element.classList.add('ai-toolbar')
    }

    bind(){
        this.parent = this.element.parentElement;
    }

    bgChanged(value){
        value = value.split(this.splitter)
        console.log(value)
        this.element.classList.remove.apply(this.element.classList, this.current.bgColor)
        this.element.classList.add.apply(this.element.classList, value);
        this.current.bgColor = value
    }

    textChanged(value){
        value = value.split(this.splitter)
        this.element.classList.remove.apply(this.element.classList, this.current.textColor)
        this.element.classList.add.apply(this.element.classList, value);
        this.current.textColor = value
    }
    sizeChanged(value){

        this.parent.classList.remove(`header-${this.current.size}`)
        this.parent.classList.add(`header-${value}`)
        this.element.classList.remove(`toolbar-${this.current.size}`)
        this.element.classList.add(`toolbar-${value}`)
        this.current.size = value
    }

}


class ToolbarContainer extends AiElement{

    constructor(...args){
        this.element = args[0]
    }
}

