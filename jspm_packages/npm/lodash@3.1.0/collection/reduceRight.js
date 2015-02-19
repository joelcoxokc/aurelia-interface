/* */ 
var arrayReduceRight = require("../internal/arrayReduceRight"),
    baseCallback = require("../internal/baseCallback"),
    baseEachRight = require("../internal/baseEachRight"),
    baseReduce = require("../internal/baseReduce"),
    isArray = require("../lang/isArray");
function reduceRight(collection, iteratee, accumulator, thisArg) {
  var func = isArray(collection) ? arrayReduceRight : baseReduce;
  return func(collection, baseCallback(iteratee, thisArg, 4), accumulator, arguments.length < 3, baseEachRight);
}
module.exports = reduceRight;
