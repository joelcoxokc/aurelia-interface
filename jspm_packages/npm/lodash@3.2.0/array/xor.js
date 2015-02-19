/* */ 
var baseDifference = require("../internal/baseDifference"),
    baseUniq = require("../internal/baseUniq"),
    isArguments = require("../lang/isArguments"),
    isArray = require("../lang/isArray");
function xor() {
  var index = -1,
      length = arguments.length;
  while (++index < length) {
    var array = arguments[index];
    if (isArray(array) || isArguments(array)) {
      var result = result ? baseDifference(result, array).concat(baseDifference(array, result)) : array;
    }
  }
  return result ? baseUniq(result) : [];
}
module.exports = xor;
