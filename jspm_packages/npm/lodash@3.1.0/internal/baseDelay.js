/* */ 
var baseSlice = require("./baseSlice"),
    isFunction = require("../lang/isFunction");
var FUNC_ERROR_TEXT = 'Expected a function';
function baseDelay(func, wait, args, fromIndex) {
  if (!isFunction(func)) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return setTimeout(function() {
    func.apply(undefined, baseSlice(args, fromIndex));
  }, wait);
}
module.exports = baseDelay;
