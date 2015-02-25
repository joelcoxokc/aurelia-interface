import {Behavior}  from 'aurelia-templating'
import {AiElement} from './ai-element'

export class AiInput{

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
		this.input = this.element.querySelector('input')
		this.element.classList.add('ai-input')
        console.log(this.input)
		// this.input.addClass('input-control')
		// this.addEvent('click', event =>{
		// 	this.active = !this.active
		// })
	}

	activeChanged(value){
		this.element.classList[value ? 'add':'remove']('active')

	}

}

class Input extends AiElement{

	constructor(element, parent){
		this.element = element;
		this.parent = parent
		// this.addClass('input-control')
		// this.addEvent('focus', ()=>{
		// 	return this.parent.active = true
		// })
		// this.addEvent('focusout', ()=>{
		// 	return this.parent.active = false
		// })
	}



}
