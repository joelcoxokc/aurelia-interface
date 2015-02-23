import {Router} from 'aurelia-router';
import {Toolbar} from './system/toolbar'

export class AppDemo {

    static inject() {

      return [Router, Toolbar];

    }
    constructor(router, toolbar) {

        this.toolbar = toolbar.init({ size     : 'sm'
                                    , bgColor  : 'bg-white'
                                    , textColor: 'text-purple' });

        this.router = router;
        this.router.configure(config => {
            config.map([
                { route    : ['', 'welcome']
                , moduleId : 'welcome'
                , title    : 'ai'
                , toolbar  : this.toolbar
                }
              ]);
        });
    }
}
