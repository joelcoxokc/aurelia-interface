/* */ 
var isIndex = require("./isIndex"),
    isLength = require("./isLength"),
    isObject = require("../lang/isObject");
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number') {
    var length = object.length,
        prereq = isLength(length) && isIndex(index, length);
  } else {
    prereq = type == 'string' && index in object;
  }
  return prereq && object[index] === value;
}
module.exports = isIterateeCall;
