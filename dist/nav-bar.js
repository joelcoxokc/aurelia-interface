import {Behavior} from 'aurelia-framework';
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

        return [Element]

    }


    constructor(element){
        this.element   = element
        this.heading   = 'ai'
    }


    bind(){
        this.title = this.router.title
    }

}
