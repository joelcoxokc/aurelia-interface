import {Router} from 'aurelia-router';
import {Navigation} from './resources/navigation-container'

export class Components{

    static inject() { return [Navigation]; }

    constructor(navigation){
        this.heading = 'aiComponents ';
        this.navigation = navigation;
        this.selectedTabRef = 'ai-tabs'
        this.components = {
            'aibtn': {
                name: 'ai-btn',
                sections:[ { name:'default', useTitle:true, tag: 'Element', codes: ['default'], body:true}
                         ]
            }
        }
    }


    activate(params, queryString, config){
        this.childNavs = config.children

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
