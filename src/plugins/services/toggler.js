import {Behavior} from 'aurelia-framework'


export class Toggle{

    constructor(options){

        this.name       = options.name
        this._context   = options.context
        this.toggleName = options.property
        this.toggler    = (typeof options.toggleMethod === 'function')&& options.toggleMethod
        this.callback   = (typeof options.callback     === 'function')&& options.callback
        this._ontoggles = []
        this.callback && this._ontoggles.push(this.callback)
    }

    onToggle(callback){
        this._ontoggles.push(callback)

    }

    toggle(oldValue){

        this._context[this.toggleName] = !this._context[this.toggleName]
        this.callAllToggles(this._context[this.toggleName], oldValue)
    }

    callAllToggles(){
        for(let cb of this._ontoggles){
            cb.apply(this._context, arguments)
        }
    }
}





export class Toggler{


    constructor(){
        this.toggles  = {}

    }


    get(name){
        if(this.toggles[name]){
            return this.toggles[name]
        }
    }

    register(name, context, property, toggleMethod, callback){
        console.log(name)
        if(!_.isString(name)) throw new Error('When registering for a toggle, the first paramater must be a string!')
        var newToggle = new Toggle({name, context, property, toggleMethod, callback})

        this.toggles[newToggle.name] = newToggle
    }

    delegate(name){
        var _this = this
        var args = Array.prototype.slice.call(arguments)
        var instance = this.get(name);

        return function(){
            var prop = instance._context[instance.toggleName];
            instance &&(instance.toggle(prop))
        }
    }

}

