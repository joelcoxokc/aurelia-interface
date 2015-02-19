/* */ 
var createWrapper = require("../internal/createWrapper"),
    isIterateeCall = require("../internal/isIterateeCall");
var ARY_FLAG = 256;
var nativeMax = Math.max;
function ary(func, n, guard) {
  if (guard && isIterateeCall(func, n, guard)) {
    n = null;
  }
  n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
  return createWrapper(func, ARY_FLAG, null, null, null, null, n);
}
module.exports = ary;
