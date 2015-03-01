export class Activator{

    constructor(name, context, property, invokeMethod){
        this.name     = name;
        this.context  = context;
        this.property = property;
        this.callbacks= { onToggle : []
                        , onCall   : []
                        , onSwap   : []
                        };
    }

    /**
     * invoke
     * @reference               This method references the call method on AiActivator. so that we don't overwrite JavaScripts .call() method
     * @param  {String} method  String to specify which method to invoke
     */
    invoke(method){
        if(typeof this.context[method] !== 'function') return console.error(`AiActivator: ${this.name} does not have a method called ${method}`)
        this.context[method]()
        this.onEvent('onCall', null, null)
    }

    /**
     * toggle
     * @param  {String} property  toggle the boolean of the given property
     */
    toggle(property){
        if(this.context[this.property] === undefined) return console.error(`AiActivator.toggle: ${this.name} does not have a property by the name of ${this.property}`);
        let currentPropertyValue = this.context[this.property];
        let newPropertyValue = !this.context[this.property];
        this.context[this.property] = newPropertyValue;
        this.onEvent('onToggle', newPropertyValue, currentPropertyValue);
    }

    /**
     * swap
     * @param  {Array} propertyList swaps the properties on the given context
     */
    swap(propertyList){
        if(!Array.isArray(propertyList)) return console.error('AiActivator.swap: requires and array')
        let currentPropertyValue = this.context[this.property];
        let newPropertyValue     = (currentPropertyValue === propertyList[0]) ? propertyList[0] : propertyList[1];
        this.context[this.property] = newPropertyValue;
        this.onEvent('onSwap', newPropertyValue, currentPropertyValue);
    }

    /**
     * registerCallback   Register callbacks for events
     * @param  {String}   type     Callback category <onToggle, onCall, onSwap>
     * @param  {Function} callback Callback to be registered
     */
    registerCallback(type, callback){
        if(typeof callback !== 'function') return console.error(`AiActivator.${type}: this callback "${callback}" is not a function`)
        this.callbacks[type].push(callback);
    }

    onEvent(type){
        for(let callback of this.callbacks[type]){
            callback(arguments[1], arguments[2]);
        }
    }


}
