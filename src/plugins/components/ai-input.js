import {Behavior}  from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Construction} from './construction'
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
        let construction = new Construction(this.element);
        this.element = element;
        this.border  = 'blue'
        this.containers = {}
        this.createElement = construction.createElement
        this.addClass = construction.addClass
        this.append = construction.append
        this.prepend = construction.prepend
        this.write = construction.write
        this.getTag = construction.getTag
        this.addEvent = construction.addEvent
        this.select = construction.select
    }

    bind(){

        this.element.classList.add('ai-input');

        console.log(this);
        this.containers = {
            input  : this.createElement('DIV', 'input-container', this.append),
            prefix : this.prefix  ? this.createElement('DIV', 'input-prefix-container', this.prepend) : this.select('input-prefix-container'),
            postfix: this.postfix ? this.createElement('DIV', 'input-postfix-container', this.append) : this.select('input-postfix-container'),
        }

        this.input  = this.getTag('input')
        this.icon  ? ( this.iconEl = this.createElement('I', this.icon) ) : (this.iconEl = this.getTag('I'))
        this.label ? ( this.labelEl = this.createElement('LABEL', 'input-label') ) : (this.labelEl = this.getTag('LABEL'));
        this.borderEl = this.createElement('DIV', 'input-border');

        this.label &&this.write(this.label, this.labelEl);
        (!this.label) && this.addClass('input-label', this.labelEl);

        this.labelEl &&this.append(this.labelEl, this.containers.input);
        this.append(this.input, this.containers.input);
        this.append(this.borderEl, this.containers.input);

        this.addEvent('click'   , this.element, this.toggleFocus(true));
        this.addEvent('focus'   , this.input, this.toggleFocus(true));
        this.addEvent('focusout', this.input, this.toggleFocus(false));

        this.prefix  && this.prepend(this.find(this.prefix), this.containers.prefix)
        this.postfix && this.append(this.find(this.postfix), this.containers.postfix)


    }

    unbind(){
        this.unbindInput();
    }

    bindInput(){
        this.label ? this.createLabel() : this.findLabel()
        this.icon  ? this.createIcon()  : this.findIcon()
        this.input.classList.add('input-control');
        this.input.addEventListener('focus', this.toggleFocus(true));
        this.input.addEventListener('focusout', this.toggleFocus(false));
        this.createBorder()
    }

    unbindInput(){

        this.input.classList.add('input-control');
        this.input.removeEventListener('focus', this.toggleFocus(true));
        this.input.removeEventListener('focusout', this.toggleFocus(false));

    }

    toggleFocus(value){
        var _this = this;
        return function(evt){
            if(value === true) {return _this.active = true;}
            if(value === false) {return _this.active = false;}
            _this.active = !_this.active;
        }

    }

    labelChanged(){
        this.labelEl.innerHTML = this.label
    }

    activeChanged(value){
        if(value){
            this.input.focus();
        }
        this.element.classList[value ? 'add':'remove']('active');

        this.element.classList[this.input.value ? 'add' : 'remove']('has-value')


    }

    find(value){
        if(value ==='icon' && this.iconEl) return this.iconEl;
        if(value[0] === '.'){
            return this.element.querySelector(value)
        }
        if(value[0] === '#'){
            return this.getId(value) || this.secect(value)
        }
        return this.getTag(value) || 'Cannot Find Elements'

    }

    // get label byTagName if exists addClass .input-label
    findLabel(){
        var labelEl = this.element.getElementsByTagName('label')[0]
        if(labelEl){
            this.labelEl = labelEl;
            this.labelEl.classList.add('input-label');
        }
    }

    // get icon byTagName if exists addClass .input-icon
    findIcon(){
        var iconEl = this.element.getElementsByTagName('I')[0]
        if(iconEl){
            this.iconEl = iconEL;
            this.iconEl.classList.add('input-icon');
        }
    }

    // create new Icon element, icon.addClass .input-icon, append to element, element.addClass has-icon
    createIcon(){
        this.iconEl = document.createElement('I')
        this.iconEl.classList.add(this.icon, 'input-icon')
        this.element.appendChild(this.iconEl)
        this.element.classList.add('has-icon')
    }

    // create new Label element, label.addClass .input-label, set innerHTMl to this.label, append to element
    createLabel(){
        this.labelEl = document.createElement('LABEL')
        this.labelEl.classList.add('input-label')
        this.labelEl.innerHTML = this.label
        this.element.appendChild(this.labelEl)
    }

    // create new Border element, border.addClass .input-border, append to element
    createBorder(){
        this.borderEl = document.createElement('DIV')
        this.borderEl.classList.add('input-border')
        this.element.appendChild(this.borderEl)
    }
}
