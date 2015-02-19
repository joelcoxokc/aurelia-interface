/* */ 
var baseFlatten = require("../internal/baseFlatten"),
    basePullAt = require("../internal/basePullAt");
function pullAt(array) {
  return basePullAt(array || [], baseFlatten(arguments, false, false, 1));
}
module.exports = pullAt;
