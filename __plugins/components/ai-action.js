import {Behavior} from 'aurelia-templating'

export class AiAction{

    constructor( element){

        this.element = element;
    }



    bind(){

        this.element.addEventListener('mouseover',
                (event)=>{

                    this.revealActions();

                }
            )
        this.elementelement.addEventListener('mouseout',
                (event)=>{
                    this.hideActions()
                }
            )

    }


    revealActions(){
        this.element.classList.add('action-reveal')
    }


    hideAtions(){
        this.element.classList.remove('action-reveal')
    }



}
export class AiToggleAttachedBehavior{

    static metadata(){

        return Behavior
            .attachedBehavior('global-behavior')
            .withProperty('value', 'valueChanged')

    }


    static inject(){

        return [Element]

    }

    constructor(element){

        this.showing = true;

        this.element = element;
        console.log(this)

    }

    valueChanged(newValue) {

        console.log(newValue)

    }


}
