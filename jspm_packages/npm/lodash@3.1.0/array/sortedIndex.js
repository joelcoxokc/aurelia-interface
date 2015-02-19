/* */ 
var baseCallback = require("../internal/baseCallback"),
    binaryIndex = require("../internal/binaryIndex"),
    binaryIndexBy = require("../internal/binaryIndexBy");
function sortedIndex(array, value, iteratee, thisArg) {
  return iteratee == null ? binaryIndex(array, value) : binaryIndexBy(array, value, baseCallback(iteratee, thisArg, 1));
}
module.exports = sortedIndex;
