/* */ 
(function(process) {
  function baseToString(value) {
    if (typeof value == 'string') {
      return value;
    }
    return value == null ? '' : (value + '');
  }
  module.exports = baseToString;
})(require("process"));
