/* */ 
var createWrapper = require("./createWrapper");
var BIND_FLAG = 1;
function baseBindAll(object, methodNames) {
  var index = -1,
      length = methodNames.length;
  while (++index < length) {
    var key = methodNames[index];
    object[key] = createWrapper(object[key], BIND_FLAG, object);
  }
  return object;
}
module.exports = baseBindAll;
