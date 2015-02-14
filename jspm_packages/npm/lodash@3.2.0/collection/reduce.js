/* */ 
var arrayReduce = require("../internal/arrayReduce"),
    baseCallback = require("../internal/baseCallback"),
    baseEach = require("../internal/baseEach"),
    baseReduce = require("../internal/baseReduce"),
    isArray = require("../lang/isArray");
function reduce(collection, iteratee, accumulator, thisArg) {
  var func = isArray(collection) ? arrayReduce : baseReduce;
  return func(collection, baseCallback(iteratee, thisArg, 4), accumulator, arguments.length < 3, baseEach);
}
module.exports = reduce;
