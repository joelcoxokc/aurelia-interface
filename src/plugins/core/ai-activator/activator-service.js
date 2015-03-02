import {PropertyActivator} from './property-activator'
import {ElementActivator} from './element-activator'

export class ActivatorService{

    constructor(){
        this.msgs = {
            activate: 'the first argument must be either "element" or "property"',
            exists : 'event already exists! Please choose a different name',
            delegate : 'event does not exist'

        }

        this._error   = (method, name, msg)=>{console.error(`AiActivator.${method}:${name} ${msg}`)}
        this.delegations = {};
        this.activations = {};
    }
    /**
     * activate               activation method for activating element or properties.
     * @param  {String} type  REQUIRED| Use the key to specify which type of activation you would like to make.
     * @NOTE                  Please see the activateElement, or activateProperty methods for descriptions on parameters
     * @usage                 if type is element
     *                        activator.activate( 'element', 'someName', element, prefix)
     * @usage                 if type is property
     *                        activator.activate( 'property', 'someName', viewModel, propertyName, )
     * @return {[type]}      [description]
     */
    activate(type){
        if(type !== 'element' || type !== 'property') return this._error('activate', this.msgs.activate);
        (type === 'element') && this.activateElement.apply(this, arguments)
        (type === 'property') && this.activateProperty.apply(this, arguments)
    }

    /**
     * activateElement
     * @param  {String}  name    REQUIRED| The key/name the activation will be stored as within this.activations
     * @param  {Element} element REQUIRED| Must be a DOM or jQuery selected element
     * @param  {String}  prefix  OPTIONAL| If you would like to prefix your classes when toggled
     */
    activateElement(name, element, prefix){
        if(this.activations[name]) return this._error('activate',name, this.msgs.exists);
        this.activations[name] = new ElementActivator('element', name, element, prefix)
    }

    activateProperty(name, viewModel, propertyName, invokeMethod){
        if(this.activations[name]) return this._error('activate',name, this.msgs.exists);
        this.activations[name] = new PropertyActivator('property', name, viewModel, propertyName, invokeMethod)
    }

    registerCallback(name, type, callback){
        this.activations[name].registerCallback(type, callback)
    }

    delegate(name){
        // if(!this.activations[name]) return this._error('delegate',name, this.msgs.delegate);
        return this.activations[name];
    }
}
