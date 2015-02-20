import {Router} from 'aurelia-router';


export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.title = "Aurelia-Interface"
    this.router.configure(config => {
      config.title = 'Aurelia Interface';
      config.map([
        { route: ['', 'welcome'],  moduleId: 'welcome'     , title: 'ai', toolbar:{size:'xl', bgColor:'bg-purple', textColor:'text-white'} },
        { route: 'buttons-demo' ,  moduleId: 'buttons-demo', title: 'ai-Btn', nav: true, toolbar:{size:'sm', bgColor:'bg-white', textColor:'text-purple'} },
        { route: 'tabs-demo'    ,  moduleId: 'tabs-demo'   , title: 'ai-Tabs', nav: true , toolbar:{size:'sm',bgColor:'bg-white', textColor:'text-purple'}},
        { route: 'components'   ,  moduleId: 'components'  , title: 'ai-Components', nav: true , toolbar:{size:'sm',bgColor:['bg-teal', 'accent-4'], textColor:'text-white'}},
        { route: 'layouts'      ,  moduleId: 'layouts'     , title: 'ai-Layouts'   , nav: true , toolbar:{size:'sm',bgColor:'bg-white', textColor:'text-purple'}},
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
