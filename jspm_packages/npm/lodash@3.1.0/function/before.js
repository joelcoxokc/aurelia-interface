/* */ 
var isFunction = require("../lang/isFunction");
var FUNC_ERROR_TEXT = 'Expected a function';
function before(n, func) {
  var result;
  if (!isFunction(func)) {
    if (isFunction(n)) {
      var temp = n;
      n = func;
      func = temp;
    } else {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
  }
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    } else {
      func = null;
    }
    return result;
  };
}
module.exports = before;
