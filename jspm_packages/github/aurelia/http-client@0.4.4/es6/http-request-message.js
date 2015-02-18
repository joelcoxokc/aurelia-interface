/* */ 
"format register";
import {Headers} from './headers';
import {HttpResponseMessage} from './http-response-message';

export class HttpRequestMessage {
  constructor(method, uri, content, replacer){
    this.method = method;
    this.uri = uri;
    this.content = content;
    this.headers = new Headers();
    this.responseType = 'json'; //text, arraybuffer, blob, document
    this.replacer = replacer;
  }

  withHeaders(headers){
    this.headers = headers;
    return this;
  }

  configureXHR(xhr){
    xhr.open(this.method, this.uri, true);
    xhr.responseType = this.responseType;
    this.headers.configureXHR(xhr);
  }

  formatContent(){
    var content = this.content;

    if(window.FormData && content instanceof FormData){
      return content;
    }

    if(window.Blob && content instanceof Blob){
      return content;
    }

    if(window.ArrayBufferView && content instanceof ArrayBufferView){
      return content;
    }

    if(content instanceof Document){
      return content;
    }

    if(typeof content === 'string'){
      return content;
    }

    return JSON.stringify(content, this.replacer);
  }

  send(client, progressCallback){
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest(),
          responseType = this.responseType;

      if(responseType === 'json'){
        this.responseType = 'text'; //IE does not support json
      }

      if(client.timeout !== undefined){
        xhr.timeout = client.timeout;
      }

      this.configureXHR(xhr);

      xhr.onload = (e) => {
        resolve(new HttpResponseMessage(this, xhr, responseType, client.reviver));
      };

      xhr.ontimeout = (e) => {
        reject(new HttpResponseMessage(this, {
          response:e,
          status:xhr.status,
          statusText:xhr.statusText
        }, 'timeout'));
      };

      xhr.onerror = (e) => {
        reject(new HttpResponseMessage(this, {
          response:e,
          status:xhr.status,
          statusText:xhr.statusText
        }, 'error'));
      };

      if(progressCallback){
        xhr.upload.onprogress = progressCallback;
      }

      xhr.send(this.formatContent());
    });
  }
}
