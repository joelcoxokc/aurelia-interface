/* */ 
"format register";
define(["exports","./headers","./request-message-processor","./transformers"], function (exports, _headers, _requestMessageProcessor, _transformers) {
  "use strict";

  exports.createHttpRequestMessageProcessor = createHttpRequestMessageProcessor;
  var Headers = _headers.Headers;
  var RequestMessageProcessor = _requestMessageProcessor.RequestMessageProcessor;
  var timeoutTransformer = _transformers.timeoutTransformer;
  var credentialsTransformer = _transformers.credentialsTransformer;
  var progressTransformer = _transformers.progressTransformer;
  var responseTypeTransformer = _transformers.responseTypeTransformer;
  var headerTransformer = _transformers.headerTransformer;
  var contentTransformer = _transformers.contentTransformer;
  var HttpRequestMessage = exports.HttpRequestMessage = function HttpRequestMessage(method, uri, content, headers) {
    this.method = method;
    this.uri = uri;
    this.content = content;
    this.headers = headers || new Headers();
    this.responseType = "json";
  };

  function createHttpRequestMessageProcessor() {
    return new RequestMessageProcessor(XMLHttpRequest, [timeoutTransformer, credentialsTransformer, progressTransformer, responseTypeTransformer, headerTransformer, contentTransformer]);
  }
  exports.__esModule = true;
});