import {EventAggregator} from 'aurelia-event-aggregator'


export class MsgPublisher{


    static inject() {

        return [EventAggregator]

    }


    constructor(eventAggregator) {

        this.eventAggregator = EventAggregator

    }


    publish(channel, payload){

        this.eventAggregator.publish(channel, payload)

    }


}

export class MsgSubscriber{

    static inject() {

        return [EventAggregator]

    }


    constructor(eventAggregator){

        this.eventAggregator = eventAggregator

    }


    subscribe(channel){
        this.eventAggregator.subscribe(channel, payload =>{
            console.log('Subscribe Payload', payload)
        })
    }

}
