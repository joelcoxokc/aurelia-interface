/* */ 
System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, Headers;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      Headers = _export("Headers", (function () {
        function Headers() {
          var headers = arguments[0] === undefined ? {} : arguments[0];
          this.headers = headers;
        }

        _prototypeProperties(Headers, null, {
          add: {
            value: function add(key, value) {
              this.headers[key] = value;
            },
            writable: true,
            configurable: true
          },
          get: {
            value: function get(key) {
              return this.headers[key];
            },
            writable: true,
            configurable: true
          },
          clear: {
            value: function clear() {
              this.headers = {};
            },
            writable: true,
            configurable: true
          },
          configureXHR: {
            value: function configureXHR(xhr) {
              var headers = this.headers,
                  key;

              for (key in headers) {
                xhr.setRequestHeader(key, headers[key]);
              }
            },
            writable: true,
            configurable: true
          }
        });

        return Headers;
      })());
    }
  };
});