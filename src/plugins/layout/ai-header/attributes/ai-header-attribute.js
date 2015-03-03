import {Behavior} from 'aurelia-templating';
import {ActivatorService} from './activator-service'

var defaults =  { size : 'sm'
                , fixed: false
                , bg  : 'white'
                , text: 'purple'
                }

export class AiHeaderAttachedBehavior{

    static metadata(){
        return Behavior
            .withOptions().and((x)=>{
                x.withProperty('size'      , 'sizeChanged');
                x.withProperty('fixed'     , 'fixedChanged');
                x.withProperty('bg'        , 'bgChanged');
                x.withProperty('text'      , 'textChanged');
            })
    }

    static inject(){
        return [Element, ActivatorService]
    }

    constructor(element, activator){
        this.activator = activator
        this.element     = element
        this.current     = defaults;
        _.assign(this, this.current)

    }

    bind(){
        this.activator.activateProperty('ai-header-size', this, 'size');
        this.applyClasses();
    }

    applyClasses(){
        var classList = ['ai-header'];
        this.bg    && classList.push(`bg-${this.bg}`);
        this.text  && classList.push(`text-${this.text}`);
        this.size  && classList.push(`header-${this.size}`);
        this.element.classList.add.apply(this.element.classList, classList)
    }

    sizeChanged(newSize){
        newSize = newSize || defaults.size;
        this.element.classList.remove(`header-${this.current.size}`)
        this.element.classList.add(`header-${newSize}`)
        this.current.size = this.size;
    }

    bgChanged(newBg){

        this.element.classList.remove(this.current.bg)
        this.element.classList.add(newBg)
        this.current.bg = newBg
    }

    textChanged(newText){
        this.element.classList.remove(this.current.text)
        this.element.classList.add(newText)
        this.current.text = newText
    }

}
