import {Behavior} from 'aurelia-templating'
// import {EventAggregator} from 'aurelia-event-aggregator';
import {EventAggregator} from 'aurelia-framework'

var defaults =  { size : 'sm'
                , fixed: true
                , bgColor  : 'white'
                , textColor: 'purple'
                , brand    : 'brand'
                }

export class Aside{

    static metadata(){

        return Behavior
            .withProperty('size', 'sizeChanged')
            .withProperty('fixed', 'fixedChanged')
            .withProperty('brand', 'brandChanged')
            .withProperty('bgColor','bgColorChanged')
            .withProperty('textColor', 'textColorChanged')

    }

    static inject(){
        return [EventAggregator]
    }

    constructor(eventAggregator){

        this.events = eventAggregator
        this.defaults = defaults

        _.assign(this, this.defaults)
        return this
    }

    init(options){
        _.assign(this, options);
        return this
    }

    sizeChanged(value) {}
    bgChanged(value) {}
    textChanged(value) {}
    brandChanged(value) {}
    fixedChanged(value) {}

}
