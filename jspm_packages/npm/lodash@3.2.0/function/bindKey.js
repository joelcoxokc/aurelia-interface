/* */ 
var baseSlice = require("../internal/baseSlice"),
    createWrapper = require("../internal/createWrapper"),
    replaceHolders = require("../internal/replaceHolders");
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    PARTIAL_FLAG = 32;
function bindKey(object, key) {
  var bitmask = BIND_FLAG | BIND_KEY_FLAG;
  if (arguments.length > 2) {
    var partials = baseSlice(arguments, 2),
        holders = replaceHolders(partials, bindKey.placeholder);
    bitmask |= PARTIAL_FLAG;
  }
  return createWrapper(key, bitmask, object, partials, holders);
}
bindKey.placeholder = {};
module.exports = bindKey;
