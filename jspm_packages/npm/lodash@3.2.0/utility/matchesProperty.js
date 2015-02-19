/* */ 
var baseClone = require("../internal/baseClone"),
    baseMatchesProperty = require("../internal/baseMatchesProperty");
function matchesProperty(key, value) {
  return baseMatchesProperty(key + '', baseClone(value, true));
}
module.exports = matchesProperty;
