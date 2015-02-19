/* */ 
var createWrapper = require("../internal/createWrapper"),
    isIterateeCall = require("../internal/isIterateeCall");
var CURRY_FLAG = 8;
function curry(func, arity, guard) {
  if (guard && isIterateeCall(func, arity, guard)) {
    arity = null;
  }
  var result = createWrapper(func, CURRY_FLAG, null, null, null, null, null, arity);
  result.placeholder = curry.placeholder;
  return result;
}
curry.placeholder = {};
module.exports = curry;
