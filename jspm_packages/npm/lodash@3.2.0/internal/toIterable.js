/* */ 
(function(process) {
  var isLength = require("./isLength"),
      isObject = require("../lang/isObject"),
      values = require("../object/values");
  function toIterable(value) {
    if (value == null) {
      return [];
    }
    if (!isLength(value.length)) {
      return values(value);
    }
    return isObject(value) ? value : Object(value);
  }
  module.exports = toIterable;
})(require("process"));
