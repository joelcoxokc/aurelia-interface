import {Router} from 'aurelia-router';
import {Toolbar} from './system/toolbar'
import {Aside} from './system/aside'
import {Navigation} from './resources/navigation-container'

export class App {
  static inject() { return [Router, Toolbar, Aside, Navigation]; }
  constructor(router, toolbar, aside, navigation) {

    this.navigation = navigation;

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
        { route   : ['', 'welcome']
        , moduleId : 'welcome'
        , title    : 'ai'
        , toolbar  : this.toolbar
        , settings : {level:1}
        },
        { route    : 'components'
        , moduleId : 'components-demo'
        , title    : 'ai-Components'
        , nav      : true
        , toolbar  : this.toolbar
        , settings : {level:1}
        },
        { route    : 'layouts'
        , moduleId : 'layouts-demo'
        , title    : 'ai-Layouts'
        , nav      : true
        , toolbar  : this.toolbar
        , settings : {level:1}
        },
        { route    : 'buttons-demo'
        , moduleId : 'buttons-demo'
        , title    : 'ai-Btn'
        , toolbar  : this.toolbar
        , nav      : true
        , settings : {level:2, parent:'components-demo'}
        },
        { route    : 'tabs-demo'
        , moduleId : 'tabs-demo'
        , title    : 'ai-Tabs'
        , toolbar  : this.toolbar
        , nav      : true
        , settings : {level:2, parent:'components-demo'}
        },
      ]);
    });
  }


  activate(){
    this.navigation.init(this.router)
    console.log(this.router.navigation)


  }
}
