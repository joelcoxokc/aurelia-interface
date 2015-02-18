/* */ 
var isObjectLike = require("../internal/isObjectLike");
var regexpTag = '[object RegExp]';
var objectProto = Object.prototype;
var objToString = objectProto.toString;
function isRegExp(value) {
  return (isObjectLike(value) && objToString.call(value) == regexpTag) || false;
}
module.exports = isRegExp;
