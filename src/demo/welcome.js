import {EventAggregator} from 'aurelia-event-aggregator';

export class Welcome{

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
                           , bgColor   : 'purple'
                           , textColor : 'white'
                           })
            this.events.publish('$stateChanged', this.toolbar)
        }

    }
}
