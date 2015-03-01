export class PropertyActivator{

    constructor(type, name, viewModel, propertyName, invokeMethod){
        this.type      = type;
        this.name      = name;
        this.viewModel = viewModel;
        this.property  = propertyName;
        this.callbacks = { onToggle : []
                         , onCall   : []
                         , onSwap   : []
                         };
        this._errors   = {
            use: (method, type, msg)=>{console.error(`AiActivator.${method}: ${this.name} does not have a ${type} by the name of ${msg}`)},
            msg: (method, msg)=>{console.error(`AiActivator.${method}:${name} ${msg}`)},
        };
    }

    /**
     * invoke
     * @reference               This method references the call method on AiActivator. so that we don't overwrite JavaScripts .call() method
     * @param  {String} method  String to specify which method to invoke
     */
    invoke(method){
        if(typeof this.viewModel[method] !== 'function') return this._errors.use('call', 'method', method);
        this.viewModel[method]()
        this.onEvent('onCall', null, null)
    }

    /**
     * toggle
     * @param  {String} property  toggle the boolean of the given property
     */
    toggle(){
        console.log(this)
        if(this.viewModel[this.property] === undefined) return this._errors.use('toggle', 'property', this.property);
        let currentPropertyValue = this.viewModel[this.property];
        let newPropertyValue = !this.viewModel[this.property];
        this.viewModel[this.property] = newPropertyValue;
        this.onEvent('onToggle', newPropertyValue, currentPropertyValue);
    }

    /**
     * swap
     * @param  {Array} propertyList swaps the properties on the given viewModel
     */
    swap(propertyList){
        if(!Array.isArray(propertyList)) return this._errors.msg('swap',null,'requires and array');
        let currentPropertyValue = this.viewModel[this.property];
        let newPropertyValue     = (currentPropertyValue === propertyList[0]) ? propertyList[0] : propertyList[1];
        this.viewModel[this.property] = newPropertyValue;
        this.onEvent('onSwap', newPropertyValue, currentPropertyValue);
    }

    /**
     * registerCallback   Register callbacks for events
     * @param  {String}   type     Callback category <onToggle, onCall, onSwap>
     * @param  {Function} callback Callback to be registered
     */
    registerCallback(type, callback){
        if(typeof callback !== 'function') return this._errors.msg(name `${type} ${callback}`, 'is not a function')
        this.callbacks[type].push(callback);
    }

    onEvent(type){
        for(let callback of this.callbacks[type]){
            callback(arguments[1], arguments[2]);
        }
    }


}
