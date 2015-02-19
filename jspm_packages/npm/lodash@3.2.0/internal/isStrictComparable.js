/* */ 
var isObject = require("../lang/isObject");
function isStrictComparable(value) {
  return value === value && (value === 0 ? ((1 / value) > 0) : !isObject(value));
}
module.exports = isStrictComparable;
