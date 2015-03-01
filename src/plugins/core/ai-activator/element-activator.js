export class ElementActivator{

    constructor(type, name, element, prefix){
        var _this = this;
        this.type      = type;
        this.name      = name;
        this.element   = element;
        this.prefix    = prefix;
        this.splitter  = /\s*,\s*/
        this.callbacks= { onToggle : []
                        , onCall   : []
                        , onSwap   : []
                        };
    }
    _prefix(className){
        if(!this.prefix) return className;
        if(Array.isArray(className)){
            var array = [];
            for(let c in className){
                array.push(`${this.prefix}-${c}`);
            }
            return array;
        }
        return `${this.prefix}-${className}`;
    }

    _hasClass(className){
        return this.element.classList.contains(className);
    }
    _removeClass(){
        this.element.classList.remove.apply(this.element.classList, arguments);
    }
    _addClass(){
        this.element.classList.add.apply(this.element.classList, arguments);
    }
    _toggleClass(){
        this.element.classList.toggle.apple(this.element.classList, arguments);
    }

    /**
     * invoke
     * @reference               This method references the call method on AiActivator. so that we don't overwrite JavaScripts .call() method
     * @param  {String} method  String to specify which method to invoke
     */
    invoke(method){
        if(typeof this.element[method] !== 'function') return console.error(`AiActivator: ${this.name} does not have a method called ${method}`)
        this.element[method]()
        this.onEvent('onCall', null, null)
    }

    /**
     * toggle
     * @param  {String} property  toggle the boolean of the given property
     */
    toggle(className){
        className = this._prefix(className);
        console.log(className)
        this.element.classList.toggle(className)
        this.onEvent('onToggle', className);
    }

    /**
     * swap
     * @param  {Array} propertyList swaps the properties on the given context
     */
    swap(classList){
        classList = classList.trim().split(this.splitter)
        if(!Array.isArray(classList)) return console.error('AiActivator.swap: requires and array')
        if(!this._hasClass(classList[0]) && !this._hasClass(classList[1])){
            this.element.classList.toggle(classList[0])
        } else {
            this.element.classList.toggle(classList[0])
            this.element.classList.toggle(classList[1])
        }
        this.onEvent('onSwap');
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

    /**
     * onEvent
     * @param  {String} type  The callbacks property containing the array of callbacks to call
     */
    onEvent(type){
        for(let callback of this.callbacks[type]){
            callback(arguments[1], arguments[2]);
        }
    }


}
