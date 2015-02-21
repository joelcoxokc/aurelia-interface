import {Router} from 'aurelia-router';
import {Toolbar} from './system/toolbar'
import {Aside} from './system/aside'

export class App {
  static inject() { return [Router, Toolbar, Aside]; }
  constructor(router, toolbar, aside) {

    this.aside   = aside.init({ open:false
                              , side:'left'
                              , size:'md' });

    this.toolbar = toolbar.init({ size     : 'sm'
                                , bgColor  : 'bg-white'
                                , textColor: 'text-purple' });

    // this.toolbar.configure({
    //   size: 'sm',
    //   bgColor:'bg-white',
    //   textColor:'text-purple'
    // })


    console.log(this.toolbar)


    this.interface = {
      direction: 'row',
    }

    this.router = router;
    this.router.title = "Aurelia-Interface"
    this.router.configure(config => {
      config.title = 'Aurelia Interface';
      config.map([
        { route: ['', 'welcome'],  moduleId: 'welcome'          , title: 'ai', toolbar:this.toolbar },
        { route: 'buttons-demo' ,  moduleId: 'buttons-demo'     , title: 'ai-Btn', nav: true, toolbar:this.toolbar },
        { route: 'tabs-demo'    ,  moduleId: 'tabs-demo'        , title: 'ai-Tabs', nav: true , toolbar:this.toolbar},
        { route: 'components'   ,  moduleId: 'components-demo'  , title: 'ai-Components', nav: true , toolbar:this.toolbar},
        { route: 'layouts'      ,  moduleId: 'layouts-demo'     , title: 'ai-Layouts'   , nav: true , toolbar:this.toolbar},
      ]);
    });
  }
}
