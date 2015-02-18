import {Router} from 'aurelia-router';


export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.title = "Aurelia-Interface"
    this.router.configure(config => {
      config.title = 'Aurelia Interface';
      config.map([
        { route: ['', 'welcome'],  moduleId: 'welcome', title:'ai', toolbar:{size:'sm', bgColor:'white', textColor:'purple'} },
        { route: 'buttons-demo' ,  moduleId: 'buttons-demo', 'title':'Buttons Demo', nav: true, toolbar:{size:'xl', bgColor:'purple', textColor:'white'} },
        { route: 'tabs-demo'    ,  moduleId: 'tabs-demo', title:'Tabs Demo', nav: true , toolbar:{size:'xl',bgColor:'purple', textColor:'white'}},
        { route: 'components'   ,  moduleId: 'components', title:'aiComponents', nav: true , toolbar:{size:'sm',bgColor:'purple', textColor:'white'}},
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
