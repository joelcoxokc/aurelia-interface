/* */ 
var baseCopy = require("../internal/baseCopy"),
    baseCreate = require("../internal/baseCreate"),
    isIterateeCall = require("../internal/isIterateeCall"),
    keys = require("./keys");
function create(prototype, properties, guard) {
  var result = baseCreate(prototype);
  if (guard && isIterateeCall(prototype, properties, guard)) {
    properties = null;
  }
  return properties ? baseCopy(properties, result, keys(properties)) : result;
}
module.exports = create;
