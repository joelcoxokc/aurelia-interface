/* */ 
"format register";
import {join} from 'aurelia-path';
import {HttpRequestMessage} from './http-request-message';
import {JSONPRequestMessage} from './jsonp-request-message';

export class RequestBuilder {
	constructor (client) {
		this.client = client;
		this.transformers = client.requestTransformers.slice(0);
	}

	static addHelper(name, fn){
		RequestBuilder.prototype[name] = function(){
			this.transformers.push(fn.apply(this, arguments));
			return this;
		};
	}

	delete(uri){
		var message = new HttpRequestMessage('DELETE', uri);
		return this.client.send(message, this.transformers);
	}

	get(uri){
		var message = new HttpRequestMessage('GET', uri);
		return this.client.send(message, this.transformers);
	}

	head(uri){
		var message = new HttpRequestMessage('HEAD', uri);
		return this.client.send(message, this.transformers);
	}

	jsonp(uri, callbackParameterName='jsoncallback'){
		var message = new JSONPRequestMessage(uri, callbackParameterName);
		return this.client.send(message, this.transformers);
	}

	options(uri){
		var message = new HttpRequestMessage('OPTIONS', uri);
		return this.client.send(message, this.transformers);
	}

	put(uri, content){
		var message = new HttpRequestMessage('PUT', uri, content);
		return this.client.send(message, this.transformers);
	}

	patch(uri, content){
		var message = new HttpRequestMessage('PATCH', uri, content);
		return this.client.send(message, this.transformers);
	}

	post(uri, content){
		var message = new HttpRequestMessage('POST', uri, content);
		return this.client.send(message, this.transformers);
	}
}

RequestBuilder.addHelper('withBaseUrl', function(baseUrl){
	return function(client, processor, message){
		message.baseUrl = baseUrl;
	}
});

RequestBuilder.addHelper('withParams', function(params){
	return function(client, processor, message){
		message.params = params;
	}
});

RequestBuilder.addHelper('withResponseType', function(responseType){
	return function(client, processor, message){
		message.responseType = responseType;
	}
});

RequestBuilder.addHelper('withTimeout', function(timeout){
	return function(client, processor, message){
		message.timeout = timeout;
	}
});

RequestBuilder.addHelper('withHeader', function(key, value){
	return function(client, processor, message){
		message.headers.add(key, value);
	}
});

RequestBuilder.addHelper('withCredentials', function(value){
	return function(client, processor, message){
		message.withCredentials = value;
	}
});

RequestBuilder.addHelper('withReviver', function(reviver){
	return function(client, processor, message){
		message.reviver = reviver;
	}
});

RequestBuilder.addHelper('withReplacer', function(replacer){
	return function(client, processor, message){
		message.replacer = replacer;
	}
});

RequestBuilder.addHelper('withProgressCallback', function(progressCallback){
	return function(client, processor, message){
		message.progressCallback = progressCallback;
	}
});

RequestBuilder.addHelper('withCallbackParameterName', function(callbackParameterName){
	return function(client, processor, message){
		message.callbackParameterName = callbackParameterName;
	}
});
