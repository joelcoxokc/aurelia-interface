import {Behavior} from 'aurelia-templating'
import {AsideToggle} from 'aside-toggle'


export class AsideToggleAttachedBehavior{

    static metadata(){
        return Behavior
            .withOptions().and(x => {
                x.withProperty('aside');
                x.withProperty('side');
                x.withProperty('state');
                x.withProperty('icon');
                x.withProperty('open');
                x.withProperty('fold');
                x.withProperty('nextIcon', 'nextChanged', 'naxt-icon');
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
        if(!this.side) return new Error('Please state the side property of the aside you trying to toggle!!')
        this.toggles = asideToggle.toggles[this.side]
    }


    toggleOpen(){
        this.open = !this.open;
    }

    toggleFold(){
        this.fold = !this.fold;
    }

    openChanged(value){
        let callbacks = value ? this.toggles.open.on : this.toggles.open.off;

    }

    foldChanged(value){
        let callbacks = value ? this.toggles.fold.on : this.toggles.fold.off;
        this.asideToggle.runCallBacks(callbacks)
    }

}
