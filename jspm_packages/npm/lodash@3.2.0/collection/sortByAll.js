/* */ 
var baseEach = require("../internal/baseEach"),
    baseFlatten = require("../internal/baseFlatten"),
    baseSortBy = require("../internal/baseSortBy"),
    compareMultipleAscending = require("../internal/compareMultipleAscending"),
    isIterateeCall = require("../internal/isIterateeCall"),
    isLength = require("../internal/isLength");
function sortByAll(collection) {
  var args = arguments;
  if (args.length > 3 && isIterateeCall(args[1], args[2], args[3])) {
    args = [collection, args[1]];
  }
  var index = -1,
      length = collection ? collection.length : 0,
      props = baseFlatten(args, false, false, 1),
      result = isLength(length) ? Array(length) : [];
  baseEach(collection, function(value) {
    var length = props.length,
        criteria = Array(length);
    while (length--) {
      criteria[length] = value == null ? undefined : value[props[length]];
    }
    result[++index] = {
      'criteria': criteria,
      'index': index,
      'value': value
    };
  });
  return baseSortBy(result, compareMultipleAscending);
}
module.exports = sortByAll;
