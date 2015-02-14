/* */ 
var isNative = require("./lang/isNative");
var reThis = /\bthis\b/;
var objectProto = Object.prototype;
var document = (document = global.window) && document.document;
var propertyIsEnumerable = objectProto.propertyIsEnumerable;
var support = {};
(function(x) {
  support.funcDecomp = !isNative(global.WinRTError) && reThis.test(function() {
    return this;
  });
  support.funcNames = typeof Function.name == 'string';
  try {
    support.dom = document.createDocumentFragment().nodeType === 11;
  } catch (e) {
    support.dom = false;
  }
  try {
    support.nonEnumArgs = !propertyIsEnumerable.call(arguments, 1);
  } catch (e) {
    support.nonEnumArgs = true;
  }
}(0, 0));
module.exports = support;
