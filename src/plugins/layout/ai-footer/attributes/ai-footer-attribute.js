import {Behavior} from 'aurelia-templating';

export class AiFooterAttachedBehavior{

    static metadata(){
        return Behavior
            .withOptions().and((x)=>{
                x.withProperty('container', 'containerChanged');
            });
    }


    static inject(){
        return [Element]
    }

    constructor(element){

        this.element = element

    }

    bind(){
        this.applyClassList();
    }

    applyClassList(){
        var classList = ['ai-footer'];
        this.element.classList.add.apply(this.element.classList, classList);
    }
}
