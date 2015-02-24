import {Behavior} from 'aurelia-templating';
import {AiElement} from './ai-element';
import {AsideToggle} from './aside-toggle';
import {Toggler} from './toggler';

let defaults =  { prefix : 'aside'
                , side   : 'right'
                , size   : 'sm'
                , isOpen : false
                , fold   : false
                , fixed  : true
                , state  : 'isOpen'
                , class  : { 'isOpen'  : 'aside-is-open'
                           , 'isFolded': 'aside-is-folded'
                           , 'isFixed' : 'aside-is-fixed'
                           , 'left'    : 'aside-left'
                           , 'right'   : 'aside-right'
                           , 'xs'      : 'aside-xs'
                           , 'sm'      : 'aside-sm'
                           , 'md'      : 'aside-md'
                           , 'lg'      : 'aside-lg'
                           , 'xl'      : 'aside-xl'
                           }
                }

export class AiAside extends AiElement{

    static metadata(){
        return Behavior
            .customElement('ai-aside')
            .withProperty( 'router' )
            .withProperty( 'state' )
            .withProperty( 'side'     , 'sideChanged')
            .withProperty( 'size'     , 'sizeChanged')
            .withProperty( 'isOpen'   , 'openChanged', 'is-open'  )
            .withProperty( 'isFolded' , 'foldChanged', 'is-folded')
            .withProperty( 'isFixed'  , 'fixChanged' , 'is-fixed' )
    }

    static inject(){
        return [Element, AsideToggle, Toggler]
    }

    constructor(element, asideToggle, toggler){
        this.toggler = toggler
        this.asideToggle = asideToggle;
        this.element = element
        this.currentSide = null
        this.state = this.fold || this.isOpen || defaults.aside;

    }

    bind(){
        var classList = ['ai-aside']

        this.side &&(classList.push( defaults.class[this.side]   ))
        this.size &&(classList.push( defaults.class[this.size]   ))
        this.isOpen   &&(classList.push( defaults.class.isOpen   ))
        this.isFixed  &&(classList.push( defaults.class.isFixed  ))
        this.isFolded &&(classList.push( defaults.class.isFolded ))
        this.addClass.apply(this, classList)

        this.asideToggle.init(this)
        this.toggler.register('aside-open', this, 'isOpen', null, this.onOpen)
        this.toggler.register('aside-fold', this, 'isFolded', null, this.onOpen)

        // console.log(this.toggler)

        // console.log('from aside', this.asideToggle)

    }

    onOpen(newValue, oldValue){
        console.log(newValue, oldValue)
    }

    openChanged(value){

        this.toggleClass(value, defaults.class.isOpen)

    }


    foldChanged(value){

        this.toggleClass(value, defaults.class.isFolded)
    }


    fixChanged(value){

        this.toggleClass(value, defaults.class.isFixed)

    }

    toggleClass(value, className){
        this[value ? 'addClass' : 'removeClass'](className)
    }

    sideChanged(newSide){
        newSide = newSide || defaults.side;
        this.removeClass(`aside-${this.currentSide}`)
        this.addClass(`aside-${newSide}`)
        this.currentSide = this.side;
    }
}
