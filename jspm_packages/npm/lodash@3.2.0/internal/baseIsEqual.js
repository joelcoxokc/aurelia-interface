/* */ 
var baseIsEqualDeep = require("./baseIsEqualDeep");
function baseIsEqual(value, other, customizer, isWhere, stackA, stackB) {
  if (value === other) {
    return value !== 0 || (1 / value == 1 / other);
  }
  var valType = typeof value,
      othType = typeof other;
  if ((valType != 'function' && valType != 'object' && othType != 'function' && othType != 'object') || value == null || other == null) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isWhere, stackA, stackB);
}
module.exports = baseIsEqual;
