/* */ 
var arrayEvery = require("../internal/arrayEvery"),
    isFunction = require("../lang/isFunction");
var FUNC_ERROR_TEXT = 'Expected a function';
function flow() {
  var funcs = arguments,
      length = funcs.length;
  if (!length) {
    return function() {};
  }
  if (!arrayEvery(funcs, isFunction)) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return function() {
    var index = 0,
        result = funcs[index].apply(this, arguments);
    while (++index < length) {
      result = funcs[index].call(this, result);
    }
    return result;
  };
}
module.exports = flow;
