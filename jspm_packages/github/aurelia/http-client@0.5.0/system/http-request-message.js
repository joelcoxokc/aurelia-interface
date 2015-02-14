/* */ 
System.register(["./headers", "./request-message-processor", "./transformers"], function (_export) {
  "use strict";

  var Headers, RequestMessageProcessor, timeoutTransformer, credentialsTransformer, progressTransformer, responseTypeTransformer, headerTransformer, contentTransformer, HttpRequestMessage;
  _export("createHttpRequestMessageProcessor", createHttpRequestMessageProcessor);

  function createHttpRequestMessageProcessor() {
    return new RequestMessageProcessor(XMLHttpRequest, [timeoutTransformer, credentialsTransformer, progressTransformer, responseTypeTransformer, headerTransformer, contentTransformer]);
  }
  return {
    setters: [function (_headers) {
      Headers = _headers.Headers;
    }, function (_requestMessageProcessor) {
      RequestMessageProcessor = _requestMessageProcessor.RequestMessageProcessor;
    }, function (_transformers) {
      timeoutTransformer = _transformers.timeoutTransformer;
      credentialsTransformer = _transformers.credentialsTransformer;
      progressTransformer = _transformers.progressTransformer;
      responseTypeTransformer = _transformers.responseTypeTransformer;
      headerTransformer = _transformers.headerTransformer;
      contentTransformer = _transformers.contentTransformer;
    }],
    execute: function () {
      HttpRequestMessage = _export("HttpRequestMessage", function HttpRequestMessage(method, uri, content, headers) {
        this.method = method;
        this.uri = uri;
        this.content = content;
        this.headers = headers || new Headers();
        this.responseType = "json";
      });
    }
  };
});