/* */ 
var baseCallback = require("../internal/baseCallback"),
    baseSlice = require("../internal/baseSlice");
function dropRightWhile(array, predicate, thisArg) {
  var length = array ? array.length : 0;
  if (!length) {
    return [];
  }
  predicate = baseCallback(predicate, thisArg, 3);
  while (length-- && predicate(array[length], length, array)) {}
  return baseSlice(array, 0, length + 1);
}
module.exports = dropRightWhile;
