import {AiElement} from './ai-element'
import {EventAggregator} from 'aurelia-event-aggregator';


export class InterfaceElement extends AiElement{
    static inject(){

        return [EventAggregator];

    }

    constructor(eventAggregator){

        this.eventAggregator = eventAggregator;
    }

    subscribe(message, callback){
        this.eventAggregator.subscribe(SomeMessage, callback);
    }

    publish(message, callback){
        this.eventAggregator.subscribe(SomeMessage, callback);
    }
}


