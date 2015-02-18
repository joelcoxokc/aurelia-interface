/* */ 
var baseFlatten = require("../internal/baseFlatten"),
    baseUniq = require("../internal/baseUniq");
function union() {
  return baseUniq(baseFlatten(arguments, false, true));
}
module.exports = union;
