/* */ 
var escapeRegExp = require("../string/escapeRegExp"),
    isObjectLike = require("../internal/isObjectLike");
var funcTag = '[object Function]';
var reHostCtor = /^\[object .+?Constructor\]$/;
var objectProto = Object.prototype;
var fnToString = Function.prototype.toString;
var objToString = objectProto.toString;
var reNative = RegExp('^' + escapeRegExp(objToString).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (objToString.call(value) == funcTag) {
    return reNative.test(fnToString.call(value));
  }
  return (isObjectLike(value) && reHostCtor.test(value)) || false;
}
module.exports = isNative;
