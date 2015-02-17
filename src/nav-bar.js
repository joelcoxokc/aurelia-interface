import {Behavior} from 'aurelia-framework';

export class NavBar {
    static metadata(){

        return Behavior
            .withProperty('router')
            .withProperty('bar')
            .withProperty('aside')
            .withProperty('size' , 'sizeChanged')
            .withProperty('bg'   , 'bgChanged')
            .withProperty('color', 'colorChanged')

    }


    static inject (){

        return [Element]

    }

    constructor(element){
        this.defaults  = {};
        this.element   = element
        this.heading   = 'ai';
        this.lastSize  = null
        this.lastColor = null
        this.lastBg    = null
    }

    bind(){
        this.defaults.title = this.router.title
        this.defaults.bg    = 'white'
        this.defaults.color = 'purple'
        this.title = this.router.title
        this.element.classList.add('ai-bar', 'ai-nav-bar', 'bar-fixed')
        Object.observe(this.router, () => {
          this.size  = this.router.currentInstruction.config.bar.size
          this.title = this.router.currentInstruction.config.title || this.defaults.title
          this.color = this.router.currentInstruction.config.bar.color || this.defaults.color
          this.bg    = this.router.currentInstruction.config.bar.bg    || this.defaults.bg
        })


    }

    sizeChanged(newSize){
        this.element.classList.remove(`bar-${this.lastSize}`)
        this.element.classList.add(`bar-${newSize}`)
        this.lastSize = this.size;
    }

    colorChanged(newColor){

        this.element.classList.remove(`text-${this.lastColor}`)
        this.element.classList.add(`text-${newColor}`)
        this.lastColor = this.color;

    }

    bgChanged(newBg){

        this.element.classList.remove(`bg-${this.lastBg}`)
        this.element.classList.add(`bg-${newBg}`)
        this.lastBg = this.bg;

    }
}
