/* */ 
var bindCallback = require("../internal/bindCallback");
var nativeIsFinite = global.isFinite,
    nativeMin = Math.min;
var MAX_ARRAY_LENGTH = Math.pow(2, 32) - 1;
function times(n, iteratee, thisArg) {
  n = +n;
  if (n < 1 || !nativeIsFinite(n)) {
    return [];
  }
  var index = -1,
      result = Array(nativeMin(n, MAX_ARRAY_LENGTH));
  iteratee = bindCallback(iteratee, thisArg, 1);
  while (++index < n) {
    if (index < MAX_ARRAY_LENGTH) {
      result[index] = iteratee(index);
    } else {
      iteratee(index);
    }
  }
  return result;
}
module.exports = times;
