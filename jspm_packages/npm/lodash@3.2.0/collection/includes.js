/* */ 
var baseIndexOf = require("../internal/baseIndexOf"),
    isArray = require("../lang/isArray"),
    isLength = require("../internal/isLength"),
    isString = require("../lang/isString"),
    values = require("../object/values");
var nativeMax = Math.max;
function includes(collection, target, fromIndex) {
  var length = collection ? collection.length : 0;
  if (!isLength(length)) {
    collection = values(collection);
    length = collection.length;
  }
  if (!length) {
    return false;
  }
  if (typeof fromIndex == 'number') {
    fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
  } else {
    fromIndex = 0;
  }
  return (typeof collection == 'string' || !isArray(collection) && isString(collection)) ? (fromIndex < length && collection.indexOf(target, fromIndex) > -1) : (baseIndexOf(collection, target, fromIndex) > -1);
}
module.exports = includes;
