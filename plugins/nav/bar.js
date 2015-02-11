import {Behavior} from 'aurelia-framework';

export class Bar {

    static metadata(){

        return Behavior
            .withProperty('showing')

    }

    constructor(options){

        this.showing = false

        this.barId   = 'bar1'
        this.open    = false
        this.fixed   = true
        this.size    = 'sm'
    }

    open(){

        this.showing = !this.showing;

    }
}
