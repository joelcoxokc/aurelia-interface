import {Router} from 'aurelia-router';
import {Navigation} from './resources/navigation-container'

export class Components{

    static inject() { return [Navigation]; }

    constructor(navigation){
        this.heading = 'aiComponents ';
        this.navigation = navigation;
        this.selectedTabRef = 'ai-list'
        this.components = {
            'aibtn': {
                name: 'ai-btn',
                sections:[ { name:'default', useTitle:true, tag: 'Element', codes: ['default'], body:true}
                         ]
            }
        }
    }


    activate(params, queryString, config){
        console.log(config.children[0].config.moduleId)
        this.childNavs = config.children
        console.log(this.selectedTabRef)

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
