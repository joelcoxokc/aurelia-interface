/* */ 
(function(process) {
  var baseSlice = require("../internal/baseSlice"),
      isIterateeCall = require("../internal/isIterateeCall");
  var ceil = Math.ceil;
  var nativeMax = Math.max;
  function chunk(array, size, guard) {
    if (guard ? isIterateeCall(array, size, guard) : size == null) {
      size = 1;
    } else {
      size = nativeMax(+size || 1, 1);
    }
    var index = 0,
        length = array ? array.length : 0,
        resIndex = -1,
        result = Array(ceil(length / size));
    while (index < length) {
      result[++resIndex] = baseSlice(array, index, (index += size));
    }
    return result;
  }
  module.exports = chunk;
})(require("process"));
