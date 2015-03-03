import {Lazy} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Toolbar} from './system/toolbar'
import {Aside} from './system/aside'
import {Navigation} from './resources/navigation-container'
import {Container} from 'aurelia-dependency-injection';
import {AiToolbar} from './system/ai-toolbar';
import {PipelineProvider} from 'aurelia-router';

export class App {

  static inject() { return [Router, Toolbar, Aside, Navigation, PipelineProvider]; }

  constructor(router, toolbar, aside, navigation, pipelineProvider) {

    this.navigation = navigation;
    this.aside   = aside.init({ open:false
                              , side:'left'
                              , size:'md' });

    this.toolbar = toolbar.init({ size     : 'sm'
                                , bgColor  : 'bg-white'
                                , textColor: 'text-purple' });

    this.interface = {
      direction: 'row',
    }

    this.router = router;
    this.router.title = "Aurelia-Interface"
    this.router.configure(config => {
      config.title = 'Aurelia Interface';
      // config.addPipelineStep('authorize', AuthorizeStep);
      config.map([
        { route   : ['', 'welcome']
        , moduleId : 'welcome'
        , title    : 'ai'
        , toolbar  : this.toolbar
        , settings : {level:1}
        },
        { route    : 'getting-started'
        , moduleId : 'getting-started'
        , title    : 'Getting Started'
        , nav      : true
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
  }
}



class AuthorizeStep {
  static inject() { return []; }
  constructor() {
  }

  run(routingContext, next) {
    // Check if the route has an "auth" key
    // The reason for using `nextInstructions` is because
    // this includes child routes.
    if (routingContext.nextInstructions.some(i => i.config.toolbar)) {
       console.log(routingContext.nextInstructions)

      return next();
    } else {
      return next();
    }
  }
}
