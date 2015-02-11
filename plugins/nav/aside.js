import {Behavior} from 'aurelia-framework';

var defaults = {
  asideId : 'aside1',
  side    : 'left'  ,
  open    : false   ,
  fixed   : true
}

export class Aside {

    static metadata(){

        return Behavior
            .withProperty('open')
            .withProperty('side')
            .withProperty('size')
            .withProperty('fixed')
            .attachedBehavior('toggle')

    }


    constructor(options){
        this.defaults = defaults;

        this.asideId = options.asideId || this.defaults.asideId
        this.fixed   = options.fixed   || this.defaults.fixed
        this.side    = options.side    || this.defaults.side
        this.open    = options.open    || this.defaults.open
        this.size    = options.size    || this.defaults.size

    }

    activate(options){

        console.log('Aside Activated', this);

    }


    toggle(){
        this.open = !this.open;

    }


}
