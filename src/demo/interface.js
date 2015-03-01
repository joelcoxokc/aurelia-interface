import {EventAggregator} from 'aurelia-event-aggregator';
import {ActivatorService}  from './system/activator-service'
export class Interface{

    static inject(){

        return [EventAggregator,ActivatorService];

    }

    constructor(eventAggregator, activator){
        this.events = eventAggregator
        this.activator = activator
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
    }
}

