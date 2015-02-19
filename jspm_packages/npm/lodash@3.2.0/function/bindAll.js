/* */ 
var baseBindAll = require("../internal/baseBindAll"),
    baseFlatten = require("../internal/baseFlatten"),
    functions = require("../object/functions");
function bindAll(object) {
  return baseBindAll(object, arguments.length > 1 ? baseFlatten(arguments, false, false, 1) : functions(object));
}
module.exports = bindAll;
