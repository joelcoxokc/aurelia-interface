/* */ 
"format register";
define(["exports","./http-client","./http-request-message","./http-response-message","./jsonp-request-message","./headers","./request-builder"], function (exports, _httpClient, _httpRequestMessage, _httpResponseMessage, _jsonpRequestMessage, _headers, _requestBuilder) {
  "use strict";

  exports.HttpClient = _httpClient.HttpClient;
  exports.HttpRequestMessage = _httpRequestMessage.HttpRequestMessage;
  exports.HttpResponseMessage = _httpResponseMessage.HttpResponseMessage;
  exports.JSONPRequestMessage = _jsonpRequestMessage.JSONPRequestMessage;
  exports.Headers = _headers.Headers;
  exports.RequestBuilder = _requestBuilder.RequestBuilder;
  exports.__esModule = true;
});