/* */ 
var SetCache = require("./SetCache"),
    constant = require("../utility/constant"),
    isNative = require("../lang/isNative");
var Set = isNative(Set = global.Set) && Set;
var nativeCreate = isNative(nativeCreate = Object.create) && nativeCreate;
var createCache = !(nativeCreate && Set) ? constant(null) : function(values) {
  return new SetCache(values);
};
module.exports = createCache;
