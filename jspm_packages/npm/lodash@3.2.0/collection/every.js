/* */ 
var arrayEvery = require("../internal/arrayEvery"),
    baseCallback = require("../internal/baseCallback"),
    baseEvery = require("../internal/baseEvery"),
    isArray = require("../lang/isArray");
function every(collection, predicate, thisArg) {
  var func = isArray(collection) ? arrayEvery : baseEvery;
  if (typeof predicate != 'function' || typeof thisArg != 'undefined') {
    predicate = baseCallback(predicate, thisArg, 3);
  }
  return func(collection, predicate);
}
module.exports = every;
