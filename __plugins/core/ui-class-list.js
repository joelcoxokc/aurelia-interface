
export class ClassList{


    constructor(){

        this.addClass = function(){

            var args = Array.isArray(arguments[0]) ? arguments[0] : arguments
            this.element.classList.add.apply(this.element.classList, args)

        }


        this.removeClass = function(){

          var args = Array.isArray(arguments[0]) ? arguments[0] : arguments
          this.element.classList.remove.apply(this.element.classList, args)

        }

    }

}
