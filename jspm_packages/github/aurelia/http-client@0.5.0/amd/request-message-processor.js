/* */ 
"format register";
define(["exports","./http-response-message","aurelia-path"], function (exports, _httpResponseMessage, _aureliaPath) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

  var HttpResponseMessage = _httpResponseMessage.HttpResponseMessage;
  var join = _aureliaPath.join;
  var buildQueryString = _aureliaPath.buildQueryString;


  function buildFullUri(message) {
    var uri = join(message.baseUrl, message.uri),
        qs;

    if (message.params) {
      qs = buildQueryString(message.params);
      uri = qs ? "" + uri + "?" + qs : uri;
    }

    message.fullUri = uri;
  }

  var RequestMessageProcessor = exports.RequestMessageProcessor = (function () {
    function RequestMessageProcessor(xhrType, transformers) {
      this.XHRType = xhrType;
      this.transformers = transformers;
    }

    _prototypeProperties(RequestMessageProcessor, null, {
      abort: {
        value: function abort() {
          this.xhr.abort();
        },
        writable: true,
        configurable: true
      },
      process: {
        value: function process(client, message) {
          var _this = this;
          return new Promise(function (resolve, reject) {
            var xhr = _this.xhr = new _this.XHRType(),
                transformers = _this.transformers,
                i,
                ii;

            buildFullUri(message);
            xhr.open(message.method, message.fullUri, true);

            for (i = 0, ii = transformers.length; i < ii; ++i) {
              transformers[i](client, _this, message, xhr);
            }

            xhr.onload = function (e) {
              var response = new HttpResponseMessage(message, xhr, message.responseType, message.reviver);
              if (response.isSuccess) {
                resolve(response);
              } else {
                reject(response);
              }
            };

            xhr.ontimeout = function (e) {
              reject(new HttpResponseMessage(message, {
                response: e,
                status: xhr.status,
                statusText: xhr.statusText
              }, "timeout"));
            };

            xhr.onerror = function (e) {
              reject(new HttpResponseMessage(message, {
                response: e,
                status: xhr.status,
                statusText: xhr.statusText
              }, "error"));
            };

            xhr.onabort = function (e) {
              reject(new HttpResponseMessage(message, {
                response: e,
                status: xhr.status,
                statusText: xhr.statusText
              }, "abort"));
            };

            xhr.send(message.content);
          });
        },
        writable: true,
        configurable: true
      }
    });

    return RequestMessageProcessor;
  })();
  exports.__esModule = true;
});