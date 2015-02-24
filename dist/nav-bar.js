import {Behavior} from 'aurelia-framework';
import {AsideToggle} from './system/aside-toggle';
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

        return [Element, AsideToggle]

    }


    constructor(element, asideToggle){

        this.element   = element
        this.heading   = 'ai'
        this.asideToggle = asideToggle;
    }


    bind(){
        this.title = this.router.title
    }

    toggle(){
       this.asideToggle.toggleOpen('left')
        // this.aside.open = !this.aside.open

    }


}
