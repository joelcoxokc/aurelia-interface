/* */ 
var baseRandom = require("../internal/baseRandom"),
    isIterateeCall = require("../internal/isIterateeCall"),
    shuffle = require("./shuffle"),
    toIterable = require("../internal/toIterable");
var nativeMin = Math.min;
function sample(collection, n, guard) {
  if (guard ? isIterateeCall(collection, n, guard) : n == null) {
    collection = toIterable(collection);
    var length = collection.length;
    return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
  }
  var result = shuffle(collection);
  result.length = nativeMin(n < 0 ? 0 : (+n || 0), result.length);
  return result;
}
module.exports = sample;
