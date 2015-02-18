/* */ 
var baseClone = require("../internal/baseClone"),
    bindCallback = require("../internal/bindCallback");
function cloneDeep(value, customizer, thisArg) {
  customizer = typeof customizer == 'function' && bindCallback(customizer, thisArg, 1);
  return baseClone(value, true, customizer);
}
module.exports = cloneDeep;
