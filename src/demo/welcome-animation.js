import {Behavior}  from 'aurelia-templating'

export class WelcomeAnimationAttachedBehavior{

    static metadata(){
        return Behavior
            .withProperty('value')
    }

    static inject(){
        return [Element]
    }

    constructor(element){
        this.element = element;

        this.children = {}
    }
	
    attached(){
        this.elements = this.element.children
        this.elements.forEach( (item, index)=>{
            this.children[index] = item
        })
    }
}
