/* */ 
var baseAt = require("../internal/baseAt"),
    baseFlatten = require("../internal/baseFlatten"),
    isLength = require("../internal/isLength"),
    toIterable = require("../internal/toIterable");
function at(collection) {
  var length = collection ? collection.length : 0;
  if (isLength(length)) {
    collection = toIterable(collection);
  }
  return baseAt(collection, baseFlatten(arguments, false, false, 1));
}
module.exports = at;
