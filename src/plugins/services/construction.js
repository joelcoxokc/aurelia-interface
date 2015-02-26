import {Behavior} from 'aurelia-templating'

export class Construction{


    constructor(element) {
        this.element = element
    }


    createElement(element, classList, callback, cbElement){
        cbElement = cbElement || this.element
        var newElement = document.createElement(element);
        this.addClass(classList, newElement);
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
        console.log(el)
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




}
