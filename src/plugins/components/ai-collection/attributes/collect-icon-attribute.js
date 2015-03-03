import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Construction} from './construction'

export class CollectIconAttachedBehavior{

    static metadata(){

        return Behavior
            .withOptions().and(x =>{
                x.withProperty('icon');
        });
    }

    get classList(){
        return this.element.classList;
    }

    get iconElement(){
        return this.iconElement || this.getElementsByTagName('i') || this.createIcon();
    }

    get children(){
        this.element.children;
    }

    static inject(){
        return [Element]
    }

    constructor(element) {
        this.element = element
    }

    bind(){
        this.applyClasses()
    }

    applyClasses(){
        var classList = ['collection-item-icon'];
        this.classList.add.apply(this.classList, classList);
    }

    createIcon(){
        var icon = document.createElement();
        icon.classList.add(this.icon)
        return icon;
    }

}

