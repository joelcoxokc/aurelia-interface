import {Router} from 'aurelia-router';


export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.title = "Aurelia-Interface"
    this.router.configure(config => {
      config.title = 'Aurelia Interface';
      config.map([
        { route: ['', 'welcome'],  moduleId: 'welcome'     , title: 'ai', toolbar:{size:'sm', bgColor:'white', textColor:'purple'} },
        { route: 'buttons-demo' ,  moduleId: 'buttons-demo', title: 'ai-Btn', nav: true, toolbar:{size:'xl', bgColor:'purple', textColor:'white'} },
        { route: 'tabs-demo'    ,  moduleId: 'tabs-demo'   , title: 'ai-Tabs', nav: true , toolbar:{size:'xl',bgColor:'purple', textColor:'white'}},
        { route: 'components'   ,  moduleId: 'components'  , title: 'ai-Components', nav: true , toolbar:{size:'xl',bgColor:'purple', textColor:'white'}},
        { route: 'layouts'      ,  moduleId: 'layouts'     , title: 'ai-Layouts'   , nav: true , toolbar:{size:'xl',bgColor:'purple', textColor:'white'}},
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
    this.toolbar = {
      size: 'sm',
      bgColor:'white',
      textColor:'purple'
    }
  }
}
