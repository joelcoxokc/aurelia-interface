import {Behavior}  from  'aurelia-templating'
import {AiElement} from  './ai-element'
import {Toggler}   from  './toggler'


export {BarBrandAttachedBehavior} from './bar-brand-attribute'
export {BarGroupAttachedBehavior} from './bar-group-attribute'
export {BarItemAttachedBehavior} from './bar-item-attribute'
export {BarBrand} from './bar-brand-element'
export {BarGroup} from './bar-group-element'
export {BarItem}  from './bar-item-element'
export class AiBar extends AiElement{

    static metadata(){
        return Behavior
            .customElement('ai-bar')
            .withProperty('view')
            .withProperty('brand')
            .withProperty('leftView')
            .withProperty('isMobile')
            .withProperty('rightView')
            .withProperty('bg'  )
            .withProperty('text')
            .withProperty('size')
    }

    static inject(){
        return [Element, Toggler]
    }

    constructor(element, toggler){

        this.element = element
        this.toggler = toggler
        this.current = { bg: 'blue'
                       , text: 'white'
                       , size: 'sm'
                       };

    }

    bind(){

        var classList = ['ai-bar'];
        this.bg && classList.push(`bg-${this.bg}`)
        this.text && classList.push(`text-${this.text}`)
        this.size && classList.push(`bar-${this.size}`)
        this.addClass(classList)

    }

    bgChanged()  { this.toggleClassList('bg'  , 'bg-'  , this) }
    textChanged(){ this.toggleClassList('text', 'text-', this) }
    sizeChanged(){ this.toggleClassList('size', 'bar-' , this) }
}

