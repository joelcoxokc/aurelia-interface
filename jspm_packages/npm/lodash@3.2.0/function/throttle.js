/* */ 
var debounce = require("./debounce"),
    isObject = require("../lang/isObject");
var FUNC_ERROR_TEXT = 'Expected a function';
var debounceOptions = {
  'leading': false,
  'maxWait': 0,
  'trailing': false
};
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (options === false) {
    leading = false;
  } else if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  debounceOptions.leading = leading;
  debounceOptions.maxWait = +wait;
  debounceOptions.trailing = trailing;
  return debounce(func, wait, debounceOptions);
}
module.exports = throttle;
