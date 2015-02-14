/* */ 
var baseIsMatch = require("./baseIsMatch"),
    isStrictComparable = require("./isStrictComparable"),
    keys = require("../object/keys");
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseMatches(source) {
  var props = keys(source),
      length = props.length;
  if (length == 1) {
    var key = props[0],
        value = source[key];
    if (isStrictComparable(value)) {
      return function(object) {
        return object != null && value === object[key] && hasOwnProperty.call(object, key);
      };
    }
  }
  var values = Array(length),
      strictCompareFlags = Array(length);
  while (length--) {
    value = source[props[length]];
    values[length] = value;
    strictCompareFlags[length] = isStrictComparable(value);
  }
  return function(object) {
    return baseIsMatch(object, props, values, strictCompareFlags);
  };
}
module.exports = baseMatches;
