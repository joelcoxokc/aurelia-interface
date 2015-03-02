import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {ActivatorService} from './activator-service'

export class AiModalAttachedBehavior{

    static metadata(){
        return Behavior
            .withOptions().and((x)=>{
                x.withProperty('size');
                x.withProperty('open');
                x.withProperty('side');
            });
    }

    static inject(){
        return [Element, ActivatorService]
    }

    constructor(element, activator) {
        var _this = this;
        this.element = element
        this.activator = activator
        this.open = this.open || false
        if(!this.element.id) return console.error('ai-modal: requires a unique ID attribute');

        this._handleCloser = function(evt){
            evt.preventDefault();
            _this.open = false;
        }
    }

    bind(){
        this.activator.activateProperty(this.element.id, this, 'open');
        this.applyClassList();
        this.appendChildren();

    }

    get children(){

        this.childElements = this.childElements || this.getChildren();
        return this.childElements;
    }

    get container(){
        this.containerElement = this.containerElement || this.element.getElementsByClassName('modal-container')[0] || this.createContainer();
        return this.containerElement;
    }

    get closer(){
        this.closerElement = this.closerElement || this.element.getElementsByClassName('modal-closer')[0] || this.createCloser();
        return this.closerElement;
    }


    openModal(){
        this.element.classList.add('modal-open');
        this.container.classList.add('modal-open');
        this.bindEvents();
    }

    closeModal(){
        this.element.classList.remove('modal-open');
        this.container.classList.remove('modal-open');
        this.unbindEvents();
    }

    openChanged(value){
        value ? this.openModal() : this.closeModal()
    }

    applyClassList(){
        var classList = ['ai-modal'];
        this.side   &&( classList.push(`modal-${this.side}`) );
        this.size   &&( classList.push(`modal-${this.size}`) );
        this.open   &&( classList.push(`modal-${this.open}`) );
        this.element.classList.add.apply(this.element.classList, classList);
    }

    appendChildren(){
        if(this.container){
            if(this.children){
                this.titleElement   && this.container.appendChild(this.titleElement);
                this.contentElement && this.container.appendChild(this.contentElement);
                this.actionsElement && this.container.appendChild(this.actionsElement);
            }
            if(this.closer){
                this[this.titleElement ? 'titleElement' : 'container'].appendChild(this.closerElement);
            }
        }
    }

    bindEvents(){
        if(this.closer){
            this.closer.addEventListener('click', this._handleCloser)
        }
    }

    unbindEvents(){
        if(this.closer){
            this.closer.removeEventListener('click', this._handleCloser)
        }
    }


    createContainer(){
        var container = document.createElement('DIV');
        container.classList.add('modal-container');
        this.element.appendChild(container);
        return container;
    }

    createCloser(){
        var closer = document.createElement('DIV');
        var icon   = document.createElement('I');
        icon.classList.add('mdi-content-clear');
        closer.classList.add('modal-closer');
        closer.appendChild(icon);
        return closer;
    }

    getChildren(){
        var children = []
        this.titleElement   = this.titleElement   || this.element.getElementsByClassName('modal-title')[0];
        this.contentElement = this.contentElement || this.element.getElementsByClassName('modal-content')[0];
        this.actionsElement = this.actionsElement || this.element.getElementsByClassName('modal-actions')[0];
        this.titleElement   && children.push(this.titleElement);
        this.contentElement && children.push(this.contentElement);
        this.actionsElement && children.push(this.actionsElement);
        return children;
    }


}

