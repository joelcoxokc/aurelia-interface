import {EventAggregator} from 'aurelia-event-aggregator';
import {Toggler}  from './system/toggler'
export class Interface{

    static inject(){

        return [EventAggregator,Toggler];

    }

    constructor(eventAggregator, toggler){
        this.events = eventAggregator
        this.toggler = toggler
        this.heading = 'Aurelia Interface ';
    }

    activate(params, queryString, routeConfig){

        if(routeConfig){
            this.toolbar = routeConfig.toolbar
            this.toolbar
                .configure({ size      : 'xl'
                           , fixed     : true
                           , bgColor   : 'bg-purple'
                           , textColor : 'text-white'
                           })
        }
        this.toggle = this.toggler.delegate('toolbar-large')
        this.toggle()
    }
}

