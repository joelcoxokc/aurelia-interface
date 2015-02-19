/* */ 
var baseAt = require("./baseAt"),
    baseCompareAscending = require("./baseCompareAscending"),
    isIndex = require("./isIndex");
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function basePullAt(array, indexes) {
  var length = indexes.length,
      result = baseAt(array, indexes);
  indexes.sort(baseCompareAscending);
  while (length--) {
    var index = parseFloat(indexes[length]);
    if (index != previous && isIndex(index)) {
      var previous = index;
      splice.call(array, index, 1);
    }
  }
  return result;
}
module.exports = basePullAt;
