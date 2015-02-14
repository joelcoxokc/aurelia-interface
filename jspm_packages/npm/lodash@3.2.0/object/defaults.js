/* */ 
var arrayCopy = require("../internal/arrayCopy"),
    assign = require("./assign"),
    assignDefaults = require("../internal/assignDefaults");
function defaults(object) {
  if (object == null) {
    return object;
  }
  var args = arrayCopy(arguments);
  args.push(assignDefaults);
  return assign.apply(undefined, args);
}
module.exports = defaults;
