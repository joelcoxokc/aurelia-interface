import {Behavior} from 'aurelia-templating'
import {Notify} from './notify';

var defaults =  { size : 'sm'
                , fixed    : true
                , bgColor  : 'white'
                , textColor: 'purple'
                , brand    : 'brand'
                }


export class Toolbar{

    static inject(){
        return [Notify]
    }

    constructor(notify){
        this.notify = notify
        this.defaults = defaults;
        _.assign(this, this.defaults)
    }

    configure(options){

        _.assign(this, options)

    }

    reset(options){
        var newDefaults = options || this.defaults
        this.configure(newDefaults)
        _.assign(this.defaults, newDefaults)
    }
}

