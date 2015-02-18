/* */ 
var baseFlatten = require("../internal/baseFlatten"),
    createWrapper = require("../internal/createWrapper");
var REARG_FLAG = 128;
function rearg(func) {
  var indexes = baseFlatten(arguments, false, false, 1);
  return createWrapper(func, REARG_FLAG, null, null, null, indexes);
}
module.exports = rearg;
