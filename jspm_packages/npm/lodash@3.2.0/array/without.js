/* */ 
var baseDifference = require("../internal/baseDifference"),
    baseSlice = require("../internal/baseSlice");
function without(array) {
  return baseDifference(array, baseSlice(arguments, 1));
}
module.exports = without;
