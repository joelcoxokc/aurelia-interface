export class Components{

    constructor(){

        this.heading = 'aiComponents ';
        this.selectedTabRef = 'tab-1'

    }


    activate(params, queryString, config){

        config.toolbar.configure(
            { bgColor:'bg-teal accent-4', textColor:'text-white'}, true)

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
