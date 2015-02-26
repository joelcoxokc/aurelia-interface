// import {Behavior}  from 'aurelia-templating'

// //================  root-scope.js

// export class RootScope{

//     constructor(defaults){

//         this._store  = {};
//         this._events = {};
//         /*
//         lodash.assign
//          */
//         _.assign(this, defaults)
//     }

//     on(eventName, callback){

//         this._events[eventName] = this._events[eventName] || []
//         this._events[eventName].push(callback)

//     }

//     trigger(eventName, payload, callback){

//         var isEvent = this._events[eventName]
//         if(isEvent) {

//             callback(payload, callback)
//         }
//     }

//     find(key){

//         var result = this._store[key];
//         return result ? result : `Nothing found! at ${key}`

//     }


//     add(key, value){

//         this._store[key] = value;

//     }


//     remove(key){

//         var value = this._store[key]
//         delete this._store[key]
//         return value;

//     }
// }


// import {RootScope} from './root-scope'


// export function configure(aurelia) {

//   aurelia.use
//     .defaultBindingLanguage()
//     .defaultResources()
//     .router()
//     .eventAggregator()

//     aurelia.start()
//     .then(function(framework) {
//         framework.container
//             .registerInstance(RootScope,
//                 new RootScope({
//                     /* Your Default configurations here */
//                     appName: 'MyApp'
//                 }))
//         return framework.setRoot('app', document.body)
//     });
//   })
// }

// export class RootScopeAttachedBehavior{ /* Or use CustomeElement */

//     static metatdata(){
//         return Behavior
//             .withProperty('appName')
//     }

//     static inject(){
//         return [Element, RootScope]
//     }

//     constructor(element, rootScope){

//         this.element   = element
//         this.rootScope = rootScope
//         /*
//         lodash.assign
//          */
//         _.assign(this, this.rootScope)
//     }


//     appNameChanged(value){
//         this.rootScope.add('appName', value)
//     }

// }

