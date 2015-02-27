import {Behavior} from 'aurelia-templating'
import {Notify} from './notify';
import {Toggler} from './toggler';
var defaults =  { size : 'sm'
                , fixed    : true
                , bgColor  : 'bg-white'
                , textColor: 'text-purple'
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
        return this
    }

    init(options){
        this.reset()
        _.assign(this, options)
        return this
    }

    configure(options, reset){

        reset &&( this.reset() )
        _.assign(this, options)
        return this
    }

    reset(options){
        var newDefaults = options || this.defaults
        this.configure(newDefaults)
        _.assign(this.defaults, newDefaults)
    }
}

