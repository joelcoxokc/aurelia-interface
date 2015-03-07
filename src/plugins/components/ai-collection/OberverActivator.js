function generateId(counter){
    return (defaults.elements[counter] + (defaults.counters[counter]++))
}
var options = {
    name : 'componentName',
    registered: true,
    property: 'value',
    isParent:true,
    allow:['interfaceId']
};

export class ObserverActivator{

    constructor(){
        this.counter  = {};
        this.observed = {};
        this.container = {};

    }
    _parseId(id){
        return id.split('-')[0];
    }
    _generateId(options){
        this.counter[options.name] = this.counter[options.name] || 0;
        options.interface.interfaceId = `${options.name}-${this.counter[options.name]}`
        this.counter[options.name]++;
        return options;
    }
    _isRegistered(options){
        // return false if container does not contain the interface.name
        // return false if the container[interface.name] does not contain the interface.interfaceId
        // return true
    }

    activate(options){
        if(this._isRegistered(options)) return attach(options);
        this.register(options);
    }

    register(options){
        // generate an ID for the interface
            this._generateId(options)
        // create a new activation storing it in it's container
            this.container[options.name] = this.container[options.name] || {};
            this.container[options.name][options.interfaceId] = new Activation(options, this);
    }

    attach(options){

    }

    upate(moduleInterfaceId, propertyName, package){
        this.container[this._parseId(moduleInterfaceId)][moduleInterfaceId]
            .interface
            .context[propertyName]
            .apply( this.container[this._parseId(moduleInterfaceId)][moduleInterfaceId]
                    .interface
                    .context[propertyName]
                  , package);
    }

}

class Activation{
    constructor(options, observableContainer){
        this.observing = {};
        this.interface = options;
        this.observing[options.property] = new Observable(options);
        this.observableContainer = observableContainer;
    }
    valueChanged(package){
        this.update(package);
    }

    update(package){
        for(let moduleName in package.allow){
            this.observableContainer.update(moduleName, package.propertyName, package.values);
        }
    }
}

class Observable{

    set value(value){
        (this.interface.context[this.name] !== value) &&(this.interface.context[this.name] = value);
        this.interface

    }
    get value(){
        return this.getter ? this.getter(this.value) : this.value;
    }
    constructor(options){
        this.interface = options;
        this.values = {
            old: this.interface
        }
        this.name = interface.property;
    }

    set(value) {
        var oldValue = this.value;

        this.oldValue = oldValue;
        this.value = value;
    }
    get() {
        return this.value;
    }
}
