/* */ 
var baseSlice = require("../internal/baseSlice"),
    createWrapper = require("../internal/createWrapper"),
    replaceHolders = require("../internal/replaceHolders");
var PARTIAL_RIGHT_FLAG = 64;
function partialRight(func) {
  var partials = baseSlice(arguments, 1),
      holders = replaceHolders(partials, partialRight.placeholder);
  return createWrapper(func, PARTIAL_RIGHT_FLAG, null, partials, holders);
}
partialRight.placeholder = {};
module.exports = partialRight;
