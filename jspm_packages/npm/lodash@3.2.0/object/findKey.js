/* */ 
var baseCallback = require("../internal/baseCallback"),
    baseFind = require("../internal/baseFind"),
    baseForOwn = require("../internal/baseForOwn");
function findKey(object, predicate, thisArg) {
  predicate = baseCallback(predicate, thisArg, 3);
  return baseFind(object, predicate, baseForOwn, true);
}
module.exports = findKey;
