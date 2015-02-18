/* */ 
var baseToString = require("../internal/baseToString"),
    createPad = require("../internal/createPad");
function padLeft(string, length, chars) {
  string = baseToString(string);
  return string && (createPad(string, length, chars) + string);
}
module.exports = padLeft;
