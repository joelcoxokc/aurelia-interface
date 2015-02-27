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

    bind(){
        this.elements = this.element.children
        this.elements.forEach( (item, index)=>{
            this.children[index] = item
        })
        console.log(TweenMax)
         // var child = this.children[0].children[0]
         // var time = new TimelineLite()

         // time
         //     .from(child, {x:0, y:0})
         //     .to(child, 1, {autoAlpha:1}, 0)
    }
}
