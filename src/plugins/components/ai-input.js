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
        this.find = construction.find
    }

    bind(){

        this.element.classList.add('ai-input');

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


}
