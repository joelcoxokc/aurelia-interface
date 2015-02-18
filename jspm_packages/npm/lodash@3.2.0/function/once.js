/* */ 
var before = require("./before");
function once(func) {
  return before(func, 2);
}
module.exports = once;
