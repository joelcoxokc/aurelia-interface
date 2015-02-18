/* */ 
var arrayEach = require("../internal/arrayEach"),
    baseEach = require("../internal/baseEach"),
    bindCallback = require("../internal/bindCallback"),
    isArray = require("../lang/isArray");
function forEach(collection, iteratee, thisArg) {
  return (typeof iteratee == 'function' && typeof thisArg == 'undefined' && isArray(collection)) ? arrayEach(collection, iteratee) : baseEach(collection, bindCallback(iteratee, thisArg, 3));
}
module.exports = forEach;
