/* */ 
var baseDelay = require("../internal/baseDelay");
function delay(func, wait) {
  return baseDelay(func, wait, arguments, 2);
}
module.exports = delay;
