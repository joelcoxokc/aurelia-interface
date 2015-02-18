/* */ 
var baseMatches = require("./baseMatches"),
    baseMatchesProperty = require("./baseMatchesProperty"),
    baseProperty = require("./baseProperty"),
    bindCallback = require("./bindCallback"),
    identity = require("../utility/identity"),
    isBindable = require("./isBindable");
function baseCallback(func, thisArg, argCount) {
  var type = typeof func;
  if (type == 'function') {
    return (typeof thisArg != 'undefined' && isBindable(func)) ? bindCallback(func, thisArg, argCount) : func;
  }
  if (func == null) {
    return identity;
  }
  if (type == 'object') {
    return baseMatches(func);
  }
  return typeof thisArg == 'undefined' ? baseProperty(func + '') : baseMatchesProperty(func + '', thisArg);
}
module.exports = baseCallback;
