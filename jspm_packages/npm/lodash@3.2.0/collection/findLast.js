/* */ 
var baseCallback = require("../internal/baseCallback"),
    baseEachRight = require("../internal/baseEachRight"),
    baseFind = require("../internal/baseFind");
function findLast(collection, predicate, thisArg) {
  predicate = baseCallback(predicate, thisArg, 3);
  return baseFind(collection, predicate, baseEachRight);
}
module.exports = findLast;
