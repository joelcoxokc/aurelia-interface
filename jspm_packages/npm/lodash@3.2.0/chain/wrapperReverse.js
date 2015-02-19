/* */ 
var LazyWrapper = require("../internal/LazyWrapper"),
    LodashWrapper = require("../internal/LodashWrapper"),
    thru = require("./thru");
function wrapperReverse() {
  var value = this.__wrapped__;
  if (value instanceof LazyWrapper) {
    if (this.__actions__.length) {
      value = new LazyWrapper(this);
    }
    return new LodashWrapper(value.reverse(), this.__chain__);
  }
  return this.thru(function(value) {
    return value.reverse();
  });
}
module.exports = wrapperReverse;
