import {Behavior} from 'aurelia-framework'


export class Toggle{
    constructor(options){
        this.name       = options.name
        this._context   = options.context
        this.property   = options.property
        this.onToggle   = (typeof options.onToggle === 'function')&& options.onToggle
        this._ontoggles = []
    }
    onToggle(callback){
        this._ontoggles.push(callback)

    }

    setClass(on, off, initialClass){
        this.on  = on;
        this.off = off;
        initialClass &&( this.current = on );
    }

    change(value){
        this._context[this.property] = (value === this.one) ?  this.off : this.on;
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

    register(name, context, property, onToggle, callback){
        if(!_.isString(name)) throw new Error('When registering for a toggle, the first paramater must be a string!');
        var newToggle = new Toggle({name, context, property, onToggle, callback});

        this.toggles[newToggle.name] = newToggle;
    }

    delegate(name, on, off, initialClass){
        var _this = this
        var instance = _this.get(name);
        if(!instance) return new Error('Instance does not exist');
        instance.setClass(on, off, initialClass)

        return {
            toggle: function(){
                var prop = instance._context[instance.toggleName];
                instance &&(instance.toggle(prop));
            },
            change: function(){
                instance &&(instance.change(prop));
            }
        }
    }

}

