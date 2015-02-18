/* */ 
var keys = require("./keys");
function pairs(object) {
  var index = -1,
      props = keys(object),
      length = props.length,
      result = Array(length);
  while (++index < length) {
    var key = props[index];
    result[index] = [key, object[key]];
  }
  return result;
}
module.exports = pairs;
