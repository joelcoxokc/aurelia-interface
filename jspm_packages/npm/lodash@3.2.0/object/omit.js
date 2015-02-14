/* */ 
var arrayMap = require("../internal/arrayMap"),
    baseDifference = require("../internal/baseDifference"),
    baseFlatten = require("../internal/baseFlatten"),
    bindCallback = require("../internal/bindCallback"),
    keysIn = require("./keysIn"),
    pickByArray = require("../internal/pickByArray"),
    pickByCallback = require("../internal/pickByCallback");
function omit(object, predicate, thisArg) {
  if (object == null) {
    return {};
  }
  if (typeof predicate != 'function') {
    var props = arrayMap(baseFlatten(arguments, false, false, 1), String);
    return pickByArray(object, baseDifference(keysIn(object), props));
  }
  predicate = bindCallback(predicate, thisArg, 3);
  return pickByCallback(object, function(value, key, object) {
    return !predicate(value, key, object);
  });
}
module.exports = omit;
