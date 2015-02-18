/* */ 
var baseIndexOf = require("../internal/baseIndexOf");
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function pull() {
  var array = arguments[0];
  if (!(array && array.length)) {
    return array;
  }
  var index = 0,
      indexOf = baseIndexOf,
      length = arguments.length;
  while (++index < length) {
    var fromIndex = 0,
        value = arguments[index];
    while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
      splice.call(array, fromIndex, 1);
    }
  }
  return array;
}
module.exports = pull;
