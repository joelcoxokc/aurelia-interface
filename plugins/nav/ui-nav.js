import {Behavior} from 'aurelia-framework'
import {Aside}    from './aside'
import {Bar}      from './bar'

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
        barId : 'bar1'
    }

}

export class Nav {

    static metadata(){

        return Behavior
            .withProperty('toggle')

    }

    static inject() {

        return [Aside, Bar]

    }
    activate(){
        console.log('me')
    }

    constructor(aside, bar){
        this.$aside = aside
        this.$bar   = bar
        this.bars   = {}
        this.asides = {}
    }

    addBar(options){

        options = _.assign(defaults.bar, options);

        if (this.bars[options.barId]) {

            return console.error(`Bar ${options.barId} already Exists`);
        }

        this.bars[options.barId] = new this.$bar(options);

    }

    addAside(){

        options = _.assign(defaults.aside, options);

        if (this.bars[options.asideId]) {

            return console.error(`Aside ${options.barId} already Exists`);
        }

        this.bars[options.asideId] = new this.$aside(options);
    }
}
