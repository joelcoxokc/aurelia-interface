/* */ 
var baseSlice = require("../internal/baseSlice"),
    createWrapper = require("../internal/createWrapper"),
    replaceHolders = require("../internal/replaceHolders");
var PARTIAL_FLAG = 32;
function partial(func) {
  var partials = baseSlice(arguments, 1),
      holders = replaceHolders(partials, partial.placeholder);
  return createWrapper(func, PARTIAL_FLAG, null, partials, holders);
}
partial.placeholder = {};
module.exports = partial;
