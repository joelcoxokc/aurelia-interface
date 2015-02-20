import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {InterfaceElement} from './interface-element'
import {Toolbar}   from './toolbar'
import {Notify} from './notify';

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
    }

    static inject(){
        return [Element, Notify]
    }

    constructor(element, notify){
        var _this = this;

        this.events   = notify;
        this.element  = element
        this.current  = new Toolbar()


        _.assign(this, this.current);


        this.addClass('ai-toolbar')
        this.events.subscribe('$stateChanged', (payload)=>{
            console.log('Recieved from ai-toolbar', payload)
        })
    }

    bind(){
        this.container = new ToolbarContainer(this.element.firstElementChild)
    }

    toolbarChanged(tools){
        console.log('tools', tools)
    }


    bgChanged(value){
        return this.container.toggleClassList('bgColor', 'bg-', this, null, null, 'hello')
    }


    textChanged(value){
        return this.container.toggleClassList('textColor', 'text-', this)

    }

    brandChanged(){

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







/*
Object.observe(this.router, (evt, value)=>{
    var config = this.router.currentInstruction.config.toolbar
    config.size      ?( this.size = config.size )            : ( this.size = this.defaults.size )
    config.fixed     ?( this.fixed = config.fixed )          : ( this.fixed = this.defaults.fixed )
    config.bgColor   ?( this.bgColor = config.bgColor )      : ( this.bgColor = this.defaults.bgColor )
    config.textColor ?( this.textColor = config.textColor )  : ( this.textColor = this.defaults.textColor )
})
 */
