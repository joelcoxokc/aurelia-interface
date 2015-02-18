/* */ 
System.register(["aurelia-binding", "aurelia-templating"], function (_export) {
  "use strict";

  var ObserverLocator, calcSplices, Behavior, BoundViewFactory, ViewSlot, _prototypeProperties, Repeat;
  return {
    setters: [function (_aureliaBinding) {
      ObserverLocator = _aureliaBinding.ObserverLocator;
      calcSplices = _aureliaBinding.calcSplices;
    }, function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
      BoundViewFactory = _aureliaTemplating.BoundViewFactory;
      ViewSlot = _aureliaTemplating.ViewSlot;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      Repeat = _export("Repeat", (function () {
        function Repeat(viewFactory, viewSlot, observerLocator) {
          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
          this.observerLocator = observerLocator;
          this.local = "item";
        }

        _prototypeProperties(Repeat, {
          metadata: {
            value: function metadata() {
              return Behavior.templateController("repeat").withProperty("items", "itemsChanged", "repeat").withProperty("local");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [BoundViewFactory, ViewSlot, ObserverLocator];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind(executionContext) {
              var _this = this;
              var items = this.items;

              this.executionContext = executionContext;

              if (!items) {
                if (this.oldItems) {
                  this.viewSlot.removeAll();
                }

                return;
              }

              if (this.oldItems === items) {
                var splices = calcSplices(items, 0, items.length, this.lastBoundItems, 0, this.lastBoundItems.length);
                var observer = this.observerLocator.getArrayObserver(items);

                this.handleSplices(items, splices);
                this.lastBoundItems = this.oldItems = null;

                this.disposeArraySubscription = observer.subscribe(function (splices) {
                  _this.handleSplices(items, splices);
                });
              } else {
                this.processItems();
              }
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              this.oldItems = this.items;

              if (this.items) {
                this.lastBoundItems = this.items.slice(0);
              }

              if (this.disposeArraySubscription) {
                this.disposeArraySubscription();
                this.disposeArraySubscription = null;
              }
            },
            writable: true,
            configurable: true
          },
          itemsChanged: {
            value: function itemsChanged() {
              this.processItems();
            },
            writable: true,
            configurable: true
          },
          processItems: {
            value: function processItems() {
              var _this = this;
              var items = this.items,
                  viewSlot = this.viewSlot,
                  viewFactory = this.viewFactory,
                  i,
                  ii,
                  row,
                  view,
                  observer;

              if (this.disposeArraySubscription) {
                this.disposeArraySubscription();
                viewSlot.removeAll();
              }

              if (!items) {
                return;
              }

              observer = this.observerLocator.getArrayObserver(items);

              for (i = 0, ii = items.length; i < ii; ++i) {
                row = this.createFullExecutionContext(items[i], i, ii);
                view = viewFactory.create(row);
                viewSlot.add(view);
              }

              this.disposeArraySubscription = observer.subscribe(function (splices) {
                _this.handleSplices(items, splices);
              });
            },
            writable: true,
            configurable: true
          },
          createBaseExecutionContext: {
            value: function createBaseExecutionContext(data) {
              var context = {};
              context[this.local] = data;
              return context;
            },
            writable: true,
            configurable: true
          },
          createFullExecutionContext: {
            value: function createFullExecutionContext(data, index, length) {
              var context = this.createBaseExecutionContext(data);
              return this.updateExecutionContext(context, index, length);
            },
            writable: true,
            configurable: true
          },
          updateExecutionContext: {
            value: function updateExecutionContext(context, index, length) {
              var first = index === 0,
                  last = index === length - 1,
                  even = index % 2 === 0;

              context.$parent = this.executionContext;
              context.$index = index;
              context.$first = first;
              context.$last = last;
              context.$middle = !(first || last);
              context.$odd = !even;
              context.$even = even;

              return context;
            },
            writable: true,
            configurable: true
          },
          handleSplices: {
            value: function handleSplices(array, splices) {
              var viewLookup = new Map(),
                  removeDelta = 0,
                  arrayLength = array.length,
                  viewSlot = this.viewSlot,
                  viewFactory = this.viewFactory,
                  i,
                  ii,
                  j,
                  jj,
                  splice,
                  removed,
                  addIndex,
                  end,
                  model,
                  view,
                  children,
                  length,
                  row;

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
                    viewLookup["delete"](model);
                    viewSlot.insert(addIndex, view);
                  } else {
                    row = this.createBaseExecutionContext(model);
                    view = this.viewFactory.create(row);
                    viewSlot.insert(addIndex, view);
                  }
                }
              }

              children = viewSlot.children;
              length = children.length;

              for (i = 0; i < length; i++) {
                this.updateExecutionContext(children[i].executionContext, i, length);
              }

              viewLookup.forEach(function (x) {
                return x.unbind();
              });
            },
            writable: true,
            configurable: true
          }
        });

        return Repeat;
      })());
    }
  };
});