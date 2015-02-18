/* */ 
var createWrapper = require("../internal/createWrapper"),
    isIterateeCall = require("../internal/isIterateeCall");
var CURRY_RIGHT_FLAG = 16;
function curryRight(func, arity, guard) {
  if (guard && isIterateeCall(func, arity, guard)) {
    arity = null;
  }
  var result = createWrapper(func, CURRY_RIGHT_FLAG, null, null, null, null, null, arity);
  result.placeholder = curryRight.placeholder;
  return result;
}
curryRight.placeholder = {};
module.exports = curryRight;
