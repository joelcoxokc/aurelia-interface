/* */ 
var baseProperty = require("../internal/baseProperty");
function property(key) {
  return baseProperty(key + '');
}
module.exports = property;
