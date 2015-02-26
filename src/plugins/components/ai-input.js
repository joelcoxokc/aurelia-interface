import {Behavior}  from 'aurelia-templating'
import {AiElement} from './ai-element'

export class AiInputAttachedBehavior{

	static metadata(){
		return Behavior
			.withOptions().and((x)=>{
				x.withProperty('border');
				x.withProperty('color');
				x.withProperty('label');
				x.withProperty('active');
				x.withProperty('icon');
			})
			.useView('./ai-input.html')
	}

	static inject(){ return [Element]}

	constructor(element){
		this.element = element;
		this.border  = 'blue'
		this.containers = {}
		
	}

	bind(){
		
		this.input = this.element.getElementsByTagName('input')[0]
		this.element.classList.add('ai-input');
		this.element.addEventListener('click', (evt)=>{
			evt.preventDefault();
			this.active = true;
		})
		this.icon && this.createIcon();
		this.prefix && this.createContainer('prefix', this.prefix)
		this.bindInput();
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
			evt.preventDefault();
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
	
	createContainer(container, content){
		var name = container ? container : 'input'
		
		this.containers[name] = document.createElement('DIV')
		this.containers[name].classList.add(`input-${container ? container+'-': ''}container`);
		content && (this.containers[name].appendChild(content))
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
