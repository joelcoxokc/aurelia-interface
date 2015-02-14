/* */ 
var baseDifference = require("../internal/baseDifference"),
    baseFlatten = require("../internal/baseFlatten"),
    isArguments = require("../lang/isArguments"),
    isArray = require("../lang/isArray");
function difference() {
  var index = -1,
      length = arguments.length;
  while (++index < length) {
    var value = arguments[index];
    if (isArray(value) || isArguments(value)) {
      break;
    }
  }
  return baseDifference(value, baseFlatten(arguments, false, true, ++index));
}
module.exports = difference;
