import {ClassList} from './ui-class-list'

export class UiElement{


    static inject(){

        return [Element]

    }


    constructor(element){

        this.element = element

    }

    addClass(){

        var args = Array.isArray(arguments[0]) ? arguments[0] : arguments
        this.element.classList.add.apply(this.element.classList, args)

    }


    removeClass(){

      var args = Array.isArray(arguments[0]) ? arguments[0] : arguments
      this.element.classList.remove.apply(this.element.classList, args)

    }


}
