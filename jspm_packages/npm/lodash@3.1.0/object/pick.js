/* */ 
var baseFlatten = require("../internal/baseFlatten"),
    bindCallback = require("../internal/bindCallback"),
    pickByArray = require("../internal/pickByArray"),
    pickByCallback = require("../internal/pickByCallback");
function pick(object, predicate, thisArg) {
  if (object == null) {
    return {};
  }
  return typeof predicate == 'function' ? pickByCallback(object, bindCallback(predicate, thisArg, 3)) : pickByArray(object, baseFlatten(arguments, false, false, 1));
}
module.exports = pick;
