/* */ 
var baseCopy = require("./baseCopy"),
    keys = require("../object/keys");
function baseAssign(object, source, customizer) {
  var props = keys(source);
  if (!customizer) {
    return baseCopy(source, object, props);
  }
  var index = -1,
      length = props.length;
  while (++index < length) {
    var key = props[index],
        value = object[key],
        result = customizer(value, source[key], key, object, source);
    if ((result === result ? result !== value : value === value) || (typeof value == 'undefined' && !(key in object))) {
      object[key] = result;
    }
  }
  return object;
}
module.exports = baseAssign;
