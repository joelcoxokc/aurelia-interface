/* */ 
var baseIsEqual = require("./baseIsEqual"),
    isStrictComparable = require("./isStrictComparable");
function baseMatchesProperty(key, value) {
  if (isStrictComparable(value)) {
    return function(object) {
      return object != null && object[key] === value;
    };
  }
  return function(object) {
    return object != null && baseIsEqual(value, object[key], null, true);
  };
}
module.exports = baseMatchesProperty;
