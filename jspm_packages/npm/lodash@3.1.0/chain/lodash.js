/* */ 
var LodashWrapper = require("../internal/LodashWrapper"),
    arrayCopy = require("../internal/arrayCopy"),
    isArray = require("../lang/isArray"),
    isObjectLike = require("../internal/isObjectLike");
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function lodash(value) {
  if (isObjectLike(value) && !isArray(value)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return new LodashWrapper(value.__wrapped__, value.__chain__, arrayCopy(value.__actions__));
    }
  }
  return new LodashWrapper(value);
}
LodashWrapper.prototype = lodash.prototype;
module.exports = lodash;
