/* */ 
var baseEach = require("./baseEach");
var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
    POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
function extremumBy(collection, iteratee, isMin) {
  var exValue = isMin ? POSITIVE_INFINITY : NEGATIVE_INFINITY,
      computed = exValue,
      result = computed;
  baseEach(collection, function(value, index, collection) {
    var current = iteratee(value, index, collection);
    if ((isMin ? current < computed : current > computed) || (current === exValue && current === result)) {
      computed = current;
      result = value;
    }
  });
  return result;
}
module.exports = extremumBy;
