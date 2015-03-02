import {Behavior}  from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Router} from 'aurelia-router'

var properties = ['color', 'shape', 'type', 'size']

export class AiBtnAttachedAttribute extends AiElement{

    static metadata(){

        return Behavior
            .withProperty('flex')
            .withProperty('center')
            .withProperty('color')
            .withProperty('shape')
            .withProperty('type')
            .withProperty('icon')
            .withProperty('size')
            .withProperty('waves')
            .withProperty('bg')
            .withProperty('text')
            .withProperty('link')
            .withProperty('nextIcon', 'nextIconChanged', 'next-icon')

    }

    static inject(){

        return [Element, Router]

    }

    constructor(element, router){
        this.element = element
        this.addClass('ai-btn');
        this.splitter  = /\s*,\s*/;

        this.goTo = function(url){
            router.navigate(url);
        }
    }

    bind(){
        this.btn = this.element.getElementsByClassName('btn')[0]
        this.applyClassList();
        this.link &&( this.createLink() );
        this.icon &&( this.useIcon(this.icon) );
    }

    applyClassList(){
        var classList = []
        if(this.center) this.addClass('center')
        if(this.flex)   this.addClass(`is-${this.flex}`)
        _.each(properties, (item)=>{
            this[item] && classList.push(`btn-${this[item]}`)
        })
        this.bg   && classList.push(this.bg.split(this.splitter))

        this.text && classList.push(this.text.split(this.splitter))
        this.waves && classList.push('waves-effect', `waves-${this.waves}`)

        this.btn.classList.add.apply(this.btn.classList, classList)
    }

    createLink(){
        this.btn.addEventListener('click', (evt)=>{
            evt.preventDefault();
            this.goTo(this.link)
        })
    }

    attachIcon(){
        this.iconElement = document.createElement("i");

        this.btn.appendChild(this.iconElement)
    }

    useIcon(iconName){

        (!this.iconElement) &&( this.attachIcon() )
        this.iconElement.classList.add(iconName);
    }

}
