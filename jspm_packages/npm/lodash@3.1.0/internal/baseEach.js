/* */ 
var baseForOwn = require("./baseForOwn"),
    isLength = require("./isLength"),
    toObject = require("./toObject");
function baseEach(collection, iteratee) {
  var length = collection ? collection.length : 0;
  if (!isLength(length)) {
    return baseForOwn(collection, iteratee);
  }
  var index = -1,
      iterable = toObject(collection);
  while (++index < length) {
    if (iteratee(iterable[index], index, iterable) === false) {
      break;
    }
  }
  return collection;
}
module.exports = baseEach;
