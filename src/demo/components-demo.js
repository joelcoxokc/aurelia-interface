import {Router} from 'aurelia-router';
import {Navigation} from './resources/navigation-container'

export class Components{

    static inject() { return [Navigation]; }

    constructor(navigation){
        this.heading = 'aiComponents ';
        // this.navigation = navigation;
    }



    activate(params, queryString, config){

        if(config){
            this.toolbar = config.toolbar
            this.toolbar
                .configure({ size      : 'sm'
                           , fixed     : true
                           , bgColor   : 'bg-grey, darken-4'
                           , textColor : 'text-white'
                           })
        }

    }
}
