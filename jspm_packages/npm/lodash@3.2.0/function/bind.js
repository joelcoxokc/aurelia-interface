/* */ 
var baseSlice = require("../internal/baseSlice"),
    createWrapper = require("../internal/createWrapper"),
    replaceHolders = require("../internal/replaceHolders");
var BIND_FLAG = 1,
    PARTIAL_FLAG = 32;
function bind(func, thisArg) {
  var bitmask = BIND_FLAG;
  if (arguments.length > 2) {
    var partials = baseSlice(arguments, 2),
        holders = replaceHolders(partials, bind.placeholder);
    bitmask |= PARTIAL_FLAG;
  }
  return createWrapper(func, bitmask, thisArg, partials, holders);
}
bind.placeholder = {};
module.exports = bind;
