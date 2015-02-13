import {Behavior}   from 'aurelia-templating'
import {UiElement}  from './ui-element'

export class AiToggle extends UiElement {
    static metadata(){
        return Behavior
            .customElement('ai-toggle')
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
        this.element.addEventListener('click', function(event){
            $('ai-nav-aside').toggleClass('open')
        })
        this.element.classList.add('aside-toggle', 'waves-effect', 'waves-light', 'no-select');

    }




}
