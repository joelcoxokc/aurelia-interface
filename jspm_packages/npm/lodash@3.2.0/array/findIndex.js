/* */ 
var baseCallback = require("../internal/baseCallback");
function findIndex(array, predicate, thisArg) {
  var index = -1,
      length = array ? array.length : 0;
  predicate = baseCallback(predicate, thisArg, 3);
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
module.exports = findIndex;
