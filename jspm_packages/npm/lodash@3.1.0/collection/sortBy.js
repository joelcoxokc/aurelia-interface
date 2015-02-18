/* */ 
var baseCallback = require("../internal/baseCallback"),
    baseEach = require("../internal/baseEach"),
    baseSortBy = require("../internal/baseSortBy"),
    compareAscending = require("../internal/compareAscending"),
    isIterateeCall = require("../internal/isIterateeCall"),
    isLength = require("../internal/isLength");
function sortBy(collection, iteratee, thisArg) {
  var index = -1,
      length = collection ? collection.length : 0,
      result = isLength(length) ? Array(length) : [];
  if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
    iteratee = null;
  }
  iteratee = baseCallback(iteratee, thisArg, 3);
  baseEach(collection, function(value, key, collection) {
    result[++index] = {
      'criteria': iteratee(value, key, collection),
      'index': index,
      'value': value
    };
  });
  return baseSortBy(result, compareAscending);
}
module.exports = sortBy;
