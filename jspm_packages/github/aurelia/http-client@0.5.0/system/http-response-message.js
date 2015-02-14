/* */ 
System.register(["./headers"], function (_export) {
  "use strict";

  var Headers, _prototypeProperties, HttpResponseMessage;
  function parseResponseHeaders(headerStr) {
    var headers = {};
    if (!headerStr) {
      return headers;
    }

    var headerPairs = headerStr.split("\r\n");
    for (var i = 0; i < headerPairs.length; i++) {
      var headerPair = headerPairs[i];
      var index = headerPair.indexOf(": ");
      if (index > 0) {
        var key = headerPair.substring(0, index);
        var val = headerPair.substring(index + 2);
        headers[key] = val;
      }
    }

    return headers;
  }

  return {
    setters: [function (_headers) {
      Headers = _headers.Headers;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      HttpResponseMessage = _export("HttpResponseMessage", (function () {
        function HttpResponseMessage(requestMessage, xhr, responseType, reviver) {
          this.requestMessage = requestMessage;
          this.statusCode = xhr.status;
          this.response = xhr.response;
          this.isSuccess = xhr.status >= 200 && xhr.status < 400;
          this.statusText = xhr.statusText;
          this.responseType = responseType;
          this.reviver = reviver;

          if (xhr.getAllResponseHeaders) {
            this.headers = new Headers(parseResponseHeaders(xhr.getAllResponseHeaders()));
          } else {
            this.headers = new Headers();
          }
        }

        _prototypeProperties(HttpResponseMessage, null, {
          content: {
            get: function () {
              if (this._content !== undefined) {
                return this._content;
              }

              if (this.response === undefined || this.response === null) {
                return this._content = this.response;
              }

              if (this.responseType === "json") {
                return this._content = JSON.parse(this.response, this.reviver);
              }

              if (this.reviver) {
                return this._content = this.reviver(this.response);
              }

              return this._content = this.response;
            },
            configurable: true
          }
        });

        return HttpResponseMessage;
      })());
    }
  };
});