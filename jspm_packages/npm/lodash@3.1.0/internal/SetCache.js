/* */ 
var cachePush = require("./cachePush"),
    isNative = require("../lang/isNative");
var Set = isNative(Set = global.Set) && Set;
var nativeCreate = isNative(nativeCreate = Object.create) && nativeCreate;
function SetCache(values) {
  var length = values ? values.length : 0;
  this.data = {
    'hash': nativeCreate(null),
    'set': new Set
  };
  while (length--) {
    this.push(values[length]);
  }
}
SetCache.prototype.push = cachePush;
module.exports = SetCache;
