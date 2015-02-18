/* */ 
var baseCallback = require("../internal/baseCallback"),
    baseEach = require("../internal/baseEach"),
    baseFind = require("../internal/baseFind"),
    findIndex = require("../array/findIndex"),
    isArray = require("../lang/isArray");
function find(collection, predicate, thisArg) {
  if (isArray(collection)) {
    var index = findIndex(collection, predicate, thisArg);
    return index > -1 ? collection[index] : undefined;
  }
  predicate = baseCallback(predicate, thisArg, 3);
  return baseFind(collection, predicate, baseEach);
}
module.exports = find;
