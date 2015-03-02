import {Behavior} from 'aurelia-templating'

var directions,oposites,defaults

directions ={
    row   : 'is-row',
    column: 'is-column'
}
oposites  ={
    column: directions.row ,
    row   : directions.column
}
defaults  = {
    direction: 'row'
}
export class AiMainAttachedBehavior{

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

        this.element = element;

    }

    bind(){
        this.applyClassList();
    }

    applyClassList(){
        var classList = ['ai-main'];
        this.element.classList.add.apply(this.element.classList, classList);
    }

    containerChanged(hasContainer){

        this.element.classList[hasContainer ? 'add': 'remove']('main-container')

    }
}
