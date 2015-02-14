/* */ 
"format register";
define(["exports","aurelia-path","./http-request-message","./jsonp-request-message"], function (exports, _aureliaPath, _httpRequestMessage, _jsonpRequestMessage) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

  var join = _aureliaPath.join;
  var HttpRequestMessage = _httpRequestMessage.HttpRequestMessage;
  var JSONPRequestMessage = _jsonpRequestMessage.JSONPRequestMessage;
  var RequestBuilder = exports.RequestBuilder = (function () {
    function RequestBuilder(client) {
      this.client = client;
      this.transformers = client.requestTransformers.slice(0);
    }

    _prototypeProperties(RequestBuilder, {
      addHelper: {
        value: function addHelper(name, fn) {
          RequestBuilder.prototype[name] = function () {
            this.transformers.push(fn.apply(this, arguments));
            return this;
          };
        },
        writable: true,
        configurable: true
      }
    }, {
      "delete": {
        value: function _delete(uri) {
          var message = new HttpRequestMessage("DELETE", uri);
          return this.client.send(message, this.transformers);
        },
        writable: true,
        configurable: true
      },
      get: {
        value: function get(uri) {
          var message = new HttpRequestMessage("GET", uri);
          return this.client.send(message, this.transformers);
        },
        writable: true,
        configurable: true
      },
      head: {
        value: function head(uri) {
          var message = new HttpRequestMessage("HEAD", uri);
          return this.client.send(message, this.transformers);
        },
        writable: true,
        configurable: true
      },
      jsonp: {
        value: function jsonp(uri) {
          var callbackParameterName = arguments[1] === undefined ? "jsoncallback" : arguments[1];
          var message = new JSONPRequestMessage(uri, callbackParameterName);
          return this.client.send(message, this.transformers);
        },
        writable: true,
        configurable: true
      },
      options: {
        value: function options(uri) {
          var message = new HttpRequestMessage("OPTIONS", uri);
          return this.client.send(message, this.transformers);
        },
        writable: true,
        configurable: true
      },
      put: {
        value: function put(uri, content) {
          var message = new HttpRequestMessage("PUT", uri, content);
          return this.client.send(message, this.transformers);
        },
        writable: true,
        configurable: true
      },
      patch: {
        value: function patch(uri, content) {
          var message = new HttpRequestMessage("PATCH", uri, content);
          return this.client.send(message, this.transformers);
        },
        writable: true,
        configurable: true
      },
      post: {
        value: function post(uri, content) {
          var message = new HttpRequestMessage("POST", uri, content);
          return this.client.send(message, this.transformers);
        },
        writable: true,
        configurable: true
      }
    });

    return RequestBuilder;
  })();


  RequestBuilder.addHelper("withBaseUrl", function (baseUrl) {
    return function (client, processor, message) {
      message.baseUrl = baseUrl;
    };
  });

  RequestBuilder.addHelper("withParams", function (params) {
    return function (client, processor, message) {
      message.params = params;
    };
  });

  RequestBuilder.addHelper("withResponseType", function (responseType) {
    return function (client, processor, message) {
      message.responseType = responseType;
    };
  });

  RequestBuilder.addHelper("withTimeout", function (timeout) {
    return function (client, processor, message) {
      message.timeout = timeout;
    };
  });

  RequestBuilder.addHelper("withHeader", function (key, value) {
    return function (client, processor, message) {
      message.headers.add(key, value);
    };
  });

  RequestBuilder.addHelper("withCredentials", function (value) {
    return function (client, processor, message) {
      message.withCredentials = value;
    };
  });

  RequestBuilder.addHelper("withReviver", function (reviver) {
    return function (client, processor, message) {
      message.reviver = reviver;
    };
  });

  RequestBuilder.addHelper("withReplacer", function (replacer) {
    return function (client, processor, message) {
      message.replacer = replacer;
    };
  });

  RequestBuilder.addHelper("withProgressCallback", function (progressCallback) {
    return function (client, processor, message) {
      message.progressCallback = progressCallback;
    };
  });

  RequestBuilder.addHelper("withCallbackParameterName", function (callbackParameterName) {
    return function (client, processor, message) {
      message.callbackParameterName = callbackParameterName;
    };
  });
  exports.__esModule = true;
});