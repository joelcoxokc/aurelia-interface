import {Behavior} from 'aurelia-templating'


function splitClass(str){
    return str.split(/\s*,\s*/);
}

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
        return _.zip(this.flexes, this.offsets)[0];
    }

    get offsets(){
        console.log('offset', this.offset)
        var classList = this.offset ?  splitClass(this.offset) : []
        return _.map(classList, (item)=>{return `offset-${defaults.sizes[this.screen ? this.screen : 'sm']}${item}`});
        
    }

    get flexes(){
        console.log('flex', this.offset)
        var classList = this.flex ?  splitClass(this.flex) : []
        return _.map(classList, (item)=>{return `flex-${defaults.sizes[this.screen ? this.screen : 'sm']}${item}`});
    }



    bind(){
        this.rows = parseFloat(this.rows) || 0;
        this.applyClassList();
        this.flexChildren();
    }

    applyClassList(){
        this.self && ( this.element.classList.add.apply(this.element.classList, splitClass(this.self)) );
    }

    flexChildren(){
        if(!this.children){return}
        
        for(let index in this.children){
          if(this.children[index].classList){
            console.log(this.classList)
            this.children[index].classList.add.apply(this.children[index].classList, this.classList);
          }
          
        }
    }

    directionChanged(newDirection){
        newDirection = newDirection || defaults.direction;
        this.classList.remove(directions[newDirection])
        this.classList.add(oposites[newDirection])
    }
}
