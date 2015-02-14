/* */ 
var baseIsEqual = require("../internal/baseIsEqual"),
    bindCallback = require("../internal/bindCallback"),
    isStrictComparable = require("../internal/isStrictComparable");
function isEqual(value, other, customizer, thisArg) {
  customizer = typeof customizer == 'function' && bindCallback(customizer, thisArg, 3);
  if (!customizer && isStrictComparable(value) && isStrictComparable(other)) {
    return value === other;
  }
  var result = customizer ? customizer(value, other) : undefined;
  return typeof result == 'undefined' ? baseIsEqual(value, other, customizer) : !!result;
}
module.exports = isEqual;
