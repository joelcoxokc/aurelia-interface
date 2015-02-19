/* */ 
var baseToString = require("../internal/baseToString"),
    createPad = require("../internal/createPad");
var ceil = Math.ceil,
    floor = Math.floor;
var nativeIsFinite = global.isFinite;
function pad(string, length, chars) {
  string = baseToString(string);
  length = +length;
  var strLength = string.length;
  if (strLength >= length || !nativeIsFinite(length)) {
    return string;
  }
  var mid = (length - strLength) / 2,
      leftLength = floor(mid),
      rightLength = ceil(mid);
  chars = createPad('', rightLength, chars);
  return chars.slice(0, leftLength) + string + chars;
}
module.exports = pad;
