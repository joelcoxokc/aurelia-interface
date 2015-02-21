import {Router} from 'aurelia-router';

export class ButtonsDemo {

    constructor () {

        this.heading = 'Buttons Demo';
        this.selectedTabRef = 'tab-1'

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

     updateTabSliderPosition (tabsInstance, next) {

        let slider = tabsInstance.element.querySelector('.ai-tab-slider')
        let sliderWidth = 100 / tabsInstance.tabLinks.length

        slider.style.width = sliderWidth + 10 + '%';
        slider.style.left = tabsInstance.activeTabLink.offsetLeft + 'px';

        setTimeout(function(){
            slider.style.width = sliderWidth + '%';
        }, 200)

        next()

    }
}
