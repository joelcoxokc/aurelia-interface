import {Behavior} from 'aurelia-templating'


export class LayoutPrimary{

    static metadata(){

        return Behavior
            .customElement('layout-primary')
            .withProperty('router')

    }


    static inject(){

        return [Element]

    }


    constructor(element){

        this.element = element

    }
}
