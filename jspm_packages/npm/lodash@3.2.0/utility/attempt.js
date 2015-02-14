/* */ 
var baseSlice = require("../internal/baseSlice"),
    isError = require("../lang/isError");
function attempt(func) {
  try {
    return func.apply(undefined, baseSlice(arguments, 1));
  } catch (e) {
    return isError(e) ? e : new Error(e);
  }
}
module.exports = attempt;
