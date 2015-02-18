/* */ 
var baseToString = require("../internal/baseToString"),
    deburrLetter = require("../internal/deburrLetter");
var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;
function deburr(string) {
  string = baseToString(string);
  return string && string.replace(reLatin1, deburrLetter);
}
module.exports = deburr;
