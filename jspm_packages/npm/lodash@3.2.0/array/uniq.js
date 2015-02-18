/* */ 
var baseCallback = require("../internal/baseCallback"),
    baseUniq = require("../internal/baseUniq"),
    isIterateeCall = require("../internal/isIterateeCall"),
    sortedUniq = require("../internal/sortedUniq");
function uniq(array, isSorted, iteratee, thisArg) {
  var length = array ? array.length : 0;
  if (!length) {
    return [];
  }
  if (typeof isSorted != 'boolean' && isSorted != null) {
    thisArg = iteratee;
    iteratee = isIterateeCall(array, isSorted, thisArg) ? null : isSorted;
    isSorted = false;
  }
  iteratee = iteratee == null ? iteratee : baseCallback(iteratee, thisArg, 3);
  return (isSorted) ? sortedUniq(array, iteratee) : baseUniq(array, iteratee);
}
module.exports = uniq;
