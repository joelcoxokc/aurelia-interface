/* */ 
var baseIsMatch = require("../internal/baseIsMatch"),
    bindCallback = require("../internal/bindCallback"),
    isStrictComparable = require("../internal/isStrictComparable"),
    keys = require("../object/keys");
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function isMatch(object, source, customizer, thisArg) {
  var props = keys(source),
      length = props.length;
  customizer = typeof customizer == 'function' && bindCallback(customizer, thisArg, 3);
  if (!customizer && length == 1) {
    var key = props[0],
        value = source[key];
    if (isStrictComparable(value)) {
      return object != null && value === object[key] && hasOwnProperty.call(object, key);
    }
  }
  var values = Array(length),
      strictCompareFlags = Array(length);
  while (length--) {
    value = values[length] = source[props[length]];
    strictCompareFlags[length] = isStrictComparable(value);
  }
  return baseIsMatch(object, props, values, strictCompareFlags, customizer);
}
module.exports = isMatch;
