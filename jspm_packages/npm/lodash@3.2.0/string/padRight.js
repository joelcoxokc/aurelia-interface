/* */ 
var baseToString = require("../internal/baseToString"),
    createPad = require("../internal/createPad");
function padRight(string, length, chars) {
  string = baseToString(string);
  return string && (string + createPad(string, length, chars));
}
module.exports = padRight;
