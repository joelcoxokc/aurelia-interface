/* */ 
var isLength = require("../internal/isLength"),
    isNative = require("./isNative"),
    isObjectLike = require("../internal/isObjectLike");
var arrayTag = '[object Array]';
var objectProto = Object.prototype;
var objToString = objectProto.toString;
var nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray;
var isArray = nativeIsArray || function(value) {
  return (isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag) || false;
};
module.exports = isArray;
