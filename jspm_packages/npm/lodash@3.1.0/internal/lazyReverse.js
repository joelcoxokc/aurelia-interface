/* */ 
var LazyWrapper = require("./LazyWrapper");
function lazyReverse() {
  if (this.filtered) {
    var result = new LazyWrapper(this);
    result.dir = -1;
    result.filtered = true;
  } else {
    result = this.clone();
    result.dir *= -1;
  }
  return result;
}
module.exports = lazyReverse;
