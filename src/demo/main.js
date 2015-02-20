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
        framework.container.registerInstance(Inst, new Inst())
        // return
        return framework.setRoot('app', document.body)
    });
  })
}

export class Inst{
    constructor(){
        this.name = 'Joel'
    }
}

// import {LogManager} from 'aurelia-framework';

// export function configure(aurelia) {

//   aurelia.use
//     .defaultBindingLanguage()
//     .defaultResources()
//     .router()
//     .eventAggregator()

//     aurelia.start()
//     .then(function(framework) {

//         framework.container.registerInstance(Inst, new Inst())

//         return framework.setRoot('app', document.body)
//     });
// }

// class Inst{
//     constructor(){
//         this.name = 'Joel'
//     }
// }
