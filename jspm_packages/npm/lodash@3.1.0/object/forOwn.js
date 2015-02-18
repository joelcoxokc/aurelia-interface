/* */ 
var baseForOwn = require("../internal/baseForOwn"),
    bindCallback = require("../internal/bindCallback");
function forOwn(object, iteratee, thisArg) {
  if (typeof iteratee != 'function' || typeof thisArg != 'undefined') {
    iteratee = bindCallback(iteratee, thisArg, 3);
  }
  return baseForOwn(object, iteratee);
}
module.exports = forOwn;
