/* */ 
var createCtorWrapper = require("./createCtorWrapper");
function createBindWrapper(func, thisArg) {
  var Ctor = createCtorWrapper(func);
  function wrapper() {
    return (this instanceof wrapper ? Ctor : func).apply(thisArg, arguments);
  }
  return wrapper;
}
module.exports = createBindWrapper;
