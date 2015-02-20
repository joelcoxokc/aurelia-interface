import {Router} from 'aurelia-router';

export class ButtonsDemo {

    constructor () {

        this.heading = 'Buttons Demo';

        this.radioOptions = [
            {name: 'First'},
            {name: 'Second'},
            {name: 'Third'}
        ]

    }


    activate(params, queryString, config){

        config.toolbar.configure(
                { bgColor:'bg-white' , textColor:'text-purple'}
        , true)

    }


    checkboxChanged (newVal) {

        alert(newVal ? 'Checked' : 'Unchecked')

    }
}
