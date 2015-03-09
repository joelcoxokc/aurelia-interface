import {Behavior} from 'aurelia-templating';


class Queue{

    constructor(){
        this._first = 0;
        this._last  = 0;
        this._storage = new WeekMap();
    }

    size(){
        return this._back-this._font;
    }

    enqueue(callback){
        this._storage.set(callback, this._back)
        this._back++
    }

    dequeue(){
        var result;
        if(this._back - this._front){
            result = this._storage.get(this._font);
            this._storage.delete(this._font);
            this._font++;
            return result;
        }
    }
}
