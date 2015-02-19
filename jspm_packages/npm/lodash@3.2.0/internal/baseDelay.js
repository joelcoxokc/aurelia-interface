/* */ 
var baseSlice = require("./baseSlice");
var FUNC_ERROR_TEXT = 'Expected a function';
function baseDelay(func, wait, args, fromIndex) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return setTimeout(function() {
    func.apply(undefined, baseSlice(args, fromIndex));
  }, wait);
}
module.exports = baseDelay;
