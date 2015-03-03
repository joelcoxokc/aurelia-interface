import {Router} from 'aurelia-router';
import {Container} from 'aurelia-dependency-injection';
import {Toolbar} from './system/toolbar'
import {Aside} from './system/aside'
// import {PipelineProvider} from 'aurelia-router';

export class App {

  static inject() { return [Router, Toolbar, Aside]; }

  constructor(router, toolbar, aside) {

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
        },
        { route    : 'getting-started'
        , moduleId : 'getting-started'
        , title    : 'Getting Started'
        , nav      : true
        , toolbar  : this.toolbar
        },
        { route    : 'components-demo'
        , moduleId : 'components-demo'
        , title    : 'ai-Components'
        , nav      : true
        , toolbar  : this.toolbar
        },
        { route    : 'layouts-demo'
        , moduleId : 'layouts-demo'
        , title    : 'ai-Layouts'
        , nav      : true
        , toolbar  : this.toolbar
        },
      ]);
    });
  }


  activate(){
    console.log(this.router.navigation)
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
