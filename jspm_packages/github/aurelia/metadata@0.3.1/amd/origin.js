/* */ 
"format register";
define(["exports"], function (exports) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  var originStorage = new Map();

  function ensureType(value) {
    if (value instanceof Origin) {
      return value;
    }

    return new Origin(value);
  }

  var Origin = (function () {
    function Origin(moduleId, moduleMember) {
      this.moduleId = moduleId;
      this.moduleMember = moduleMember;
    }

    _prototypeProperties(Origin, {
      get: {
        value: function get(fn) {
          var origin = originStorage.get(fn);

          if (origin !== undefined) {
            return origin;
          }

          if (typeof fn.origin === "function") {
            originStorage.set(fn, origin = ensureType(fn.origin()));
          } else if (fn.origin !== undefined) {
            originStorage.set(fn, origin = ensureType(fn.origin));
          }

          return origin;
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      set: {
        value: function set(fn, origin) {
          if (Origin.get(fn) === undefined) {
            originStorage.set(fn, origin);
          }
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    });

    return Origin;
  })();

  exports.Origin = Origin;
});