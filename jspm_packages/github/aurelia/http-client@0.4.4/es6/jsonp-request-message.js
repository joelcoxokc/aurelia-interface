/* */ 
"format register";
import {HttpResponseMessage} from './http-response-message';

export class JSONPRequestMessage {
  constructor(uri, callbackParameterName){
    this.uri = uri;
    this.callbackParameterName = callbackParameterName;
  }

  send(client){
    return new Promise((resolve, reject) => {
      var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
      var uri = this.uri + (this.uri.indexOf('?') >= 0 ? '&' : '?') + this.callbackParameterName + '=' + callbackName;

      window[callbackName] = (data) => {
        delete window[callbackName];
        document.body.removeChild(script);
        resolve(new HttpResponseMessage(this, {
          response:data,
          status:200,
          statusText:'OK'
        }, 'jsonp'));
      };

      var script = document.createElement('script');
      script.src = uri;
      document.body.appendChild(script);
    });
  }
}