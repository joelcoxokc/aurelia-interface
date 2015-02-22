import {Behavior} from 'aurelia-templating'

export class Demo{

    static metadata(){
        return Behavior
            .customElement('demo')
            .withProperty('example')
            .withProperty('display')
    }

    static inject(){
        return [Element]
    }

    constructor(element){

        console.log(this)
        this.example = this.example
    }
}
