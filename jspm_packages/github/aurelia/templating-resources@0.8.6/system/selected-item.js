/* */ 
System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, SelectedItem;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      SelectedItem = _export("SelectedItem", (function () {
        function SelectedItem(element) {
          this.element = element;
          this.options = [];
          this.callback = this.selectedIndexChanged.bind(this);
        }

        _prototypeProperties(SelectedItem, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("selected-item").withProperty("value", "valueChanged", "selected-item").and(function (x) {
                return x.bindingIsTwoWay();
              }).syncChildren("options", "optionsChanged", "option");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              this.element.addEventListener("change", this.callback, false);
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              this.element.removeEventListener("change", this.callback);
            },
            writable: true,
            configurable: true
          },
          valueChanged: {
            value: function valueChanged(newValue) {
              this.optionsChanged();
            },
            writable: true,
            configurable: true
          },
          selectedIndexChanged: {
            value: function selectedIndexChanged() {
              var index = this.element.selectedIndex,
                  option = this.options[index];

              this.value = option ? option.model : null;
            },
            writable: true,
            configurable: true
          },
          optionsChanged: {
            value: function optionsChanged(mutations) {
              var value = this.value,
                  options = this.options,
                  option,
                  i,
                  ii;

              for (i = 0, ii = options.length; i < ii; ++i) {
                option = options[i];

                if (option.model === value) {
                  if (this.element.selectedIndex !== i) {
                    this.element.selectedIndex = i;
                  }

                  return;
                }
              }

              this.element.selectedIndex = 0;
            },
            writable: true,
            configurable: true
          }
        });

        return SelectedItem;
      })());
    }
  };
});