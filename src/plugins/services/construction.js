import {Behavior} from 'aurelia-templating'

export class Construction{


    constructor(element) {
        this.element = element
    }


    createElement(element, classList, callback, cbElement){
        cbElement = cbElement || this.element
        var newElement = document.createElement(element);
        classList && ( this.addClass(classList, newElement) );
        if(callback){
            (typeof callback === 'function') && callback(newElement, cbElement);
        }
        return newElement;
    }

    write(content, el){
        el = el || this.element
        el.innerHTML = content
    }

    append(appender, el){
        el = el || this.element
        el.appendChild(appender);
    }

    prepend(prepender, el){
        el = el || this.element
        el.insertBefore(prepender, el.firstChild);
    }

    getTag(tagName, element, callback){
        element = element || this.element
        var el = element.getElementsByTagName(tagName)[0]
        if(el) {
            if(typeof callback === 'function') callback(el)
        }
        return el ? el : 'No Element found'
    }

    getClassName(className, el){
        className = (className[0] === '.') ? className.slice(1) : className;
        el = el || this.element
        return el.getElementsByClassName(className)[0]
    }

    getTagName(tagName, el){
        el = el || this.element
        return el.getElementsByTagName(tagName)[0]

    }

    getId(id, el){
        el = el || this.element;
        id = (id[0] === '#') ? id.slice(1) : id;
        return el.getElementById(id);
    }

    select(value, el){
        el = el || this.element;
        return el.querySelector(value)
    }

    addClass(classList, el){
        el = el || this.element;
        if(Array.isArray(classList)){
            el.classList.add.apply(classList)
        }
        el.classList.add(classList);
    }

    addEvent(event, element, callback){
        element = element || this.element
        callback = (typeof callback === 'function') ? callback : function(){}
        element.addEventListener(event, function(evt){
            evt.preventDefault();
            callback(evt)
        })
    }

    find(value){
        if(value ==='icon' && this.iconEl) return this.iconEl;
        if(value[0] === '.'){
            return this.element.querySelector(value)
        }
        if(value[0] === '#'){
            return this.getId(value) || this.secect(value)
        }
        return this.getTag(value) || 'Cannot Find Elements'

    }




}
