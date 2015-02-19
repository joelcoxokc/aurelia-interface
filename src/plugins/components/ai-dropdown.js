import {Behavior} from 'aurelia-templating'


export class AiDropdown{

    static metadata(){

        return Behavior
            .customElement('ai-dropdown')
            .withProperty('isOpen', 'isOpenChanged')
            .withProperty('side', 'sideChanged')

    }


    static inject(){

        return [Element]

    }


    constructor(element){

        var _this = this;
        this.element = element
        this.isOpen    = false

        this.toggle = function(){

            _this.isOpen = !_this.isOpen;

        }

    }


    bind()  {

        this.element.addEventListener('click'   , this.toggle, false);

    }


    unbind(){

        this.element.removeEventListener('click', this.toggle, false);

    }


    isOpenChanged(newValue){

        this.element.classList[newValue ? 'add':'remove']('dropdown-open');

    }

}
