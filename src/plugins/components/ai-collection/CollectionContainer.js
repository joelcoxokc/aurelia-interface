let defaults = {
    elements:   { collection : 'collectionHeading'
                , summarie   : 'collectionItem'
                , heading    : 'collectSummary'
                , header     : 'collectHeader'
                , action     : 'collectAction'
                , title      : 'AiCollection'
                , body       : 'collectTitle'
                , item       : 'collectBody'
                , icon       : 'collectIcon'
                },
    counters  : { collection:0
                , summarie  :0
                , heading   :0
                , header    :0
                , action    :0
                , title     :0
                , body      :0
                , item      :0
                , icon      :0
                }
}
function generateId(counter){
    return (defaults.elements[counter] + (defaults.counters[counter]++))
}

class Observable{

    set value(value){
        this.setter &&( this.setter(value) )
    }
    get value(){
        return this.getter ? this.getter(this.value) : this.value;
    }

    constructor(value, setter, getter){
        this.value = value;
        setter &&( this.setter = setter );
        getter &&( this.getter = getter );
    }

    set(value) {
        var oldValue = this.value;

        this.oldValue = oldValue;
        this.value = value;
    }
    get() {
        return this.value;
    }
}

export class CollectionModel{


    constructor(context, properties){
        this.context       = context;
        this.properties    = properties;
        this.context.interfaceId = generateId('collection');
        this.interface     = {};
        this.interface['expanded'] = new Observable()
        for(let index in this.properties){

        }

    }
}

export class CollectionContainer{


    constructor(){
        this.container = {};
    }

    _newId(counter){

    }

    register(context, properties){

        let target = new CollectionModel(context, properties);

        for (let index in properties){
            console.log(target)
            Object.defineProperty(target.context.__proto__, index, {
                configurable: true,
                enumerable: true,
                get: function(){
                    return target.interface[index].get();
                },
                set: function(value){
                    taget.interface[index].set(value);
                }
            })
        }


        return this.collections[context.interfaceId];
    }
}
