/* */ 
var baseCompareAscending = require("./baseCompareAscending");
function compareMultipleAscending(object, other) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length;
  while (++index < length) {
    var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      return result;
    }
  }
  return object.index - other.index;
}
module.exports = compareMultipleAscending;
