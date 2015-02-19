/* */ 
var MapCache = require("../internal/MapCache"),
    isFunction = require("../lang/isFunction");
var FUNC_ERROR_TEXT = 'Expected a function';
function memoize(func, resolver) {
  if (!isFunction(func) || (resolver && !isFunction(resolver))) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var cache = memoized.cache,
        key = resolver ? resolver.apply(this, arguments) : arguments[0];
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, arguments);
    cache.set(key, result);
    return result;
  };
  memoized.cache = new memoize.Cache;
  return memoized;
}
memoize.Cache = MapCache;
module.exports = memoize;
