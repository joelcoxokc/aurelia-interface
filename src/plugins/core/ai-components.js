export class AiComponents{


    constructor(){

        this.components = [
            new Component({name:'btn', prefix:'ai', postfix:'demo'}),
            new Component({name:'action', prefix:'ai', postfix:'demo'}),
            new Component({name:'tabs', prefix:'ai', postfix:'demo'}),
            new Component({name:'modal', prefix:'ai', postfix:'demo'}),
        ]

    }


}

class Component{




    static classify(){
        return
    }

    constructor(options){
        this.name     = options.name
        this.prefix   = options.prefix
        this.postfix  = options.postfix
        this.icon     = null
        this.color    = 'text-grey'
        this.display  = true
        this.classed  = this.name[0].toUpperCase() + this.name.slice(1);
        this.moduleId = `${this.prefix}${this.classed}`;
        this.title    = `${this.prefix}-${this.classed}`;
        this.className = `${this.prefix}-${this.name}`;
        this.route    = `${this.className}-${this.postfix}`;

    }


}
