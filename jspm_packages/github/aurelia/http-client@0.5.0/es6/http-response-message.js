/* */ 
"format register";
import {Headers} from './headers';

/**
 * XmlHttpRequest's getAllResponseHeaders() method returns a string of response
 * headers according to the format described here:
 * http://www.w3.org/TR/XMLHttpRequest/#the-getallresponseheaders-method
 * This method parses that string into a user-friendly key/value pair object.
 */
function parseResponseHeaders(headerStr) {
  var headers = {};
  if (!headerStr) {
    return headers;
  }

  var headerPairs = headerStr.split('\u000d\u000a');
  for (var i = 0; i < headerPairs.length; i++) {
    var headerPair = headerPairs[i];
    // Can't use split() here because it does the wrong thing
    // if the header value has the string ": " in it.
    var index = headerPair.indexOf('\u003a\u0020');
    if (index > 0) {
      var key = headerPair.substring(0, index);
      var val = headerPair.substring(index + 2);
      headers[key] = val;
    }
  }

  return headers;
}

export class HttpResponseMessage {
  constructor(requestMessage, xhr, responseType, reviver){
    this.requestMessage = requestMessage;
    this.statusCode = xhr.status;
    this.response = xhr.response;
    this.isSuccess = xhr.status >= 200 && xhr.status < 400;
    this.statusText = xhr.statusText;
    this.responseType = responseType;
    this.reviver = reviver;

    if(xhr.getAllResponseHeaders){
      this.headers = new Headers(parseResponseHeaders(xhr.getAllResponseHeaders()));
    }else {
      this.headers = new Headers();
    }
  }

  get content(){
    if(this._content !== undefined){
      return this._content;
    }

    if(this.response === undefined || this.response === null){
      return this._content = this.response;
    }

    if(this.responseType === 'json'){
      return this._content = JSON.parse(this.response, this.reviver);
    }

    if(this.reviver){
      return this._content = this.reviver(this.response);
    }

    return this._content = this.response;
  }
}
