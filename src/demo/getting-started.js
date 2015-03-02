import {EventAggregator} from 'aurelia-event-aggregator';

export class Welcome{

    static inject(){

        return [EventAggregator];

    }

    constructor(eventAggregator){
        this.events = eventAggregator
        this.heading = 'Getting Started ';
    }

    activate(params, queryString, routeConfig){

        if(routeConfig){
            this.toolbar = routeConfig.toolbar
            this.toolbar
                .configure({ size      : 'sm'
                           , fixed     : true
                           , bgColor   : 'bg-purple'
                           , textColor : 'text-white'
                           })
            this.events.publish('$stateChanged', this.toolbar)
        }
    }
}

