var define = function(context){
    var inst = {};
    inst.bind = function(setterContext){
        inst.context = setterContext;
    }
    inst.property = function(propertyName){
        return Object.defineProperty(context, propertyName,{
            get: function(){
                return inst.context.getter();
            },
            set: function(value){
                return inst.context.setter();
            }
        });
    };
    return inst;
};

export class InterfaceObserver{

}
