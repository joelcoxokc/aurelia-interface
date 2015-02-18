/* */ 
"format register";
import {Container} from 'aurelia-dependency-injection';
import {ViewSlot, ViewStrategy} from 'aurelia-templating';
import {Router} from 'aurelia-router';
import {Metadata, Origin} from 'aurelia-metadata';

export class RouterView {
  static metadata(){ return Metadata.customElement('router-view').noView(); }
  static inject() { return [Element,Container,ViewSlot,Router]; }
  constructor(element, container, viewSlot, router) {
    this.element = element;
    this.container = container;
    this.viewSlot = viewSlot;
    this.router = router;
    router.registerViewPort(this, element.getAttribute('name'));
  }

  process(viewPortInstruction, waitToSwap) {
    var component = viewPortInstruction.component,
        viewStrategy = component.view,
        viewModelInfo = component.viewModelInfo,
        childContainer = component.childContainer,
        viewModel = component.executionContext;

    if(!viewStrategy && 'getViewStrategy' in viewModel){
      viewStrategy = viewModel.getViewStrategy();
    }

    if(viewStrategy){
      viewStrategy = ViewStrategy.normalize(viewStrategy);
      viewStrategy.makeRelativeTo(Origin.get(component.router.container.viewModel.constructor).moduleId);
    }

    return viewModelInfo.type.load(childContainer, viewModelInfo.value, viewStrategy).then(behaviorType => {
      viewPortInstruction.behavior = behaviorType.create(childContainer, {executionContext:viewModel, suppressBind:true});
      
      if(waitToSwap){
        return;
      }
      
      this.swap(viewPortInstruction);
    });
  }

  swap(viewPortInstruction){
    viewPortInstruction.behavior.view.bind(viewPortInstruction.behavior.executionContext);
    this.viewSlot.swap(viewPortInstruction.behavior.view);

    if(this.view){
      this.view.unbind();
    }

    this.view = viewPortInstruction.behavior.view;
  }
}