/* */ 
var baseCreate = require("./baseCreate"),
    isObject = require("../lang/isObject");
function createCtorWrapper(Ctor) {
  return function() {
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, arguments);
    return isObject(result) ? result : thisBinding;
  };
}
module.exports = createCtorWrapper;
