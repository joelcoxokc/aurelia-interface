/* */ 
var baseCallback = require("../internal/baseCallback"),
    baseForOwn = require("../internal/baseForOwn");
function mapValues(object, iteratee, thisArg) {
  var result = {};
  iteratee = baseCallback(iteratee, thisArg, 3);
  baseForOwn(object, function(value, key, object) {
    result[key] = iteratee(value, key, object);
  });
  return result;
}
module.exports = mapValues;
