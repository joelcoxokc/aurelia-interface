/* */ 
var baseClone = require("../internal/baseClone"),
    bindCallback = require("../internal/bindCallback"),
    isIterateeCall = require("../internal/isIterateeCall");
function clone(value, isDeep, customizer, thisArg) {
  if (typeof isDeep != 'boolean' && isDeep != null) {
    thisArg = customizer;
    customizer = isIterateeCall(value, isDeep, thisArg) ? null : isDeep;
    isDeep = false;
  }
  customizer = typeof customizer == 'function' && bindCallback(customizer, thisArg, 1);
  return baseClone(value, isDeep, customizer);
}
module.exports = clone;
