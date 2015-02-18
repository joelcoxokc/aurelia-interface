/* */ 
var baseForOwnRight = require("./baseForOwnRight"),
    isLength = require("./isLength"),
    toObject = require("./toObject");
function baseEachRight(collection, iteratee) {
  var length = collection ? collection.length : 0;
  if (!isLength(length)) {
    return baseForOwnRight(collection, iteratee);
  }
  var iterable = toObject(collection);
  while (length--) {
    if (iteratee(iterable[length], length, iterable) === false) {
      break;
    }
  }
  return collection;
}
module.exports = baseEachRight;
