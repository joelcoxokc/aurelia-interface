import {Behavior} from 'aurelia-templating'
import {Toggler}  from './toggler'


export class AiTogglerAttachedBehavior{

    static metadata(){
        return Behavior
            .withOptions().and(x => {
                x.withProperty('delegate');
                x.withProperty('change');
                x.withProperty('delay');
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
        (this.delegate && !this.change)
                      &&( this.toggle   = this.toggler.delegate(this.delegate).toggle );
        this.change   &&( this.toggle   = this.toggler.delegate(this.delegate).change );
        this.toggleOn = this.toggleOn || 'click'
        this.element.addEventListener(this.toggleOn, (event)=>{
            event.preventDefault()
            if(this.delay){
                setTimeout(()=>{this.toggle()}, this.delay)
            } else {
                this.toggle()
            }

        })
    }

}
