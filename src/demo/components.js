import {Router} from 'aurelia-router';
import {AiComponents} from './system/components';

export class Components{

    static inject(){

        return [Router, AiComponents]

    }

    constructor(router, aiComponents){

        this.heading = 'aiComponents ';
        this.aiComponents = aiComponents
        console.log(aiComponents)
        this.selectedTabRef = this.aiComponents.components[0].moduleId
        console.log(this.aiComponents.components[0].moduleId)
        // console.log(AiComponents)
        // // router.title = "Aurelia-Interface"
        // router.configure(config => {
        //   config.title = 'Aurelia Interface';
        //   config.map([
        //     // { route: 'buttons-demo' ,  moduleId: 'buttons-demo'     , title: 'ai-Btn', nav: true},
        //     // { route: 'tabs-demo'    ,  moduleId: 'tabs-demo'        , title: 'ai-Tabs', nav: true},
        //     { route: 'components'   ,  moduleId: 'components'  , title: 'ai-Components', nav: true , toolbar:this.toolbar},
        //     { route: 'layouts'      ,  moduleId: 'layouts'     , title: 'ai-Layouts'   , nav: true , toolbar:this.toolbar},
        //   ]);
        // });
    }


    activate(params, queryString, config){

        // config.toolbar.configure(
        //     { bgColor:'bg-teal accent-4', textColor:'text-white'}, true)

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
