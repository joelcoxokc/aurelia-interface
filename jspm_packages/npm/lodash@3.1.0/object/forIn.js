/* */ 
var baseFor = require("../internal/baseFor"),
    bindCallback = require("../internal/bindCallback"),
    keysIn = require("./keysIn");
function forIn(object, iteratee, thisArg) {
  if (typeof iteratee != 'function' || typeof thisArg != 'undefined') {
    iteratee = bindCallback(iteratee, thisArg, 3);
  }
  return baseFor(object, iteratee, keysIn);
}
module.exports = forIn;
