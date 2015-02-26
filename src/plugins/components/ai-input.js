import {Behavior}  from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Construction} from './construction'

let defaults = { control  : {class: 'input-control', el: 'DIV'}
               , postfix  : {class: 'input-postfix', el: 'DIV'}
               , prefix   : {class: 'input-prefix' , el: 'DIV'}
               , border   : {class: 'input-border' , el: 'DIV'}
               , label    : {class: 'input-label'  , el: 'LABEL'}
               , icon     : {class: 'icon'         , el: 'I'}
               , input    : {class: 'input'        , el: 'INPUT'}
               , active   : {class: 'active'}
               , hasValue : {class: 'has-value'}
               , hasIcon  : {class: 'has-icon'}
}

export class AiInputAttachedBehavior{

    static metadata(){
        return Behavior
            .withOptions().and((x)=>{
                x.withProperty('border');
                x.withProperty('color');
                x.withProperty('label');
                x.withProperty('active');
                x.withProperty('icon');
                x.withProperty('prefix');
                x.withProperty('postfix');
            })
            .useView('./ai-input.html')
    }

    static inject(){ return [Element]}

    constructor(element){
        this.element = element;
        let construction = new Construction(this.element);

        this.border  = 'blue'

        this.containers = {}
        this.children   = {}
        this.elements   = {}

        this.find          = construction.find
        this.write         = construction.write
        this.select        = construction.select
        this.getTag        = construction.getTag
        this.append        = construction.append
        this.prepend       = construction.prepend
        this.addEvent      = construction.addEvent
        this.addClass      = construction.addClass
        this.getTagName    = construction.getTagName
        this.getClassName  = construction.getClassName
        this.createElement = construction.createElement
    }

    bind(){

        this.element.classList.add('ai-input');
        this.setInput()
        this.setLabel()
        this.setBorder()
        this.setIcon()
        this.setContainers()
        this.setEvents()
    }


    setInput(){
        // if(input does not exists) return Error
        this.elements.input = this.getTagName('input')
        if(!this.elements.input){console.error('Input Element not')}
    }


    setLabel(){
        // if(label)
            // elements.label = create element LABEL.input-label
            // elements.label innerHTML is this.label
        if(this.label){
            this.elements.label = this.createElement(defaults.label.el, defaults.label.class);
            this.write(this.label, this.elements.label);
            return;
        }

        // elements.label = <label> addClass .input-label
        this.elements.label = this.getTagName(defaults.label.el.toLowerCase());

        // else if( <label> ) doe not exists return
        if(!this.elements.label){return}

        // elements.label addClass .input-label
        this.addClass(defaults.label.class, this.elements.label);
    }


    setBorder(){
        // elements.border = create element DIV.input-border
        this.elements.border = this.createElement(defaults.border.el, defaults.border.class);
    }


    setIcon(){

        this.elements.icon = this.icon ? this.createElement(defaults.icon.el, defaults.icon.class) : this.getTagName(defaults.icon.el.toLowerCase());

        if(!this.elements.icon) {return}

        this.addClass(this.icon, this.elements.icon);
        this.addClass(defaults.hasIcon.class);
        if (this.postfix === 'icon'){ this.elements.postfix = this.elements.icon };
        if (this.prefix === 'icon') { this.elements.prefix  = this.elements.icon };

        if(!this.prefix && !this.postfix){
            this.prefix = this.prefix || 'icon'
            this.elements.prefix = this.elements.icon
        }
    }


    setContainers(){

        this.createContainers();
        this.append(this.containers.control)
        this.containers.prefix  &&( this.append(this.containers.prefix)  )
        this.containers.postfix &&( this.append(this.containers.postfix) )
    }


    setEvents(){

        this.addEvent('click'   , this.element       , this.toggleFocus(true))
        this.addEvent('focus'   , this.elements.input, this.toggleFocus(true))
        this.addEvent('focusout', this.elements.input, this.toggleFocus(false))
    }


    createContainers(){

        // create control set control
        this.containers.control = this.findOrCreate(defaults.control.el, defaults.control.class);
        this.containers.control.appendChild(this.elements.label);
        this.containers.control.appendChild(this.elements.input);
        this.containers.control.appendChild(this.elements.border);

        // set findOrCreate prefix, set prefix
        this.prefix  && (  this.containers.prefix  = this.findOrCreate(defaults.prefix.el, defaults.prefix.class )  );
        if(this.elements.prefix ) { this.containers.prefix.appendChild(this.elements.prefix) }

        // set findOrCreate postfix, set postfix
        this.postfix && (  this.containers.postfix = this.findOrCreate(defaults.postfix.el, defaults.postfix.class)  );
        if(this.elements.postfix) { this.containers.postfix.appendChild(this.elements.postfix) }

    }


    findOrCreate(tagName, className){

        var el = this.getClassName(className)
        el = el ? el : this.createElement(tagName.toUpperCase())
        this.addClass(className, el)
        return el
    }

    // Cache for child lookup. Currently not in sue
    child(value, el){
        if(this.children[value]) {return this.children[value]}
        el = el || this.element
        var found = el.querySelector(value);
        found ? (this.children[value] = found) : (this.children[value] = false);
        // console.info(`Child ${value} was ${value ? 'NOT FOUND' : 'FOUND'}`)
        return this.children[value];
    }


    toggleFocus(value){
        var _this = this;
        return function(evt){
            if(value === true) {return _this.active = true;}
            if(value === false) {return _this.active = false;}
            _this.active = !_this.active;
        }
    }

    // This is used just in case we had to dynamically add the label
    labelChanged(){

        this.labelEl.innerHTML = this.label
    }

    // Changes ti be made when the element is active/focused
    // add class has-value, to prevent the label from falling back down after focus out.
    activeChanged(value){
        if(value){
            this.elements.input.focus();
        }
        this.element.classList[value ? 'add':'remove'](defaults.active.class);

        this.element.classList[this.elements.input.value ? 'add' : 'remove'](defaults.hasValue.class)
    }



}
