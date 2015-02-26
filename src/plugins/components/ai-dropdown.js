import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'


export class AiDropdown extends AiElement{

    static metadata(){

        return Behavior
            .customElement('ai-dropdown')
            .withProperty('isOpen', 'isOpenChanged')
            .withProperty('side', 'sideChanged')
            .withProperty('dropdownBtn')
    }


    static inject(){

        return [Element]

    }


    constructor(element){

        var _this = this;
        this.element = element
        this.isOpen    = false

        this.addClass('ai-dropdown', `dropdown-${this.side}`)

        this.toggle = function(){

            _this.isOpen = !_this.isOpen;

        }

    }


    bind()  {

        this.container    = this.element.querySelector('.dropdown-container')
        this.btnContainer = this.element.querySelector('.dropdown-btn-container')
        this.items = this.container.getElementsByClassName('ai-item')
        this.links = this.container.getElementsByClassName('ai-link')
        this.btn   = this.container.querySelector('ai-btn.dropdown-btn')
        this.element.addEventListener('click'   , this.toggle, false);
        this.btnContainer.appendChild(this.btn)
    }

    attached(){

    }

    unbind(){

        this.element.removeEventListener('click', this.toggle, false);

    }

    findWidth(elements){

        return (elements.length * 48) + 'px';
    }

    isOpenChanged(newValue){
        this.element.classList[newValue ? 'add':'remove']('dropdown-open');
        this.container.style.height = newValue ? this.findWidth(this.links) : '0px'
    }

}
