import {Behavior} from 'aurelia-templating'
import {ActivatorService} from './activator-service'

export class AiActivatorAttachedBehavior{

    static metadata(){
        return Behavior
            .withOptions().and(x =>{
                x.withProperty('activate')
                x.withProperty('delegate')
                x.withProperty('prefix')
                x.withProperty('onToggle', 'onToggleChanged', 'on-toggle')
                x.withProperty('onCall'  , 'onCallChanged'  , 'on-call')
                x.withProperty('onSwap'  , 'onSwapChanged'  , 'on-swap')
                x.withProperty('toggle')
                x.withProperty('call')
                x.withProperty('swap')
                x.withProperty('on')
            })
    }

    static inject(){
        return [Element, ActivatorService];
    }

    constructor(element, activator){
        var _this = this;
        this.element = element;
        this.activator = activator;

        this._eventHandler = function(evt){
            evt.preventDefault();

            _this.toggle &&(_this.delegating.toggle(_this.toggle));
            _this.swap   &&(_this.delegating.swap(_this.swap));
            _this.call   &&(_this.delegating.invoke(_this.call));
            if(!_this.toggle && !_this.swap && !_this.call) _this.delegating.toggle(_this.toggle);
        }
    }

    bind(){
        this.activate && this.registerActivation();
        this.delegate && this.registerDelegation();
    }

    unbind(){
        this.delegate && this.unRegisterDelegation();
    }

    // activates an element for change
    registerActivation(){
        this.activator.activateElement(this.activate, this.element, this.prefix);
    }

    // delegates element for toggling activated element
    registerDelegation(){

        this.onToggle && this.activator.registerCallback(this.delegate, 'onToggle', this.onToggle)
        this.onCall   && this.activator.registerCallback(this.delegate, 'onCall'  , this.onCall)
        this.onSwap   && this.activator.registerCallback(this.delegate, 'onSwap'  , this.onSwap)
        this.delegating = this.activator.delegate(this.delegate);
        this.element.addEventListener(this.on || 'click', this._eventHandler);
    }

    unRegisterDelegation(){
        this.element.removeEventListener(this.on || 'click', this._eventHandler)
    }
}
