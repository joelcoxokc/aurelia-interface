import {Behavior} from 'aurelia-templating'


export class NavBar{

    static metadata(){

        return Behavior
            .customElement('nav-bar')
            .withProperty('router')

    }


    static inject(){

        return [Element]

    }


    constructor(element){

        this.element = element
        this.isColumn = true

    }
}
