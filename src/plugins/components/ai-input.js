import {Behavior}  from 'aurelia-templating'
import {AiElement} from './ai-element'

export class AiInput extends AiElement{
	
	static metadata(){
		return Behavior
			.customElement('ai-input')
			.withProperty('border')
			.withProperty('color')
			.withProperty('label')
			.withProperty('active')
	}
	
	static inject(){ return [Element]}
	
	constructor(element){
		this.element = element;
		this.border  = 'blue'
		this.label   = 'Label'
		
	}
	
	bind(){
		this.input = new Input(this.element.querySelector('input'), this)
		this.addClass('ai-input')
		this.input.addClass('input-control')
		// this.addEvent('click', event =>{
		// 	this.active = !this.active
		// })
	}
	
	activeChanged(value){
		this[value ? 'addClass':'removeClass']('active')
		
	}
	
}

class Input extends AiElement{
	
	constructor(element, parent){
		this.element = element;
		this.parent = parent
		this.addClass('input-control')
		this.addEvent('focus', ()=>{
			return this.parent.active = true
		})
		this.addEvent('focusout', ()=>{
			return this.parent.active = false
		})
	}
	
	
	
}