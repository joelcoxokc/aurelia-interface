/* */ 
var baseCallback = require("../internal/baseCallback"),
    baseFind = require("../internal/baseFind"),
    baseForOwnRight = require("../internal/baseForOwnRight");
function findLastKey(object, predicate, thisArg) {
  predicate = baseCallback(predicate, thisArg, 3);
  return baseFind(object, predicate, baseForOwnRight, true);
}
module.exports = findLastKey;
