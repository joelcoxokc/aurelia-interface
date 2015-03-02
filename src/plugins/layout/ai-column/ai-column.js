import {Behavior} from 'aurelia-templating'
import {splitClass} from './util.js'
var directions,oposites,defaults

defaults  = {
    prefix: 'flex-',
    sizes :{'xs':'xs-',
            'sm':'sm-',
            'md':'md-',
            'lg':'lg-',
            'xl':'xl-'
            }
    }
export class AiColumnAttachedBehavior {

    static metadata(){
        return Behavior
            .withOptions().and((x)=>{
                x.withProperty('flex');
                x.withProperty('offset');
                x.withProperty('only');
                x.withProperty('screen');
            });
    }

    static inject(){
        return [Element];
    }

    constructor(element){
        this.element = element;
    }

    get children(){
        return this.element.children
    }
    get classList(){
        return _.zip(this.flexes, this.offsets);
    }

    get offsets(){
        return _.map(splitClass(this.offset), (item)=>{return `flex-${defaults.sizes[this.scren]}-${item}`})
    }

    get flexes(){
        return _.map(splitClass(this.flex), (item)=>{return `flex-${defaults.sizes[this.scren]}-${item}`})
    }



    bind(){
        this.rows = parsFloat(this.rows) || 0;
        this.applyClassList();
        this.flexChildren()

    }

    applyClassList(){
        this.element.classList.add.apply(this.element.classList, splitClass(this.self));
    }

    flexChildren(){
        if(!this.children.length){return}

        for(let index in this.children){
           this.children[index].classList.add.apply(this.children[index].classList, this.this.classlist[index])
        }
    }

    directionChanged(newDirection){
        newDirection = newDirection || defaults.direction;
        this.classList.remove(directions[newDirection])
        this.classList.add(oposites[newDirection])
    }
}
