import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.title = "Aurelia-Interface"
    this.router.configure(config => {
      config.title = 'Aurelia Interface';
      config.map([
        { route: ['', 'welcome'], moduleId: 'welcome' },
        { route: 'buttons-demo',  moduleId: 'buttons-demo', nav: true },
        { route: 'tabs-demo',  moduleId: 'tabs-demo', nav: true },
      ]);
    });

    this.asideIsOpen = true
  }
}
