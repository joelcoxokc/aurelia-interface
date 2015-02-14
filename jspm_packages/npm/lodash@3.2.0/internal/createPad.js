/* */ 
var repeat = require("../string/repeat");
var ceil = Math.ceil;
var nativeIsFinite = global.isFinite;
function createPad(string, length, chars) {
  var strLength = string.length;
  length = +length;
  if (strLength >= length || !nativeIsFinite(length)) {
    return '';
  }
  var padLength = length - strLength;
  chars = chars == null ? ' ' : (chars + '');
  return repeat(chars, ceil(padLength / chars.length)).slice(0, padLength);
}
module.exports = createPad;
