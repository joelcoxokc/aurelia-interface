
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {Ai} from '../resources/index'
// import {Metadata}         from 'aurelia-metadata'

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.levels.debug);
export function configure(aurelia) {


  aurelia.use
    .defaultBindingLanguage()
    .defaultResources()
    .router()
    .eventAggregator()
    .plugin('./a-interface')
    .plugin('./ai-card')
    .plugin('./ai-action')
    .plugin('./ui-class-list')
    .plugin('./ui-element')
    .plugin('./ui-toggle')
    .plugin('./ai-nav-bar')
    .plugin('./ai-nav-aside')
    // .plugin('../plugins/toggle/ui-toggle')

  aurelia.start()
  .then(function(framework) {
      console.log('Main', framework)

      // return
      return framework.setRoot('app', document.body)
  });
}
