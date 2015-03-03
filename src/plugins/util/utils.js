export function splitClass(str){
    return str.split(/\s*,\s*/);
}

export function zip(){
    var zipped = [];
    var maxLength = 0;
    var index     = 0;
    var itemIndex = 0;
    for (var i = 0; i < arguments.length; i++) {
        if(arguments[i].length > maxLength){maxLength = arguments[i].length}
    };

    while(zipped.length < arguments.length){
        zipped[index] = zipped[index] || [];
        for (var i = 0; i < arguments.length; i++) {
            if(arguments[i][0]){
                var item = arguments[i].shift();
                zipped[index].push(item)
            } else {
                delete zipped[index]
            }
        };
        index++
    }
    return zipped
}