/* */ 
var baseInvoke = require("../internal/baseInvoke"),
    baseSlice = require("../internal/baseSlice");
function invoke(collection, methodName) {
  return baseInvoke(collection, methodName, baseSlice(arguments, 2));
}
module.exports = invoke;
