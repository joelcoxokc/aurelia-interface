/* */ 
var isFunction = require("../lang/isFunction");
var FUNC_ERROR_TEXT = 'Expected a function';
function negate(predicate) {
  if (!isFunction(predicate)) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return function() {
    return !predicate.apply(this, arguments);
  };
}
module.exports = negate;
