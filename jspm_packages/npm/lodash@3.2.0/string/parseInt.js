/* */ 
var isIterateeCall = require("../internal/isIterateeCall"),
    trim = require("./trim");
var reHexPrefix = /^0[xX]/;
var whitespace = (' \t\x0b\f\xa0\ufeff' + '\n\r\u2028\u2029' + '\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000');
var nativeParseInt = global.parseInt;
function parseInt(string, radix, guard) {
  if (guard && isIterateeCall(string, radix, guard)) {
    radix = 0;
  }
  return nativeParseInt(string, radix);
}
if (nativeParseInt(whitespace + '08') != 8) {
  parseInt = function(string, radix, guard) {
    if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
      radix = 0;
    } else if (radix) {
      radix = +radix;
    }
    string = trim(string);
    return nativeParseInt(string, radix || (reHexPrefix.test(string) ? 16 : 10));
  };
}
module.exports = parseInt;
