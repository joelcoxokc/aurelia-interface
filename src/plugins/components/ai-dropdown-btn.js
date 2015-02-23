import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'


export class DropdownBtnAttachedBehavior extends AiElement{

    static metadata(){

        return Behavior
            .attachedBehavior('dropdown-btn')
            .withOptions().and(x => {
                x.withProperty('size');
                x.withProperty('type');
                x.withProperty('shape');
                x.withProperty('color');
                x.withProperty('waves');
                x.withProperty('icon');
            })
            .useView('./ai-dropdown-btn.html')


    }


    static inject(){

        return [Element]

    }


    constructor(element){

        var _this = this;
        this.element = element
        this.isOpen    = false

        this.dropdownBtn = element.querySelector('.ai-dropdown-btn')
        this.addClass('dropdown-btn')
    }


    bind()  {

        this.addEvent('click', this.toggle, false);
    }


    unbind(){

        this.element.removeEventListener('click', this.toggle, false);

    }



    isOpenChanged(newValue){

        this.element.classList[newValue ? 'add':'remove']('dropdown-open');

    }

}
