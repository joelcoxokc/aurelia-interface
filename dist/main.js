import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {Aside} from './system/aside'
import {Navigation} from './resources/navigation-container'
import {AsideToggle} from './system/aside-toggle';
import {Toggler} from './system/toggler';
import {Activator} from 'aurelia-interface-activator';



LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.levels.debug);
export function configure(aurelia) {

  aurelia.use
    .defaultBindingLanguage()
    .defaultResources()
    .router()
    .eventAggregator()
    .plugin('./resources/index');
  System.normalize("./dist/system/index").then(function (name) {
    System.map["aurelia-interface"] = name;

    aurelia.use.plugin(name);
    console.log(Activator)
    aurelia.start()
    .then(function(framework) {
        console.log('Main', framework)
        framework.container.registerInstance(Toggler, new Toggler())
        framework.container.registerInstance(Aside, new Aside())
        framework.container.registerInstance(Navigation, new Navigation())
        framework.container.registerInstance(AsideToggle, new AsideToggle())
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
