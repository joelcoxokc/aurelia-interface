import {Behavior} from 'aurelia-templating'
import {Toggler}  from './toggler'


export class AiTogglerAttachedBehavior{

    static metadata(){
        return Behavior
            .withOptions().and(x => {
                x.withProperty('nextIcon', 'nextChanged', 'next-icon');
                x.withProperty('icon');
                x.withProperty('delegate');
                x.withProperty('toggleOn', 'onChanged', 'toggle-on');
            })
    }


    static inject(){
        return [Element, Toggler]
    }

    constructor(element, toggler){

        this.element = element
        this.toggler = toggler

    }

    bind(){
        this.toggle = this.toggler.toggle(this.delegate)
        this.toggleOn = this.toggleOn || 'click'
        this.element.addEventListener('click', (event)=>{
            event.preventDefault()
            this.toggle()
        })
    }



}
