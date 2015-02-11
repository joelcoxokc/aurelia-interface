import {All}              from 'aurelia-framework';
import {Behavior}         from 'aurelia-templating';
import {Aside}            from './aside'
import {Bar}              from './bar'
import {MsgPublisher}     from './message'
import {MsgSubscriber}    from './message'


var defaults = {
  asideId : 'aside1',
  size    : 'md'    ,
  side    : 'left' ,
  open    : false   ,
  fixed   : true
}

export class UiAureliaCustomElement {

    static metadata(){

        return Behavior
            // .noView()
            .withProperty('router')
            .withProperty('aside')
            .withProperty('nav')
            .withProperty('footer')
            ;

    }

    static inject() {

        return [Element,Bar, MsgPublisher, MsgSubscriber];

    }

    constructor(element, bar, pub, sub) {

        this.element = element
        this.pub     = pub
        this.sub     = sub
        this.aside   = {};
        this.bar     = {};
        this.aside   = new Aside(defaults)


    }

    attached(){
        this.element.classList.add('ui-aurelia')
        // console.log('Aurelia UI, attahced', this)
    }

    activate(){

        this.header = 'Joel'
        console.log('Nav Activated', this)

    }


    // valueChanged(newValue){
    //     Object.keys(newValue).forEach(className => {
    //         this.element.classList[newValue[className] ? 'add' : 'remove'](className);
    //     });
    // }
}
