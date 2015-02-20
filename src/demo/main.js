import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.levels.debug);
export function configure(aurelia) {
  aurelia.use
    .defaultBindingLanguage()
    .defaultResources()
    .router()
    .eventAggregator()
  System.normalize("./dist/system/index").then(function (name) {
    System.map["aurelia-interface"] = name;

    aurelia.use.plugin(name);

    aurelia.start()
    .then(function(framework) {
        console.log('Main', framework)

        // return
        return framework.setRoot('app', document.body)
    });
  })
}
