import {Behavior} from 'aurelia-templating'


export class AiDropdown{

    static metadata(){

        return Behavior
            .customElement('ai-dropdown')
            .withProperty('isOpen', 'isOpenChanged')
            .withProperty('side', 'sideChanged')

    }

    static inject(){

        return [Element]

    }

    constructor(element){
        var _this = this;
        this.element = element
        this.isOpen    = false

        this.toggle = function(){
            _this.isOpen = !_this.isOpen;
        }
    }


    bind(){
        this.bindToggle()
    }

    unbind(){
        this.unbindToggle()
        this.unbindDoc()
    }


    isOpenChanged(newValue){
        this.element.classList[newValue ? 'add':'remove']('dropdown-open');
    }
    escapeKey(event){

        return (event)=>{

            event.preventDefault()

            if(event.which === 27){
                this.close();
            }
        }

    }

    // bindDoc(){
    //     document.addEventListener('click'  , this.toggle, false);
    // }
    // unbindDoc(){
    //     document.removeEventListener('click', this.toggle, false);
    // }
    bindToggle(){
        this.element.addEventListener('click', this.toggle, false);
    }
    unbindToggle(){
        this.element.removeEventListener('click', this.toggle, false);
    }

}
