/* */ 
var keys = require("../object/keys");
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function equalObjects(object, other, equalFunc, customizer, isWhere, stackA, stackB) {
  var objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;
  if (objLength != othLength && !isWhere) {
    return false;
  }
  var hasCtor,
      index = -1;
  while (++index < objLength) {
    var key = objProps[index],
        result = hasOwnProperty.call(other, key);
    if (result) {
      var objValue = object[key],
          othValue = other[key];
      result = undefined;
      if (customizer) {
        result = isWhere ? customizer(othValue, objValue, key) : customizer(objValue, othValue, key);
      }
      if (typeof result == 'undefined') {
        result = (objValue && objValue === othValue) || equalFunc(objValue, othValue, customizer, isWhere, stackA, stackB);
      }
    }
    if (!result) {
      return false;
    }
    hasCtor || (hasCtor = key == 'constructor');
  }
  if (!hasCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;
    if (objCtor != othCtor && ('constructor' in object && 'constructor' in other) && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      return false;
    }
  }
  return true;
}
module.exports = equalObjects;
