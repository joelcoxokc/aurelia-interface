import {EventAggregator} from 'aurelia-event-aggregator';

export class Interface{

    static inject(){

        return [EventAggregator];

    }

    constructor(eventAggregator){
        this.events = eventAggregator
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
            this.events.publish('$stateChanged', this.toolbar)
        }

    }
}

