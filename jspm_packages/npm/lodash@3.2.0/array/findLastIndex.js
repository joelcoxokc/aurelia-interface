/* */ 
var baseCallback = require("../internal/baseCallback");
function findLastIndex(array, predicate, thisArg) {
  var length = array ? array.length : 0;
  predicate = baseCallback(predicate, thisArg, 3);
  while (length--) {
    if (predicate(array[length], length, array)) {
      return length;
    }
  }
  return -1;
}
module.exports = findLastIndex;
