/* */ 
var baseIndexOf = require("../internal/baseIndexOf"),
    binaryIndex = require("../internal/binaryIndex");
var nativeMax = Math.max;
function indexOf(array, value, fromIndex) {
  var length = array ? array.length : 0;
  if (!length) {
    return -1;
  }
  if (typeof fromIndex == 'number') {
    fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
  } else if (fromIndex) {
    var index = binaryIndex(array, value),
        other = array[index];
    return (value === value ? value === other : other !== other) ? index : -1;
  }
  return baseIndexOf(array, value, fromIndex);
}
module.exports = indexOf;
