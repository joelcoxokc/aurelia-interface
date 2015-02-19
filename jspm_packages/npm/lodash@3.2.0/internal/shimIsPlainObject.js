/* */ 
var baseForIn = require("./baseForIn"),
    isObjectLike = require("./isObjectLike");
var objectTag = '[object Object]';
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var objToString = objectProto.toString;
function shimIsPlainObject(value) {
  var Ctor;
  if (!(isObjectLike(value) && objToString.call(value) == objectTag) || (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
    return false;
  }
  var result;
  baseForIn(value, function(subValue, key) {
    result = key;
  });
  return typeof result == 'undefined' || hasOwnProperty.call(value, result);
}
module.exports = shimIsPlainObject;
