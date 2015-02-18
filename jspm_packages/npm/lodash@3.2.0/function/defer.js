/* */ 
var baseDelay = require("../internal/baseDelay");
function defer(func) {
  return baseDelay(func, 1, arguments, 1);
}
module.exports = defer;
