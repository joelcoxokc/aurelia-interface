/* */ 
var isNative = require("../lang/isNative");
var nativeNow = isNative(nativeNow = Date.now) && nativeNow;
var now = nativeNow || function() {
  return new Date().getTime();
};
module.exports = now;
