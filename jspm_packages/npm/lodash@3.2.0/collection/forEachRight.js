/* */ 
var arrayEachRight = require("../internal/arrayEachRight"),
    baseEachRight = require("../internal/baseEachRight"),
    bindCallback = require("../internal/bindCallback"),
    isArray = require("../lang/isArray");
function forEachRight(collection, iteratee, thisArg) {
  return (typeof iteratee == 'function' && typeof thisArg == 'undefined' && isArray(collection)) ? arrayEachRight(collection, iteratee) : baseEachRight(collection, bindCallback(iteratee, thisArg, 3));
}
module.exports = forEachRight;
