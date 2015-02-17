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

    activate(value){
        console.log(value)

    }

    checkboxChanged (newVal) {
        alert(newVal ? 'Checked' : 'Unchecked')
    }
}
