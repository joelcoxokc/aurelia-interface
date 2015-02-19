/* */ 
var baseForRight = require("../internal/baseForRight"),
    bindCallback = require("../internal/bindCallback"),
    keys = require("./keys");
function forOwnRight(object, iteratee, thisArg) {
  iteratee = bindCallback(iteratee, thisArg, 3);
  return baseForRight(object, iteratee, keys);
}
module.exports = forOwnRight;
