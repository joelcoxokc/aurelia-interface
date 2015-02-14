/* */ 
var isNative = require("./isNative");
var nativeIsFinite = global.isFinite,
    nativeNumIsFinite = isNative(nativeNumIsFinite = Number.isFinite) && nativeNumIsFinite;
var isFinite = nativeNumIsFinite || function(value) {
  return typeof value == 'number' && nativeIsFinite(value);
};
module.exports = isFinite;
