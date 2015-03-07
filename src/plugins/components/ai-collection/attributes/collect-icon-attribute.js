import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Construction} from './construction'
import {Util, ComponentTools} from './utils'

let defaults = {
    class: {

    },
    parent: {
        name: 'collectionItem'
    }
}


export class CollectIconAttachedBehavior extends Util{

    static metadata(){

        return Behavior
            .withOptions().and(x =>{
                x.withProperty('icon');
        });
    }

    static inject(){
        return [Element, ComponentTools]
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

    get parent(){
        return this.findParent(defaults.parent.name);
    }

    constructor(element, tools) {
        this.interfaceId = tools.generateId('CollectIcon')
        this.element = element
    }

    bind(){
        this.applyClasses()
    }

    attached(){
        this.parent.icon = this;
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

