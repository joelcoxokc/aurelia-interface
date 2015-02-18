/* */ 
"format register";
define(["exports","./headers","./http-response-message"], function (exports, _headers, _httpResponseMessage) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

  var Headers = _headers.Headers;
  var HttpResponseMessage = _httpResponseMessage.HttpResponseMessage;
  var HttpRequestMessage = exports.HttpRequestMessage = (function () {
    function HttpRequestMessage(method, uri, content, replacer) {
      this.method = method;
      this.uri = uri;
      this.content = content;
      this.headers = new Headers();
      this.responseType = "json";
      this.replacer = replacer;
    }

    _prototypeProperties(HttpRequestMessage, null, {
      withHeaders: {
        value: function withHeaders(headers) {
          this.headers = headers;
          return this;
        },
        writable: true,
        configurable: true
      },
      configureXHR: {
        value: function configureXHR(xhr) {
          xhr.open(this.method, this.uri, true);
          xhr.responseType = this.responseType;
          this.headers.configureXHR(xhr);
        },
        writable: true,
        configurable: true
      },
      formatContent: {
        value: function formatContent() {
          var content = this.content;

          if (window.FormData && content instanceof FormData) {
            return content;
          }

          if (window.Blob && content instanceof Blob) {
            return content;
          }

          if (window.ArrayBufferView && content instanceof ArrayBufferView) {
            return content;
          }

          if (content instanceof Document) {
            return content;
          }

          if (typeof content === "string") {
            return content;
          }

          return JSON.stringify(content, this.replacer);
        },
        writable: true,
        configurable: true
      },
      send: {
        value: function send(client, progressCallback) {
          var _this = this;
          return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest(),
                responseType = _this.responseType;

            if (responseType === "json") {
              _this.responseType = "text";
            }

            if (client.timeout !== undefined) {
              xhr.timeout = client.timeout;
            }

            _this.configureXHR(xhr);

            xhr.onload = function (e) {
              resolve(new HttpResponseMessage(_this, xhr, responseType, client.reviver));
            };

            xhr.ontimeout = function (e) {
              reject(new HttpResponseMessage(_this, {
                response: e,
                status: xhr.status,
                statusText: xhr.statusText
              }, "timeout"));
            };

            xhr.onerror = function (e) {
              reject(new HttpResponseMessage(_this, {
                response: e,
                status: xhr.status,
                statusText: xhr.statusText
              }, "error"));
            };

            if (progressCallback) {
              xhr.upload.onprogress = progressCallback;
            }

            xhr.send(_this.formatContent());
          });
        },
        writable: true,
        configurable: true
      }
    });

    return HttpRequestMessage;
  })();
  exports.__esModule = true;
});