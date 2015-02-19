/* */ 
System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, Show;


  function addStyleString(str) {
    var node = document.createElement("style");
    node.innerHTML = str;
    node.type = "text/css";
    document.head.appendChild(node);
  }

  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      addStyleString(".aurelia-hide { display:none !important; }");

      Show = _export("Show", (function () {
        function Show(element) {
          this.element = element;
        }

        _prototypeProperties(Show, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("show").withProperty("value", "valueChanged", "show");
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
          valueChanged: {
            value: function valueChanged(newValue) {
              if (newValue) {
                this.element.classList.remove("aurelia-hide");
              } else {
                this.element.classList.add("aurelia-hide");
              }
            },
            writable: true,
            configurable: true
          }
        });

        return Show;
      })());
    }
  };
});