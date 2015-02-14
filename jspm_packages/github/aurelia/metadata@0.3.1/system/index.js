/* */ 
System.register(["./origin", "./resource-type", "./metadata"], function (_export) {
  "use strict";

  return {
    setters: [function (_origin) {
      _export("Origin", _origin.Origin);
    }, function (_resourceType) {
      _export("ResourceType", _resourceType.ResourceType);
    }, function (_metadata) {
      _export("Metadata", _metadata.Metadata);
    }],
    execute: function () {}
  };
});