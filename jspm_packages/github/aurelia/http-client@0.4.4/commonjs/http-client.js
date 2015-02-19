/* */ 
"format register";
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var join = require("aurelia-path").join;
var HttpRequestMessage = require("./http-request-message").HttpRequestMessage;
var HttpResponseMessage = require("./http-response-message").HttpResponseMessage;
var JSONPRequestMessage = require("./jsonp-request-message").JSONPRequestMessage;
var Headers = require("./headers").Headers;
var HttpClient = exports.HttpClient = (function () {
  function HttpClient() {
    var baseUrl = arguments[0] === undefined ? null : arguments[0];
    var defaultRequestHeaders = arguments[1] === undefined ? new Headers() : arguments[1];
    this.baseUrl = baseUrl;
    this.defaultRequestHeaders = defaultRequestHeaders;
  }

  _prototypeProperties(HttpClient, null, {
    send: {
      value: function send(requestMessage, progressCallback) {
        return requestMessage.send(this, progressCallback);
      },
      writable: true,
      configurable: true
    },
    get: {
      value: function get(uri) {
        return this.send(new HttpRequestMessage("GET", join(this.baseUrl, uri)).withHeaders(this.defaultRequestHeaders));
      },
      writable: true,
      configurable: true
    },
    put: {
      value: function put(uri, content, replacer) {
        return this.send(new HttpRequestMessage("PUT", join(this.baseUrl, uri), content, replacer || this.replacer).withHeaders(this.defaultRequestHeaders));
      },
      writable: true,
      configurable: true
    },
    patch: {
      value: function patch(uri, content, replacer) {
        return this.send(new HttpRequestMessage("PATCH", join(this.baseUrl, uri), content, replacer || this.replacer).withHeaders(this.defaultRequestHeaders));
      },
      writable: true,
      configurable: true
    },
    post: {
      value: function post(uri, content, replacer) {
        return this.send(new HttpRequestMessage("POST", join(this.baseUrl, uri), content, replacer || this.replacer).withHeaders(this.defaultRequestHeaders));
      },
      writable: true,
      configurable: true
    },
    "delete": {
      value: function _delete(uri) {
        return this.send(new HttpRequestMessage("DELETE", join(this.baseUrl, uri)).withHeaders(this.defaultRequestHeaders));
      },
      writable: true,
      configurable: true
    },
    jsonp: {
      value: function jsonp(uri) {
        var callbackParameterName = arguments[1] === undefined ? "jsoncallback" : arguments[1];
        return this.send(new JSONPRequestMessage(join(this.baseUrl, uri), callbackParameterName));
      },
      writable: true,
      configurable: true
    }
  });

  return HttpClient;
})();
exports.__esModule = true;