import {Behavior}   from 'aurelia-templating'
import {UiElement}  from './ui-element'

export class UiToggleCustomElement extends UiElement {
    static metadata(){
        return Behavior
            .withProperty('toggle')
            .withProperty('icon')

    }

    static inject(){

        return [Element]

    }


    constructor(element){

        this.element = element

    }


    bind(){

        this.element.classList.add('aside-toggle', 'waves-effect', 'waves-light', 'no-select');

    }


}
