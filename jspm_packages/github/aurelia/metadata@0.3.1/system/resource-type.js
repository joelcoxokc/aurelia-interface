/* */ 
System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, ResourceType;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      ResourceType = (function () {
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
      _export("ResourceType", ResourceType);
    }
  };
});