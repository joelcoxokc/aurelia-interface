export class AiComponents{


    constructor(){

        this.components = [
            new Component({name:'btn', prefix:'ai', postfix:'demo'}),
            new Component({name:'bction', prefix:'ai', postfix:'demo'}),
            new Component({name:'tabs', prefix:'ai', postfix:'demo'}),
            new Component({name:'modal', prefix:'ai', postfix:'demo'}),
        ]

    }


}

class Component{




    static get classed(){
        return this.name[0].toUpperCase + this.name.slice(1);
    }

    static get moduleId(){
        return this.prefix + this.classed
    }

    static get title(){
        return this.prefix + '-' + this.classed
    }

    static get className(){
        return this.prefix + '-' + this.name;
    }

    static get route(){
        return this.className + '-' + this.postfix
    }

    constructor(options){
        this.name    = options.name
        this.prefix  = options.prefix
        this.postfix  = options.postfix
        this.icon    = null
        this.color   = 'text-grey'
        this.display = true
    }


}
