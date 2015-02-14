/* */ 
System.register(["./headers", "./request-message-processor", "./transformers"], function (_export) {
  "use strict";

  var Headers, RequestMessageProcessor, timeoutTransformer, callbackParameterNameTransformer, _prototypeProperties, JSONPRequestMessage, JSONPXHR;
  _export("createJSONPRequestMessageProcessor", createJSONPRequestMessageProcessor);

  function createJSONPRequestMessageProcessor() {
    return new RequestMessageProcessor(JSONPXHR, [timeoutTransformer, callbackParameterNameTransformer]);
  }
  return {
    setters: [function (_headers) {
      Headers = _headers.Headers;
    }, function (_requestMessageProcessor) {
      RequestMessageProcessor = _requestMessageProcessor.RequestMessageProcessor;
    }, function (_transformers) {
      timeoutTransformer = _transformers.timeoutTransformer;
      callbackParameterNameTransformer = _transformers.callbackParameterNameTransformer;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      JSONPRequestMessage = _export("JSONPRequestMessage", function JSONPRequestMessage(uri, callbackParameterName) {
        this.method = "JSONP";
        this.uri = uri;
        this.content = undefined;
        this.headers = new Headers();
        this.responseType = "jsonp";
        this.callbackParameterName = callbackParameterName;
      });
      JSONPXHR = (function () {
        function JSONPXHR() {}

        _prototypeProperties(JSONPXHR, null, {
          open: {
            value: function open(method, uri) {
              this.method = method;
              this.uri = uri;
              this.callbackName = "jsonp_callback_" + Math.round(100000 * Math.random());
            },
            writable: true,
            configurable: true
          },
          send: {
            value: function send() {
              var _this = this;
              var uri = this.uri + (this.uri.indexOf("?") >= 0 ? "&" : "?") + this.callbackParameterName + "=" + this.callbackName;

              window[this.callbackName] = function (data) {
                delete window[_this.callbackName];
                document.body.removeChild(script);

                if (_this.status === undefined) {
                  _this.status = 200;
                  _this.statusText = "OK";
                  _this.response = data;
                  _this.onload(_this);
                }
              };

              var script = document.createElement("script");
              script.src = uri;
              document.body.appendChild(script);

              if (this.timeout !== undefined) {
                setTimeout(function () {
                  if (_this.status === undefined) {
                    _this.status = 0;
                    _this.ontimeout(new Error("timeout"));
                  }
                }, this.timeout);
              }
            },
            writable: true,
            configurable: true
          },
          abort: {
            value: function abort() {
              if (this.status === undefined) {
                this.status = 0;
                this.onabort(new Error("abort"));
              }
            },
            writable: true,
            configurable: true
          },
          setRequestHeader: {
            value: function setRequestHeader() {},
            writable: true,
            configurable: true
          }
        });

        return JSONPXHR;
      })();
    }
  };
});