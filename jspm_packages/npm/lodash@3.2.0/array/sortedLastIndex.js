/* */ 
var baseCallback = require("../internal/baseCallback"),
    binaryIndex = require("../internal/binaryIndex"),
    binaryIndexBy = require("../internal/binaryIndexBy");
function sortedLastIndex(array, value, iteratee, thisArg) {
  return iteratee == null ? binaryIndex(array, value, true) : binaryIndexBy(array, value, baseCallback(iteratee, thisArg, 1), true);
}
module.exports = sortedLastIndex;
