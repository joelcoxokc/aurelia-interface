/* */ 
var isIndex = require("./isIndex"),
    isLength = require("./isLength");
function baseAt(collection, props) {
  var index = -1,
      length = collection.length,
      isArr = isLength(length),
      propsLength = props.length,
      result = Array(propsLength);
  while (++index < propsLength) {
    var key = props[index];
    if (isArr) {
      key = parseFloat(key);
      result[index] = isIndex(key, length) ? collection[key] : undefined;
    } else {
      result[index] = collection[key];
    }
  }
  return result;
}
module.exports = baseAt;
