import {EventAggregator} from 'aurelia-event-aggregator';


export class Notify{

    static inject(){

        return [EventAggregator];

    }

    constructor(eventAggregator){

        this.eventAggregator = eventAggregator;

    }

    subscribe(message, callback){
        this.eventAggregator.subscribe(message, callback)
    }
    publish(message, payload){
        this.eventAggregator.publish(message, payload)

    }

}
