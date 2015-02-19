/* */ 
"format register";
import {Container} from 'aurelia-dependency-injection';
import {Behavior, CompositionEngine, ViewSlot, ViewResources} from 'aurelia-templating';

export class Compose {
  static metadata(){
    return Behavior
      .customElement('compose')
      .withProperty('model')
      .withProperty('view')
      .withProperty('viewModel')
      .noView();
  }

  static inject(){ return [Container,CompositionEngine,ViewSlot,ViewResources]; }
	constructor(container, compositionEngine, viewSlot, viewResources){
		this.container = container;
		this.compositionEngine = compositionEngine;
		this.viewSlot = viewSlot;
    this.viewResources = viewResources;
	}

	bind(executionContext){
		this.executionContext = executionContext;
		processInstruction(this, { view:this.view, viewModel:this.viewModel, model:this.model });
	}

	modelChanged(newValue, oldValue){
		if(this.viewModel && typeof this.viewModel.activate === 'function'){
			this.viewModel.activate(newValue);
		}
  }

  viewChanged(newValue, oldValue){
  	processInstruction(this, { view:newValue, viewModel:this.viewModel, model:this.model });
  }

  viewModelChanged(newValue, oldValue){
  	processInstruction(this, { viewModel:newValue, view:this.view, model:this.model });
  }
}

function processInstruction(composer, instruction){
  composer.compositionEngine.compose(Object.assign(instruction, {
    executionContext:composer.executionContext,
    container:composer.container,
    viewSlot:composer.viewSlot,
    viewResources:composer.viewResources,
    currentBehavior:composer.current
  })).then(next => {
    composer.current = next;
  });
}
