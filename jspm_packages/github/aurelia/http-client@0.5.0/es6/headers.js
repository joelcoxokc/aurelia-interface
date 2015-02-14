/* */ 
"format register";
export class Headers {
  constructor(headers={}){
    this.headers = headers;
  }

  add(key, value){
    this.headers[key] = value;
  }

  get(key){
    return this.headers[key];
  }

  clear(){
    this.headers = {};
  }

  configureXHR(xhr){
    var headers = this.headers, key;

    for(key in headers){
      xhr.setRequestHeader(key, headers[key]);
    }
  }
}
