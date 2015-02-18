import {Behavior} from 'aurelia-framework';

export class NavBar {
    static metadata(){

        return Behavior
            .customElement('nav-bar')
            .withProperty('router')
            .withProperty('toolbar')
            .withProperty('aside')

    }

    static inject (){

        return [Element]

    }

    constructor(element){
        this.element   = element
        this.heading   = 'ai';
    }

    bind(){

        this.title = this.router.title
        Object.observe(this.router, () => {
          // this.size  = this.router.currentInstruction.config.bar.size
          // this.title = this.router.currentInstruction.config.title || this.defaults.title
          // this.color = this.router.currentInstruction.config.bar.color || this.defaults.color
          // this.bg    = this.router.currentInstruction.config.bar.bg    || this.defaults.bg
        })
    }

    toggle(){
        this.aside.open = !this.aside.open
    }


}
