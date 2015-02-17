import {Behavior, BoundViewFactory, ViewSlot, ViewCompiler} from 'aurelia-templating';

export class NavMe {
    static metadata(){

        return Behavior
            .customElement('nav-me')
            .withProperty('value', 'valueChanged', 'nav-me')
            // .useView('./nav-me.html')

    }

    static inject() {

        return [Element];

    }

    constructor(element){
        // this.element = element;
        this.elememt = element
    }

    attached(){
        // this.viewSlot.add(this.view);
    }

}
