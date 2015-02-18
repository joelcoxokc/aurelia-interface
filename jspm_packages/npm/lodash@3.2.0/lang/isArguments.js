/* */ 
var isLength = require("../internal/isLength"),
    isObjectLike = require("../internal/isObjectLike");
var argsTag = '[object Arguments]';
var objectProto = Object.prototype;
var objToString = objectProto.toString;
function isArguments(value) {
  var length = isObjectLike(value) ? value.length : undefined;
  return (isLength(length) && objToString.call(value) == argsTag) || false;
}
module.exports = isArguments;
