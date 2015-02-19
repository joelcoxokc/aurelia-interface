/* */ 
var toObject = require("./toObject");
function baseForRight(object, iteratee, keysFunc) {
  var iterable = toObject(object),
      props = keysFunc(object),
      length = props.length;
  while (length--) {
    var key = props[length];
    if (iteratee(iterable[key], key, iterable) === false) {
      break;
    }
  }
  return object;
}
module.exports = baseForRight;
