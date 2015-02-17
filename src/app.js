import {Router} from 'aurelia-router';
import {NavBar} from 'aurelia-interface@master'


export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.title = "Aurelia-Interface"
    this.router.configure(config => {
      config.title = 'Aurelia Interface';
      config.map([
        { route: ['', 'welcome'],  moduleId: 'welcome', title:'ai', bar:{size:'sm'} },
        { route: 'buttons-demo' ,  moduleId: 'buttons-demo', 'title':'Buttons Demo', nav: true, bar:{size:'xl'} },
        { route: 'tabs-demo'    ,  moduleId: 'tabs-demo', title:'Tabs Demo', nav: true , bar:{size:'xl'}},
      ]);
    });

    this.aside = {
      open:false,
    }

    this.interface = {
      direction: 'is-row',
    }
    this.bar = {
      size: 'sm'
    }
  }
}
