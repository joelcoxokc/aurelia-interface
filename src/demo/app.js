import {Router} from 'aurelia-router';
import {Toolbar} from './system/toolbar'


export class App {
  static inject() { return [Router, Toolbar]; }
  constructor(router, toolbar) {

    this.toolbar = toolbar
    this.toolbar.configure({
      size: 'sm',
      bgColor:'white',
      textColor:'purple'
    })


    this.router = router;
    this.router.title = "Aurelia-Interface"
    this.router.configure(config => {
      config.title = 'Aurelia Interface';
      config.map([
        // { route: ['', 'welcome'],  moduleId: 'welcome'     , title: 'ai', toolbar:{size:'xl', bgColor:'bg-purple', textColor:'text-white'} },
        { route: ['', 'welcome'],  moduleId: 'welcome'     , title: 'ai', toolbar:this.toolbar },
        { route: 'buttons-demo' ,  moduleId: 'buttons-demo', title: 'ai-Btn', nav: true, toolbar:this.toolbar },
        { route: 'tabs-demo'    ,  moduleId: 'tabs-demo'   , title: 'ai-Tabs', nav: true , toolbar:this.toolbar},
        { route: 'components'   ,  moduleId: 'components'  , title: 'ai-Components', nav: true , toolbar:this.toolbar},
        { route: 'layouts'      ,  moduleId: 'layouts'     , title: 'ai-Layouts'   , nav: true , toolbar:this.toolbar},
      ]);
    });

    this.aside = {
      open:false,
      side:'left',
      size:'md'
    }

    this.interface = {
      direction: 'row',
    }


  }
}
