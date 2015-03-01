import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Construction} from './construction'

let defaults = {
    class: {
        element : 'ai-action'    ,
        reveal  : 'action-reveal' ,
        color   : {
            primary:'action-primary',
            success:'action-success',
            info:'action-info',
            warning:'action-warning',
            danger:'action-danger',
            invert:'action-invert',
        },
        shape :{
            round: 'btn-round'
        },
        type: {
            reveal: 'action-reveal'
        },
        waves: {
            light: 'waves-light',
            dark: 'waves-dark'
        },
        btn: function(val){return `btn-${val}`},
        bg: function(color){return `bg-${color}`},
        text: function(color){return `text-${color}`}

    },
    properties: ['color', 'shape', 'type', 'size']
}




export class AiActionAttachedBehavior extends AiElement{

    static metadata(){

        return Behavior
            .withOptions().and(x =>{
                x.withProperty('action');
                x.withProperty('type');
                x.withProperty('color')
                x.withProperty('shape')
                x.withProperty('icon')
                x.withProperty('size')
                x.withProperty('waves')
                x.withProperty('bg')
                x.withProperty('bgc')
                x.withProperty('text')
                x.withProperty('textc')
                x.withProperty('active')
                x.withProperty('nextIcon', 'nextIconChanged', 'next-icon')

        });

    }

    static inject(){

        return [Element]

    }


    constructor(element) {

        this.element      = element
        this.element.classList.add(defaults.class.element)
        this.classList    = defaults.class
        this.elements     = {}
        this.current      = {}
    }


    bind(){
        this.defaultIcon = this.icon
        this.parent = this.element.parentNode
        this.setClass()
        this.createIcons()
        this.setEvents()
        this.btn    = this.element.getElementsByTagName('button')[0]
        if(!this.btn) this.btn = this.element.getElementsByTagName('ai-btn')[0]
        console.log(this.btn.getElementsByTagName('button')[0])

    }

    iconChanged(value){
        this.elements.icon.classList.remove(this.current.icon)
        this.elements.icon.classList.add(value)
        this.current.icon = value
        console.log(this)
    }

    activeChanged(value){
        this.icon = value ? this.nextIcon : this.defaultIcon
    }

    setClass(){
        let classList = ['ai-btn', this.classList.element]
        this.type  && classList.push(this.classList.btn(this.type))
        // this.bg    && classList.push((this.bg.slice(0,3) === 'bg-') ? this.bg : this.classList.bg(this.bg))
        // this.bgc   && classList.push(this.bg)
        // this.textc && classList.push((this.text.slice(0,3) === 'text-') ? this.text : this.classList.text(this.text))
        // this.text  && classList.push(this.text)
        this.addClass(classList)

    }

    setEvents(){
        this.parent.addEventListener('mouseenter', (evt)=>{
            evt.preventDefault()
            console.log('yolo')
            this.active = true
        })
        this.parent.addEventListener('mouseleave', (evt)=>{
            evt.preventDefault()
            this.active = false
        })
    }

    createIcons(){
        if(!!this.icon){
            this.elements.icon = document.createElement('I')
            this.elements.icon.classList.add(this.icon)
            this.current.icon = this.icon
        }
        if(!!this.nextIcon){
            this.elements.nextIcon = document.createElement('I')
            this.elements.nextIcon.classList.add(this.nextIcon)
        }
        this.icon &&(this.appendTo(this.elements.icon, this.btn))
    }

    appendTo(elements, el){
        el = el || this.element
        if(!Array.isArray(elements)) {elements = [elements]}
        for (let child of elements){
            el.appendChild(child)
        }
        return el
    }

    useColor(){
        (!!this.color) && this.addClass(this.classList.color[this.color])
    }

}
