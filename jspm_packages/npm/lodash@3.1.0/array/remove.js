/* */ 
var baseCallback = require("../internal/baseCallback");
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function remove(array, predicate, thisArg) {
  var index = -1,
      length = array ? array.length : 0,
      result = [];
  predicate = baseCallback(predicate, thisArg, 3);
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result.push(value);
      splice.call(array, index--, 1);
      length--;
    }
  }
  return result;
}
module.exports = remove;
