/* */ 
var arrayCopy = require("../internal/arrayCopy"),
    baseFunctions = require("../internal/baseFunctions"),
    isFunction = require("../lang/isFunction"),
    isObject = require("../lang/isObject"),
    keys = require("../object/keys");
var arrayProto = Array.prototype;
var push = arrayProto.push;
function mixin(object, source, options) {
  var methodNames = baseFunctions(source, keys(source));
  var chain = true,
      index = -1,
      isFunc = isFunction(object),
      length = methodNames.length;
  if (options === false) {
    chain = false;
  } else if (isObject(options) && 'chain' in options) {
    chain = options.chain;
  }
  while (++index < length) {
    var methodName = methodNames[index],
        func = source[methodName];
    object[methodName] = func;
    if (isFunc) {
      object.prototype[methodName] = (function(func) {
        return function() {
          var chainAll = this.__chain__;
          if (chain || chainAll) {
            var result = object(this.__wrapped__);
            (result.__actions__ = arrayCopy(this.__actions__)).push({
              'func': func,
              'args': arguments,
              'thisArg': object
            });
            result.__chain__ = chainAll;
            return result;
          }
          var args = [this.value()];
          push.apply(args, arguments);
          return func.apply(object, args);
        };
      }(func));
    }
  }
  return object;
}
module.exports = mixin;
