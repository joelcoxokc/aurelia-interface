import {Behavior} from 'aurelia-templating'
class tools{

    constructor(){
        this.count = 1;
    }

    split(str){
        return str.split(/\s*str\s*/);
    }

    generateId(name){

        name = `${name}-${this.count}`
        this.count++;
        return name;
    }
    isFalse(property){
        return ((property === false) && property !== undefined)
    }
    join(mid){
        mid = mid || '';
        for(let index in arguments){
            index && (arguments[0]+= mid + arguments[index]);
        }
        return arguments[0];
    }
    toggle(value){
        return value ? 'add' : 'remove';
    }
}
class elementTools{

    options(callback){
        let props = {}
        var obj = {option:function(){props[arguments[0] = arguments]}};
        obj = callback(obj);
        return Behavior.withOptions().and(x =>{
                x.option = x.withProperty
                callback(x);
            });
    }
}
export let iElement = new elementTools
export let ai = new tools

export class AiEl{



    previousSibling(name){
        return this.previousExists() ? this.element.previousElementSibling[name] : this.element.previousElementSibling
    }

    nextSibling(name){
        return this.nextExists() ? this.element.nextElementSibling[name] : this.element.nextElementSibling
    }

    previousExists(){
        return this.siblingExists('previous');
    }

    nextExists(){
        return this.siblingExists('next');
    }

    siblingExists(side){
        var exists  = this.join('_', side, 'Exists'),
            sibling = this.join(side, 'ElementSibling');
        this[exists] = (this.isFalse(this[exists])) || ( this.element[sibling] && this.element[sibling].hasOwnProperty(defaults.name) ) || false;
        return this[exists];
    }

    findParent(name){
        this._parentExixts = (!!this.parentExists(name))
        return this._parentExixts && this.parentExists(name);
    }

    parentExists(name, el){
        el = el || this.element;
        return this.isParent(name, el.parentElement) ? el.parentElement[name] : (this.parentExists(name, el.parentElement))
        if(this.isParent(name, el.parentElement)){
            return el.parentElement[name]
        } else {
            return this.parentExists(name, el.parentElement)
        }
    }

    isParent(name, el){
        el = el || this.element;
        return el.hasOwnProperty(name) ? true : (el[name] ? true : false);
    }
}



