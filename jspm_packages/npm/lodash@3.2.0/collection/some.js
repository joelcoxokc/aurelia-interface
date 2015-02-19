/* */ 
var arraySome = require("../internal/arraySome"),
    baseCallback = require("../internal/baseCallback"),
    baseSome = require("../internal/baseSome"),
    isArray = require("../lang/isArray");
function some(collection, predicate, thisArg) {
  var func = isArray(collection) ? arraySome : baseSome;
  if (typeof predicate != 'function' || typeof thisArg != 'undefined') {
    predicate = baseCallback(predicate, thisArg, 3);
  }
  return func(collection, predicate);
}
module.exports = some;
