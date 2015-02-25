import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {InterfaceElement} from './interface-element'
import {Toolbar}   from './toolbar'
import {Notify} from './notify';
import {AsideToggle} from './aside-toggle';


var defaults =  [ 'size' , 'fixed' , 'bgColor' , 'textColor' , 'brand' ]

export class AiToolbar extends AiElement{

    static metadata(){
        return Behavior
            .customElement('ai-toolbar')
            .withProperty('router')
            .withProperty('fixed')
            .withProperty('brand', 'brandChanged')
            .withProperty('bgColor', 'bgChanged')
            .withProperty('textColor', 'textChanged')
            .withProperty('size', 'sizeChanged')
            .withProperty('toolbar', 'toolbarChanged')
            .withProperty('multi-menu')
    }

    static inject(){
        return [Element, Notify, AsideToggle]
    }

    constructor(element, notify, asideToggle){
        var _this = this;
        this.asideToggle = asideToggle;
        this.events   = notify;
        this.element  = element
        this.current  = new Toolbar()
        this.person = 'joel'

        _.assign(this, this.current);



        this.addClass('ai-toolbar')
        this.events.subscribe('$stateChanged', (payload)=>{
        })
    }

    bind(){
        this.container = new ToolbarContainer(this.element.firstElementChild)
    }
    bgChanged(value){
        return this.container.toggleClassList('bgColor', '', this)
    }


    textChanged(value){
        return this.container.toggleClassList('textColor', '', this)

    }
    sizeChanged(value){
        return this.toggleClassList('size', 'toolbar-')
    }

}


class ToolbarContainer extends AiElement{

    constructor(...args){
        this.element = args[0]
    }
}


