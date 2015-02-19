/* */ 
var isError = require("../lang/isError");
function attempt(func) {
  try {
    return func();
  } catch (e) {
    return isError(e) ? e : Error(e);
  }
}
module.exports = attempt;
