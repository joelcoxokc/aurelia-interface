/* */ 
var isNative = require("./isNative");
var funcTag = '[object Function]';
var objectProto = Object.prototype;
var objToString = objectProto.toString;
var Uint8Array = isNative(Uint8Array = global.Uint8Array) && Uint8Array;
function isFunction(value) {
  return typeof value == 'function' || false;
}
if (isFunction(/x/) || (Uint8Array && !isFunction(Uint8Array))) {
  isFunction = function(value) {
    return objToString.call(value) == funcTag;
  };
}
module.exports = isFunction;
