/* */ 
var isArguments = require("../lang/isArguments"),
    isArray = require("../lang/isArray"),
    isLength = require("./isLength"),
    isObjectLike = require("./isObjectLike");
function baseFlatten(array, isDeep, isStrict, fromIndex) {
  var index = (fromIndex || 0) - 1,
      length = array.length,
      resIndex = -1,
      result = [];
  while (++index < length) {
    var value = array[index];
    if (isObjectLike(value) && isLength(value.length) && (isArray(value) || isArguments(value))) {
      if (isDeep) {
        value = baseFlatten(value, isDeep, isStrict);
      }
      var valIndex = -1,
          valLength = value.length;
      result.length += valLength;
      while (++valIndex < valLength) {
        result[++resIndex] = value[valIndex];
      }
    } else if (!isStrict) {
      result[++resIndex] = value;
    }
  }
  return result;
}
module.exports = baseFlatten;
