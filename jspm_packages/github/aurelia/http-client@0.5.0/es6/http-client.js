/* */ 
"format register";
import {Headers} from './headers';
import {RequestBuilder} from './request-builder';
import {HttpRequestMessage,createHttpRequestMessageProcessor} from './http-request-message';
import {JSONPRequestMessage,createJSONPRequestMessageProcessor} from './jsonp-request-message';

function trackRequestStart(client, processor){
  client.pendingRequests.push(processor);
  client.isRequesting = true;
}

function trackRequestEnd(client, processor){
  var index = client.pendingRequests.indexOf(processor);

  client.pendingRequests.splice(index, 1);
  client.isRequesting = client.pendingRequests.length > 0;

  if(!client.isRequesting && client.onRequestsComplete){
    client.onRequestsComplete();
  }
}

export class HttpClient {
  constructor(){
    this.requestTransformers = [];
    this.requestProcessorFactories = new Map();
    this.requestProcessorFactories.set(HttpRequestMessage, createHttpRequestMessageProcessor);
    this.requestProcessorFactories.set(JSONPRequestMessage, createJSONPRequestMessageProcessor);
    this.pendingRequests = [];
    this.isRequesting = false;
  }

  get request(){
    return new RequestBuilder(this);
  }

  configure(fn){
    var builder = new RequestBuilder(this);
    fn(builder);
    this.requestTransformers = builder.transformers;
    return this;
  }

  send(message, transformers){
    var createProcessor = this.requestProcessorFactories.get(message.constructor),
        processor, promise, i, ii;

    if(!createProcessor){
        throw new Error(`No request message processor factory for ${message.constructor}.`);
    }

    processor = createProcessor();
    trackRequestStart(this, processor);

    transformers = transformers || this.requestTransformers;

    for(i = 0, ii = transformers.length; i < ii; ++i){
      transformers[i](this, processor, message);
    }

    promise = processor.process(this, message);

    promise.abort = promise.cancel = function() {
      processor.abort();
    };

    return promise.then(response => {
      trackRequestEnd(this, processor);
      return response;
    }).catch(response => {
      trackRequestEnd(this, processor);
      throw response;
    });
  }

  delete(uri){
    return this.request.delete(uri);
  }

  get(uri){
    return this.request.get(uri);
  }

  head(uri){
    return this.request.head(uri);
  }

  jsonp(uri, callbackParameterName='jsoncallback'){
    return this.request.jsonp(uri, callbackParameterName);
  }

  options(uri){
    return this.request.options(uri);
  }

  put(uri, content){
    return this.request.put(uri, content);
  }

  patch(uri, content){
    return this.request.patch(uri, content);
  }

  post(uri, content){
    return this.request.post(uri, content);
  }
}
