import {Behavior} from 'aurelia-framework';

export class NavBar {
    static metadata(){

        return Behavior
            .withProperty('router')
            .withProperty('bar')
            .withProperty('aside')
            .withProperty('size', 'sizeChanged')

    }


    static inject (){

        return [Element]

    }

    constructor(element){
        this.defaults = {};
        this.element  = element
        this.heading  = 'ai';
        this.lastSize = null
    }

    bind(){
        this.defaults.title = this.router.title
        this.title = this.router.title
        this.element.classList.add('ai-bar', 'ai-nav-bar', 'bar-fixed')
        Object.observe(this.router, () => {
          this.size  = this.router.currentInstruction.config.bar.size
          this.title = this.router.currentInstruction.config.title || this.defaults.title
        })


    }

    sizeChanged(newSize){
        this.element.classList.remove(`bar-${this.lastSize}`)
        this.element.classList.add(`bar-${newSize}`)
        this.lastSize = this.size;
    }
}
