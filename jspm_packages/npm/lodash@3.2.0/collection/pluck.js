/* */ 
var baseProperty = require("../internal/baseProperty"),
    map = require("./map");
function pluck(collection, key) {
  return map(collection, baseProperty(key));
}
module.exports = pluck;
