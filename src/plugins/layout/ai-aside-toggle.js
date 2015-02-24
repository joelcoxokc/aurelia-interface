import {Behavior} from 'aurelia-templating'
import {AsideToggle} from './aside-toggle'

let defaultToggles = {
    open:'toggleOpen',
    fold:'toggleFold',
}


export class AiAsideToggleAttachedBehavior{

    static metadata(){
        return Behavior
            .withOptions().and(x => {
                x.withProperty('aside');
                x.withProperty('side');
                x.withProperty('open');
                x.withProperty('fold');
                x.withProperty('use');
            })
    }

    static inject(){

        return[Element, AsideToggle]

    }

    constructor(element, asideToggle){

        this.element = element;
        this.asideToggle = asideToggle;

    }

    bind(){
        if(!this.side) throw new Error('Please state the "side" property of the "ai-aside" you trying to toggle!!')
        this.toggles = this.asideToggle.toggles[this.side];

        this.element.addEventListener('click', (event)=>{

            event.preventDefault()

            // Provide api for using either open | fold, or toggleOpen | toggleFold
            if( this[this.use] ){ return this[this.use]() }
            if(this[defaultToggles[this.use]]){ return this[defaultToggles[this.use]]() }

            // Throw Error if toggleable property is not set up.
            throw new Error('The property you are trying to toggle does not exist!! please use open | fold | toggleOpen | toggleFold')
        })

    }


    toggleOpen(){
        this.open = !this.open;
        this.asideToggle.toggleOpen(this.side)
    }

    toggleFold(){
        this.fold = !this.fold;
        this.asideToggle.toggleFold(this.side)
    }

    openChanged(value){
        let callbacks = value ? this.toggles.open.on : this.toggles.open.off;

    }

    foldChanged(value){
        let callbacks = value ? this.toggles.fold.on : this.toggles.fold.off;
        this.asideToggle.runCallBacks(callbacks)
    }

}
