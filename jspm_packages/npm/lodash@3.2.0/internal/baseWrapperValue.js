/* */ 
var LazyWrapper = require("./LazyWrapper");
var arrayProto = Array.prototype;
var push = arrayProto.push;
function baseWrapperValue(value, actions) {
  var result = value;
  if (result instanceof LazyWrapper) {
    result = result.value();
  }
  var index = -1,
      length = actions.length;
  while (++index < length) {
    var args = [result],
        action = actions[index];
    push.apply(args, action.args);
    result = action.func.apply(action.thisArg, args);
  }
  return result;
}
module.exports = baseWrapperValue;
