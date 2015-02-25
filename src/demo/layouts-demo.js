import {Toggler} from './system/toggler'

export class Layout{

    static inject(){
        return [Toggler]
    }

    constructor(toggler){
        this.toggler = toggler
        this.heading = 'aiLayout ';
        this.selectedTabRef = 'a-interface'
        this.isAnimated = false
        this.time = new TimelineLite()
    }


    activate(params, queryString, config){
        this.explode = this.toggler.delegate('explode')

         config.toolbar.configure({ bgColor :'bg-indigo'
                                 , textColor:'text-white'
                                 }
        , true)


    }

    animate(){
         let doc = document.body
         let html = document.getElementsByTagName('html')
         let main = document.querySelector('.ai-main')
         let bod  = document.querySelector('.a-interface')

        if(this.isAnimated){
            this.isAnimated = !this.isAnimated
            this.time.reverse()
            return
        } else {
            this.time = new TimelineLite()
            this.isAnimated = !this.isAnimated
            this.time
                 .to(html, 0, {overflow:'visible'})
                 .to(bod, 0, {overflow:'visible'})
                 .to(doc, 0, {overflow:'visible'})
                 .to(main, 0, {minHeight:'80vh'})
                 .to(doc, 1, {boxShadow:'-5px 6px 10px rgba(0,0,0,.1)', scale:0.7})
                 .to(doc, 1, {perspective:'700px', rotation:0, skewX:'22deg', skewY:'0deg', translate:'translate3d(0px, 0px, 300px)'})
                 .to(main, 0, {zIndex:'2000', overflow:'hidden',  boxShadow:'-10px 15px 15px rgba(0,0,0,.2)'})
                 .to(main, 2, {ease:Expo.easeOut, scale:0.95, x:20})

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
