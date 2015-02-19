/* */ 
"format register";
import {ObserverLocator, calcSplices} from 'aurelia-binding';
import {Behavior, BoundViewFactory, ViewSlot} from 'aurelia-templating';

export class Repeat {
  static metadata(){
    return Behavior
      .templateController('repeat')
      .withProperty('items', 'itemsChanged', 'repeat')
      .withProperty('local');
  }

  static inject(){ return [BoundViewFactory,ViewSlot,ObserverLocator]; }
  constructor(viewFactory, viewSlot, observerLocator){
    this.viewFactory = viewFactory;
    this.viewSlot = viewSlot;
    this.observerLocator = observerLocator;
    this.local = 'item';
  }

  bind(executionContext){
    var items = this.items;

    this.executionContext = executionContext;

    if(!items){
      if(this.oldItems){
        this.viewSlot.removeAll();
      }

      return;
    }

    if(this.oldItems === items){
      var splices = calcSplices(items, 0, items.length, this.lastBoundItems, 0, this.lastBoundItems.length);
      var observer = this.observerLocator.getArrayObserver(items);

      this.handleSplices(items, splices);
      this.lastBoundItems = this.oldItems = null;

      this.disposeArraySubscription = observer.subscribe(splices => {
        this.handleSplices(items, splices);
      });
    }else{
      this.processItems();
    }
  }

  unbind(){
    this.oldItems = this.items;

    if(this.items){
      this.lastBoundItems = this.items.slice(0);
    }

    if(this.disposeArraySubscription){
      this.disposeArraySubscription();
      this.disposeArraySubscription = null;
    }
  }

  itemsChanged(){
    this.processItems();
  }

  processItems(){
    var items = this.items,
        viewSlot = this.viewSlot,
        viewFactory = this.viewFactory,
        i, ii, row, view, observer;

    if (this.disposeArraySubscription) {
      this.disposeArraySubscription();
      viewSlot.removeAll();
    }

    if(!items){
      return;
    }

    observer = this.observerLocator.getArrayObserver(items);

    for(i = 0, ii = items.length; i < ii; ++i){
      row = this.createFullExecutionContext(items[i], i, ii);
      view = viewFactory.create(row);
      viewSlot.add(view);
    }

    this.disposeArraySubscription = observer.subscribe(splices => {
      this.handleSplices(items, splices);
    });
  }

  createBaseExecutionContext(data){
    var context = {};
    context[this.local] = data;
    return context;
  }

  createFullExecutionContext(data, index, length){
    var context = this.createBaseExecutionContext(data);
    return this.updateExecutionContext(context, index, length);
  }

  updateExecutionContext(context, index, length){
    var first = (index === 0),
        last = (index === length - 1),
        even = index % 2 === 0;

    context.$parent = this.executionContext;
    context.$index = index;
    context.$first = first;
    context.$last = last;
    context.$middle = !(first || last);
    context.$odd = !even;
    context.$even = even;

    return context;
  }

  handleSplices(array, splices){
    var viewLookup = new Map(),
        removeDelta = 0,
        arrayLength = array.length,
        viewSlot = this.viewSlot,
        viewFactory = this.viewFactory,
        i, ii, j, jj, splice, removed, addIndex, end, model, view, children, length, row;

    //TODO: track which views are moved instead of removed better
    //TODO: only update context after highest changed index

    for (i = 0, ii = splices.length; i < ii; ++i) {
      splice = splices[i];
      removed = splice.removed;

      for (j = 0, jj = removed.length; j < jj; ++j) {
        model = removed[j];
        view = viewSlot.removeAt(splice.index + removeDelta);

        if (view) {
          viewLookup.set(model, view);
        }
      }

      removeDelta -= splice.addedCount;
    }

    for (i = 0, ii = splices.length; i < ii; ++i) {
      splice = splices[i];
      addIndex = splice.index;
      end = splice.index + splice.addedCount;

      for (; addIndex < end; ++addIndex) {
        model = array[addIndex];
        view = viewLookup.get(model);

        if (view) {
          viewLookup.delete(model);
          viewSlot.insert(addIndex, view); //TODO: move
        } else {
          row = this.createBaseExecutionContext(model);
          view = this.viewFactory.create(row);
          viewSlot.insert(addIndex, view);
        }
      }
    }

    children = viewSlot.children;
    length = children.length;

    for(i = 0; i < length; i++){
      this.updateExecutionContext(children[i].executionContext, i, length);
    }

    viewLookup.forEach(x => x.unbind());
  }
}
