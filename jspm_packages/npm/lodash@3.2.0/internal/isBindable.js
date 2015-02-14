/* */ 
var baseSetData = require("./baseSetData"),
    isNative = require("../lang/isNative"),
    support = require("../support");
var reFuncName = /^\s*function[ \n\r\t]+\w/;
var reThis = /\bthis\b/;
var fnToString = Function.prototype.toString;
function isBindable(func) {
  var result = !(support.funcNames ? func.name : support.funcDecomp);
  if (!result) {
    var source = fnToString.call(func);
    if (!support.funcNames) {
      result = !reFuncName.test(source);
    }
    if (!result) {
      result = reThis.test(source) || isNative(func);
      baseSetData(func, result);
    }
  }
  return result;
}
module.exports = isBindable;
