/* */ 
var arrayEvery = require("../internal/arrayEvery"),
    isFunction = require("../lang/isFunction");
var FUNC_ERROR_TEXT = 'Expected a function';
function flowRight() {
  var funcs = arguments,
      fromIndex = funcs.length - 1;
  if (fromIndex < 0) {
    return function() {};
  }
  if (!arrayEvery(funcs, isFunction)) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return function() {
    var index = fromIndex,
        result = funcs[index].apply(this, arguments);
    while (index--) {
      result = funcs[index].call(this, result);
    }
    return result;
  };
}
module.exports = flowRight;
