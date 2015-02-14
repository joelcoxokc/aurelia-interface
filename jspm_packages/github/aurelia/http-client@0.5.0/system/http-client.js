/* */ 
System.register(["./headers", "./request-builder", "./http-request-message", "./jsonp-request-message"], function (_export) {
  "use strict";

  var Headers, RequestBuilder, HttpRequestMessage, createHttpRequestMessageProcessor, JSONPRequestMessage, createJSONPRequestMessageProcessor, _prototypeProperties, HttpClient;


  function trackRequestStart(client, processor) {
    client.pendingRequests.push(processor);
    client.isRequesting = true;
  }

  function trackRequestEnd(client, processor) {
    var index = client.pendingRequests.indexOf(processor);

    client.pendingRequests.splice(index, 1);
    client.isRequesting = client.pendingRequests.length > 0;

    if (!client.isRequesting && client.onRequestsComplete) {
      client.onRequestsComplete();
    }
  }

  return {
    setters: [function (_headers) {
      Headers = _headers.Headers;
    }, function (_requestBuilder) {
      RequestBuilder = _requestBuilder.RequestBuilder;
    }, function (_httpRequestMessage) {
      HttpRequestMessage = _httpRequestMessage.HttpRequestMessage;
      createHttpRequestMessageProcessor = _httpRequestMessage.createHttpRequestMessageProcessor;
    }, function (_jsonpRequestMessage) {
      JSONPRequestMessage = _jsonpRequestMessage.JSONPRequestMessage;
      createJSONPRequestMessageProcessor = _jsonpRequestMessage.createJSONPRequestMessageProcessor;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      HttpClient = _export("HttpClient", (function () {
        function HttpClient() {
          this.requestTransformers = [];
          this.requestProcessorFactories = new Map();
          this.requestProcessorFactories.set(HttpRequestMessage, createHttpRequestMessageProcessor);
          this.requestProcessorFactories.set(JSONPRequestMessage, createJSONPRequestMessageProcessor);
          this.pendingRequests = [];
          this.isRequesting = false;
        }

        _prototypeProperties(HttpClient, null, {
          request: {
            get: function () {
              return new RequestBuilder(this);
            },
            configurable: true
          },
          configure: {
            value: function configure(fn) {
              var builder = new RequestBuilder(this);
              fn(builder);
              this.requestTransformers = builder.transformers;
              return this;
            },
            writable: true,
            configurable: true
          },
          send: {
            value: function send(message, transformers) {
              var _this = this;
              var createProcessor = this.requestProcessorFactories.get(message.constructor),
                  processor,
                  promise,
                  i,
                  ii;

              if (!createProcessor) {
                throw new Error("No request message processor factory for " + message.constructor + ".");
              }

              processor = createProcessor();
              trackRequestStart(this, processor);

              transformers = transformers || this.requestTransformers;

              for (i = 0, ii = transformers.length; i < ii; ++i) {
                transformers[i](this, processor, message);
              }

              promise = processor.process(this, message);

              promise.abort = promise.cancel = function () {
                processor.abort();
              };

              return promise.then(function (response) {
                trackRequestEnd(_this, processor);
                return response;
              })["catch"](function (response) {
                trackRequestEnd(_this, processor);
                throw response;
              });
            },
            writable: true,
            configurable: true
          },
          "delete": {
            value: function _delete(uri) {
              return this.request["delete"](uri);
            },
            writable: true,
            configurable: true
          },
          get: {
            value: function get(uri) {
              return this.request.get(uri);
            },
            writable: true,
            configurable: true
          },
          head: {
            value: function head(uri) {
              return this.request.head(uri);
            },
            writable: true,
            configurable: true
          },
          jsonp: {
            value: function jsonp(uri) {
              var callbackParameterName = arguments[1] === undefined ? "jsoncallback" : arguments[1];
              return this.request.jsonp(uri, callbackParameterName);
            },
            writable: true,
            configurable: true
          },
          options: {
            value: function options(uri) {
              return this.request.options(uri);
            },
            writable: true,
            configurable: true
          },
          put: {
            value: function put(uri, content) {
              return this.request.put(uri, content);
            },
            writable: true,
            configurable: true
          },
          patch: {
            value: function patch(uri, content) {
              return this.request.patch(uri, content);
            },
            writable: true,
            configurable: true
          },
          post: {
            value: function post(uri, content) {
              return this.request.post(uri, content);
            },
            writable: true,
            configurable: true
          }
        });

        return HttpClient;
      })());
    }
  };
});