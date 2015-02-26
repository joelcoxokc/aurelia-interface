import {Behavior} from 'aurelia-framework';
import {AsideToggle} from './system/aside-toggle';
import {Toggler} from './system/toggler';
export class NavBar {

    static metadata(){

        return Behavior
            .customElement('nav-bar')
            .withProperty('router')
            .withProperty('toolbar')
            .withProperty('aside')
            .withProperty('navs')

    }

    static inject (){

        return [Element, AsideToggle, Toggler]

    }


    constructor(element, asideToggle, toggler){
        this.toggler   = toggler
        this.element   = element
        this.heading   = 'ai'
        this.asideToggle = asideToggle;
        this.thing     = this.toggler
    }


    bind(){
        this.toggle = this.toggler.delegate('aside-open')
        this.title = this.router.title
    }

}
