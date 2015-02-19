import {Behavior} from 'aurelia-templating'


export class AiElement{

    static inject(){

        return [Element]

    }

    constructor(element) {

        this.element = element

    }


    addClass(){

        this.element.classList.add.apply(this.element.classList, arguments)

    }

    removeClass(){

        this.element.classList.remove.apply(this.element.classList, arguments)
    }

    addEvent(evt, callback){
        var _this = this;

        this.element.addEventListener(evt, callInContext)

        function callInContext(){
            callback.apply(_this, arguments)
        }
    }

    removeEvent(){
        var _this = this;

        this.element.removeEventListener(evt, callInContext, false)

        function callInContext(){
            callback.apply(_this, arguments)
        }
    }

}


