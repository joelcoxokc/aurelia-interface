import {Behavior} from 'aurelia-framework'


var defaults = {
    aside: {
        side    : 'left',
        open    : false,
        fixed   : true,
        asideId : 'aside1'
    },
    bar: {
        fixed : true,
        open  : false,
        size  : 'sm',
        barId : 'bar1',
    }

}

export class NavBar {

    static metadata(){

        return Behavior
            .withProperty('toggle')

    }

    constructor(options){
        options = options || {};
        this.defaults = defaults.bar;
        this.fixed = options.fixed || this.defaults.fixed;
        this.open  = options.open  || this.defaults.open;
        this.size  = options.size  || this.defaults.size;
        this.barId = options.barId || this.defaults.barId;

    }

}

export class NavAside {

    static metadata(){

        return Behavior
            .withProperty('toggle')

    }

    constructor(options){
        options = options || {};
        this.defaults = defaults.aside;
        this.fixed    = options.fixed   || this.defaults.fixed;
        this.open     = options.open    || this.defaults.open;
        this.side     = options.side    || this.defaults.side;
        this.asideId  = options.asideId || this.defaults.asideId;

    }

    toggle(value){

        console.log('toggled',  value)

    }

}
