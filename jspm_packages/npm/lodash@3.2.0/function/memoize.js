/* */ 
var MapCache = require("../internal/MapCache");
var FUNC_ERROR_TEXT = 'Expected a function';
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
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
