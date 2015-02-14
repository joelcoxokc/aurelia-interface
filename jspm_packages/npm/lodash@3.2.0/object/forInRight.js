/* */ 
var baseForRight = require("../internal/baseForRight"),
    bindCallback = require("../internal/bindCallback"),
    keysIn = require("./keysIn");
function forInRight(object, iteratee, thisArg) {
  iteratee = bindCallback(iteratee, thisArg, 3);
  return baseForRight(object, iteratee, keysIn);
}
module.exports = forInRight;
