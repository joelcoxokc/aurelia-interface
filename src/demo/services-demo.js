import {Router} from 'aurelia-router';
import {Navigation} from './resources/navigation-container'

export class Services{

    static inject() { return [Navigation]; }

    constructor(navigation){
        this.heading = 'aiServices ';
        this.navigation = navigation;
        this.selectedTabRef = 'ai-Toggler'
    }


    activate(params, queryString, config){
        this.childNavs = config.children
         config.toolbar.configure(
                { bgColor:'bg-grey darken-4', textColor:'text-white'}, true)

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
