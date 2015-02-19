/* */ 
(function(process) {
  var unzip = require("./unzip");
  function zip() {
    var length = arguments.length,
        array = Array(length);
    while (length--) {
      array[length] = arguments[length];
    }
    return unzip(array);
  }
  module.exports = zip;
})(require("process"));
