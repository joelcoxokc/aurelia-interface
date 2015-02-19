/* */ 
"format register";
define(["exports"], function (exports) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  var ResourceType = (function () {
    function ResourceType() {}

    _prototypeProperties(ResourceType, null, {
      load: {
        value: function load(container, target) {
          return this;
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      register: {
        value: function register(registry, name) {
          throw new Error("All descendents of \"ResourceType\" must implement the \"register\" method.");
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    });

    return ResourceType;
  })();

  exports.ResourceType = ResourceType;
});