import {Behavior, BoundViewFactory, ViewSlot} from 'aurelia-templating';
import {Bar}              from './bar'
import {MsgPublisher}     from './message'
import {MsgSubscriber}    from './message'
import {UiElement}        from './ui-element';


export class UiNavBarTemplateController extends UiElement {


    static metadata(){

       return Behavior
         .customElement('ui-nav-bar')
         .withProperty('router')
         .withProperty('aside')
         .withProperty('showing')
         .withProperty('value')
         // .useView('./ui-nav-bar.html')
         // .useShadowDOM('./ui-nav-bar.html')

    }


    static inject() {
      // console.log(Container)
      return [BoundViewFactory, ViewSlot]

    }


    constructor(viewFactory, viewSlot){
      console.log()
      this.viewFactory = viewFactory
      this.viewSlot = viewSlot
      this.showing = true

      this.barId   = 'bar1'
      this.open    = false
      this.fixed   = true
      this.size    = 'sm'
      this.ripple  = true;
    }

    open(){

        this.showing = !this.showing;

    }


    valueChanged(){

        if (newValue) {

            if(this.view){
                this.viewSlot.remove(this.view);
                this.view.unbind();
            }

            this.showing = false;
            return;
        }

        if(!this.view){


            this.view = this.viewFactory.create();
        }

        if (this.showing) {

            this.showing = true;

            if(!this.view.bound){

                this.view.bind();

            }

            this.viewSlot.add(this.view);
        }
    }


}
